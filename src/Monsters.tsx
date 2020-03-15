import {GameContext, MonsterData, MonsterType, PlacedMonster} from "./Model";
import {AttributeValues, BossMonster, Monster} from "./config/GloomhavenHelper/data";
import React, {ChangeEvent} from "react";
import {isDefined} from "./util";

export function MonsterPicker(props: {
    scenarioMonsters: string[],
    monsters: Map<MonsterType, MonsterData>
    addMonster: (monster: MonsterType) => any,
}) {
    const monsterData = props.scenarioMonsters.map(
        id => props.monsters.get(id)
    ).filter(isDefined);

    return <div>
        {monsterData.map(
            monster => <div key={monster.id}>
                {monster.id}
                {monster.id !== monster.deck ? ` (${monster.deck})` : ""}
                &nbsp;
                <button onClick={() => props.addMonster(monster.id)}>Add</button>
            </div>
        )}
    </div>;
}

function findLevelData(levels: Array<{ level: number } & Monster>, wantedLevel: number) {
    for (let level of levels) {
        if (level.level === wantedLevel) {
            return level;
        }
    }
    return undefined;
}

export function placeMonsterForContext(context: GameContext) {

    function mapMonsterValues(definition: number | string) {
        if (typeof definition === "number") {
            return definition;
        }

        let formula = definition
            .replace("C", context.players.length.toString())
            .replace("L", context.level.toString())
            .replace("x", "*")
        ;
        // eslint-disable-next-line no-eval
        const mappedValue = eval(formula);

        if (typeof mappedValue !== "number") {
            console.log("expected number, got", mappedValue);
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

export function MonsterDisplay(props: { monster: PlacedMonster, updateMonster: (next: PlacedMonster) => any }) {

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