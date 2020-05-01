

// from http://esotericsoftware.com/gloomhaven-helper-web/assets/data.json

import {GloomHelperData} from "./GloomhavenHelper/data";
import {DECK_DEFINITONS} from "./GloomyCompanion/decks";
import {MODIFIER_CARDS, ModifierCard} from "./GloomyCompanion/modifiers";

export const GloomyData = {
    ...GloomHelperData,
    monsterDecks: DECK_DEFINITONS,
    modifiers: MODIFIER_CARDS,
    modifierDeckPrototype: [
        ...Array(6).fill(MODIFIER_CARDS.PLUS0) as ModifierCard[],
        ...Array(5).fill(MODIFIER_CARDS.PLUS1) as ModifierCard[],
        ...Array(5).fill(MODIFIER_CARDS.MINUS1) as ModifierCard[],
        MODIFIER_CARDS.PLUS2,
        MODIFIER_CARDS.MINUS2,
        MODIFIER_CARDS.DOUBLE,
        MODIFIER_CARDS.NULL,
    ].map(c => ({...c})),
} as const;

export interface MonsterCard {
    priority: number,
    id: string,
    effects: string[],


}

export type GloomyData = typeof GloomyData;
