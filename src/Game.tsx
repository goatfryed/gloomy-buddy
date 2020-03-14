import React, {useMemo, useState} from "react";
import {GloomHelperData, GloomHelperMonsterData, ScenarioData} from "./config/GloomhavenHelper/data";
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

export function Game({data}: { data: GloomyData }) {

    const monsters = useMemo<Map<MonsterType, MonsterData>>(
        () => Object.keys(data.monsters)
            .map(id => ({id, ...data.monsters[id]}))
            .reduce((map, val) => map.set(val.id, val), new Map()),
        [data.monsters]
    );

    const [scenario, setScenario] = useState<undefined | ScenarioData>();
    const [revealedMonsters, setMonsters] = useState<MonsterData[]>([]);
    let onAddMonster = (monster: MonsterType) => setMonsters(activeMonsters => [...activeMonsters, monsters.get(monster) as MonsterData]);

    return <div>
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
            {Array.from(revealedMonsters.values()).map(
                (monster,i) => <MonsterDisplay key={i} monster={monster}/>
            )}
        </div>
    </div>;
}

function MonsterDisplay(props: {monster: MonsterData}) {
    return <div>{props.monster.id}</div>
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