import React, {useMemo, useState} from "react";
import {ScenarioData,} from "./config/GloomhavenHelper/data";
import {GloomyData} from "./config/GloomyData";
import {ModifierDrawer} from "./Modifiers";
import {GameContext, MonsterData, MonsterType, PlacedMonster, Player} from "./Model";
import {MonsterDisplay, MonsterPicker, placeMonsterForContext} from "./Monsters";

function MonsterOverview(props: { placedMonsters: PlacedMonster[], onMonsterUpdate: (id: number, monster: PlacedMonster) => any }) {
    return <div>
        {props.placedMonsters.map(
            (monster, i) => <MonsterDisplay key={i} monster={monster} updateMonster={next => props.onMonsterUpdate(i, next)}/>
        )}
    </div>;
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
        </>}
        <hr/>
        <ModifierDrawer data={data}/>
    </div>;
}

