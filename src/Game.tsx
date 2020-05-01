import React, {useMemo, useRef, useState} from "react";
import {MonsterAbility, MonsterCard, ScenarioData,} from "./config/GloomhavenHelper/data";
import {GloomyData} from "./config/GloomyData";
import {ModifierDrawer} from "./Modifiers";
import {GameContext, MonsterData, MonsterType, PlacedMonster, Player} from "./Model";
import {MonsterDisplay, MonsterPicker, placeMonsterForContext} from "./Monsters";
import {GloomyCompanionMonsterDeck} from "./config/GloomyCompanion/decks";
import {isDefined, selectRandom} from "./util";

function MonsterOverview(props: { placedMonsters: PlacedMonster[], onMonsterUpdate: (id: number, monster: PlacedMonster) => any }) {
    return <div>
        {props.placedMonsters.map(
            (monster, i) => <MonsterDisplay key={i} monster={monster} updateMonster={next => props.onMonsterUpdate(i, next)}/>
        )}
    </div>;
}

function findMonsterDeck(
    definition: Omit<MonsterData, "levels">,
    monsterDecks: Array<MonsterAbility>
) {
    for (let deck of monsterDecks) {
        if (deck.name === definition.deck) {
            return deck;
        }
    }

    return undefined;
}

function useMonstersDataAdapter(data: GloomyData) {

    const monsters = useMemo<Map<MonsterType, MonsterData>>(
        () => Object.keys(data.monsters)
            .map(id => ({id, ...data.monsters[id]}))
            .reduce((map, val) => map.set(val.id, val), new Map()),
        [data.monsters]
    );

    const monsterAbilities = useMemo<Map<MonsterData, MonsterAbility|undefined>>(
        () => new Map(Array.from(monsters.entries())
            .map(([key, monster]) =>
                [monster, findMonsterDeck(monster, data.monsterAbilities)]
            )),
        [monsters, data.monsterAbilities]
    );

    return {
        monsters,
        monsterAbilities,
    }
}

function useMonsterActions(monsterAbilities: Map<MonsterData, MonsterAbility | undefined>, revealedMonsters: PlacedMonster[]) {
    const lastActions = useRef(new Map());

    useMemo(
        () => revealedMonsters,
        [revealedMonsters]
    )
}

function useGameContext() {
    const [context, setContext] = useState<GameContext>({
        level: 1,
        players: []
    });

    const boundPlaceMonster = placeMonsterForContext(context);
    const [revealedMonsters, setRevealedMonsters] = useState<PlacedMonster[]>([]);


    const addPlayer = () => {
        setContext(context => ({
            ...context,
            players: [...context.players, new Player()],
        }))
    };
    return {context, boundPlaceMonster, revealedMonsters, setRevealedMonsters, addPlayer};
}

export function Game({data}: { data: GloomyData }) {

    const {monsters, monsterAbilities} = useMonstersDataAdapter(data);

    const {context, boundPlaceMonster, revealedMonsters, setRevealedMonsters, addPlayer} = useGameContext();
    useMonsterActions(monsterAbilities, revealedMonsters);

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

    const [scenario, setScenario] = useState<undefined | ScenarioData>();

    const actions =  useMemo(
        () => {
            const actions = new Map<PlacedMonster, MonsterCard>();
            for (let monster of revealedMonsters) {
                const deck = findMonsterDeck(monster.definition, data.monsterAbilities);
                if (isDefined(deck)) {
                    actions.set(
                        monster,
                        selectRandom(deck.cards)
                    )
                }
            }

            return actions;
        },
        [revealedMonsters, data]
    );

    return <div>
        <button onClick={addPlayer}>Add Player</button>
        <hr/>
        <select onChange={(e) => setScenario(data.scenarios[e.target.value])}>
            {Object.keys(data.scenarios).map(key => <option value={key} key={key}>{key}</option>)}
        </select>
        {scenario?.monsters && <MonsterPicker
            monsters={monsters}
            scenarioMonsters={scenario.monsters}
            addMonster={onAddMonster}
        />}
        {revealedMonsters.length > 0 && <>
            <hr/>
            <MonsterOverview placedMonsters={revealedMonsters}
                             onMonsterUpdate={updateMonster}
            />
            {Array.from(actions.values()).map(
                (value,key) => <div key={key}>
                    <div>{value[0]}:</div>
                    {value.slice(3).map((line, key) => <div key={key}>{line}</div>)}
                </div>
            )}
        </>}
        <hr/>
        <ModifierDrawer data={data}/>
    </div>;
}

