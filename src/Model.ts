import {GloomHelperData, GloomHelperMonsterData} from "./config/GloomhavenHelper/data";

export type MonsterType = keyof GloomHelperData["monsters"];
export type MonsterData = { id: MonsterType } & GloomHelperMonsterData;

export class PlacedMonster {

    public damage = 0;

    get currentHealth() {
        return this.health - this.damage;
    }

    set currentHealth(next) {
        this.damage = this.health - next;
    }

    constructor(
        readonly definition: Omit<MonsterData, "levels">,
        readonly health: number,
    ) {
    }

    copy() {
        // @ts-ignore
        return Object.assign(new this.constructor(), this) as this;
    }
}

export class Player {
    copy() {
        // @ts-ignore
        return Object.assign(new this.constructor(), this) as this;
    }
}

export interface GameContext {
    players: Player[];
    level: number;

}