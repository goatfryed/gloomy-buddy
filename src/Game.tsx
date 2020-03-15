import React, {ChangeEvent, useMemo, useState} from "react";
import {
    AttributeValues,
    BossMonster,
    GloomHelperData,
    GloomHelperMonsterData,
    Monster,
    ScenarioData,
} from "./config/GloomhavenHelper/data";
import {GloomyData} from "./config/GloomyData";
import {ModifierCard} from "./config/GloomyCompanion/modifiers";
import JSONTreeComponent from "react-json-tree";
import {isDevelopment} from "./App";

function isDefined<T>(v: T | undefined): v is T {
    return !!v;
}

function MonsterPicker(props: {
    scenarioMonsters: string[],
    monsters: Map<MonsterType, MonsterData>
    addMonster: (monster: MonsterType) => any,
}) {
    const monsterData = props.scenarioMonsters.map(
        id => props.monsters.get(id)
    ).filter(isDefined);

    return <div>
        {monsterData.map(
            monster => <div>
                {monster.id}
                {monster.id !== monster.deck ? ` (${monster.deck})` : ""}
                &nbsp;
                <button onClick={() => props.addMonster(monster.id)}>Add</button>
            </div>
        )}
    </div>;
}

type MonsterType = keyof GloomHelperData["monsters"];
type MonsterData = { id: MonsterType } & GloomHelperMonsterData;

class PlacedMonster {

    public damage = 0;

    get currentHealth() {
        return this.health - this.damage;
    }

    set currentHealth(next) {
        this.damage = this.health - next;
    }

    constructor(
        readonly definition: Omit<MonsterData,"levels">,
        readonly health: number,
    ) {}

    copy() {
        // @ts-ignore
        return Object.assign(new this.constructor(), this) as this;
    }
}

class Player {
    copy() {
        // @ts-ignore
        return Object.assign(new this.constructor(), this) as this;
    }
}

function findLevelData(levels: Array<{ level: number } & Monster>, wantedLevel: number) {
    for(let level of levels) {
        if (level.level === wantedLevel) {
            return level;
        }
    }
    return undefined;
}

function placeMonsterForContext(context: GameContext) {

    function mapMonsterValues(definition: number|string) {
        if (typeof definition === "number") {
            return definition;
        }

        let formula = definition
            .replace("C", context.players.length.toString())
            .replace("L", context.level.toString())
            .replace("x", "*")
        ;
        const mappedValue = eval(formula);

        if (typeof mappedValue !== "number") {
            console.log( "expected number, got", mappedValue);
            throw new Error(`couldn't convert health string ${definition}`)
        }

        return mappedValue;
    }

    function placeStandardMonster(monsterValues: AttributeValues, definition: MonsterData): PlacedMonster {
        return new PlacedMonster(
            definition,
            mapMonsterValues(monsterValues.health)
        )
    }

    function placeBossMonster(monsterValues: BossMonster, definition: MonsterData): PlacedMonster {
        return new PlacedMonster(
            definition,
            mapMonsterValues(monsterValues.health)
        );
    }

    return function placeMonster(definition: MonsterData, context: GameContext): PlacedMonster {
        const levelData = findLevelData(definition.levels, context.level);

        if (levelData === undefined) {
            throw new Error("monster not defined for wanted level " + context.level);
        }

        if ("normal" in levelData) {
            return placeStandardMonster(levelData.normal, definition);
        }

        return placeBossMonster(levelData, definition);
    }
}

interface GameContext {
    players: Player[];
    level: number;

}

export function Game({data}: { data: GloomyData }) {

    const monsters = useMemo<Map<MonsterType, MonsterData>>(
        () => Object.keys(data.monsters)
            .map(id => ({id, ...data.monsters[id]}))
            .reduce((map, val) => map.set(val.id, val), new Map()),
        [data.monsters]
    );

    const [context, setContext] = useState<GameContext>({
        level: 1,
        players: []
    });

    const addPlayer = () => {
        setContext(context => ({
            ...context,
           players: [...context.players, new Player()],
        }))
    };

    const boundPlaceMonster = placeMonsterForContext(context);

    const [scenario, setScenario] = useState<undefined | ScenarioData>();
    const [revealedMonsters, setRevealedMonsters] = useState<PlacedMonster[]>([]);
    let onAddMonster = (monster: MonsterType) => setRevealedMonsters(
        activeMonsters => {
            try {
                return [
                    ...activeMonsters,
                    boundPlaceMonster(monsters.get(monster) as MonsterData, context),
                ]
            } catch (e) {
                console.error(
                    `failed to place monster ${monster}`,
                    e
                );
                return activeMonsters;
            }
        }
    );

    function updateMonster(id: number, next: PlacedMonster) {
        const nextRevealed = [...revealedMonsters];
        nextRevealed[id] = next;
        setRevealedMonsters(nextRevealed);
    }

    return <div>
        <button onClick={addPlayer}>Add Player</button>
        <select onChange={(e) => setScenario(data.scenarios[e.target.value])}>
            {Object.keys(data.scenarios).map(key => <option value={key} key={key}>{key}</option>)}
        </select>
        <ModifierDrawer data={data}/>
        {scenario?.monsters && <MonsterPicker
            monsters={monsters}
            scenarioMonsters={scenario.monsters}
            addMonster={onAddMonster}
        />}
        <div>
            {revealedMonsters.map(
                (monster,i) => <MonsterDisplay key={i} monster={monster} updateMonster={next => updateMonster(i, next)}/>
            )}
        </div>
    </div>;
}

function MonsterDisplay(props: {monster: PlacedMonster, updateMonster: (next: PlacedMonster) => any}) {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.target.value;
        if (nextValue === "") return;

        const nextMonster = props.monster.copy();
        nextMonster.currentHealth = Number.parseInt(nextValue);
        props.updateMonster(nextMonster);
    };

    return <div>
        {props.monster.definition.id}
        {' '}
        <input
            type="number" value={props.monster.currentHealth} min={0} max={props.monster.health}
            onChange={handleChange}
        />
        /{props.monster.health}
    </div>
}

function ModifierDrawer({data}: { data: GloomyData }) {
    const monsterModifierDeck = data.modifierDeckPrototype;
    const [drawnModifiers, setDrawnModifiers] = useState<Array<ModifierCard>>([]);
    const drawables = monsterModifierDeck.filter(card => !drawnModifiers.includes(card));
    const drawModifier = drawables.length && (() => {
        let rng = Math.random();
        let rngInteger = Math.floor(rng * drawables.length);
        const drawn = drawables[rngInteger];
        setDrawnModifiers([drawn, ...drawnModifiers])
    });

    const endTurn = () => {
        if (drawnModifiers.some(modifier => modifier.shuffle)) {
            setDrawnModifiers([]);
        }
    };

    return <div>
        <button disabled={!drawModifier} onClick={drawModifier || undefined}>Draw Modifier</button>
        <button onClick={endTurn}>End turn</button>
        {drawnModifiers.length > 0 && <div>{drawnModifiers[0].type}</div>}
        {drawnModifiers.length > 1 && <div>{drawnModifiers[1].type}</div>}
        {isDevelopment() && <JSONTreeComponent data={drawnModifiers}/>}
    </div>;
}