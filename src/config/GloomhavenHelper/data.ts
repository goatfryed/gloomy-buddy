export type Edition = "FC";

export interface AttributeValues {
    health: string | number,
    attack: string | number,
    move: number,
    range?: number,
    attributes?: string[],
    immunities?: string[],
    special1?: string[],
    special2?: string[],
    notes?: string,
}

export interface StandardMonster {
    normal: AttributeValues,
    elite: AttributeValues,
}

export interface BossMonster extends AttributeValues {
}

export type Monster = BossMonster | StandardMonster;

export interface ScenarioData {
    monsters?: string[],
    special?: string[],
    edition?: Edition,
}

export type MonsterAbility = {
    name: string,
    edition?: Edition,
    cards: Array<[
        number,
        boolean,
        number,
        ...string[]
    ]>
};

export type GloomHelperMonsterData = {
    deck: string,
    count: number,
    levels: Array<{ level: number } & Monster>
    edition?: Edition,
    flying?: boolean,
    hidden?: boolean,
};

export interface GloomHelperData {
    monsterAbilities: Array<MonsterAbility>,
    monsters: {
        [key: string]: GloomHelperMonsterData
    },
    scenarios: {
        [key: string]: ScenarioData
    },
    sections: {
        [key: string]: ScenarioData
    },
}

// which is js, but not json
export const GloomHelperData: GloomHelperData = {
    monsterAbilities: [
        {
            name: "Ancient Artillery",
            cards: [
                [
                    700,
                    false,
                    46,
                    "%attack% - 1",
                    "^%range% + 2"
                ],
                [
                    701,
                    true,
                    71,
                    "%attack% + 0",
                    "^%range% + 0",
                    "^All adjacent enemies suffer 2 damage"
                ],
                [
                    702,
                    true,
                    71,
                    "%attack% + 0",
                    "^%range% + 0",
                    "^All adjacent enemies suffer 2 damage"
                ],
                [
                    703,
                    false,
                    37,
                    "%push% 1",
                    "^Target all adjacent enemies",
                    "%attack% - 1 %aoe-triangle-2-side%",
                    "^%range% - 1"
                ],
                [
                    704,
                    false,
                    37,
                    "%push% 1",
                    "^Target all adjacent enemies",
                    "%attack% - 1 %aoe-circle%",
                    "^%range% - 1"
                ],
                [
                    706,
                    false,
                    17,
                    "%push% 2",
                    "^Target all adjacent enemies",
                    "%shield% + 2",
                    "%attack% - 2",
                    "^%range% + 0"
                ],
                [
                    705,
                    false,
                    95,
                    "%attack% + 1",
                    "^%range% + 0"
                ],
                [
                    707,
                    false,
                    46,
                    "%attack% - 1 %aoe-triangle-2-side%",
                    "^%range% + 0",
                    "^%immobilize%"
                ]
            ]
        },
        {
            name: "Archer",
            cards: [
                [
                    532,
                    false,
                    16,
                    "%move% + 1",
                    "%attack% - 1",
                    "^%range% + 0"
                ],
                [
                    533,
                    false,
                    31,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0"
                ],
                [
                    534,
                    false,
                    32,
                    "%move% + 0",
                    "%attack% + 1",
                    "^%range% - 1"
                ],
                [
                    535,
                    false,
                    44,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% + 0"
                ],
                [
                    536,
                    false,
                    56,
                    "%attack% - 1",
                    "^%range% + 0",
                    "^%target% 2"
                ],
                [
                    537,
                    true,
                    68,
                    "%attack% + 1",
                    "^%range% + 1"
                ],
                [
                    538,
                    false,
                    14,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%range% + 0",
                    "*Create a 3 damage trap in an adjacent empty hex closest to an enemy"
                ],
                [
                    539,
                    true,
                    29,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% + 1",
                    "^%immobilize%"
                ]
            ]
        },
        {
            name: "Boss",
            cards: [
                [
                    572,
                    false,
                    11,
                    "Special 2"
                ],
                [
                    573,
                    false,
                    14,
                    "Special 2"
                ],
                [
                    574,
                    true,
                    17,
                    "Special 2"
                ],
                [
                    575,
                    true,
                    85,
                    "Special 1"
                ],
                [
                    576,
                    false,
                    79,
                    "Special 1"
                ],
                [
                    577,
                    false,
                    73,
                    "Special 1"
                ],
                [
                    578,
                    false,
                    36,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    579,
                    false,
                    52,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%range% 3",
                    "^%target% 2"
                ]
            ]
        },
        {
            name: "Cave Bear",
            cards: [
                [
                    596,
                    false,
                    13,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    587,
                    false,
                    14,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%immobilize%"
                ],
                [
                    598,
                    true,
                    34,
                    "%attack% + 1",
                    "^%wound%"
                ],
                [
                    599,
                    false,
                    41,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    600,
                    false,
                    60,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    601,
                    true,
                    80,
                    "%attack% - 1",
                    "%move% - 2",
                    "%attack% - 1",
                    "^%wound%"
                ],
                [
                    602,
                    false,
                    61,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%target% 2"
                ],
                [
                    603,
                    false,
                    3,
                    "%shield% + 1",
                    "%retaliate% + 2",
                    "%heal% 2",
                    "^Self"
                ]
            ]
        },
        {
            name: "Cultist",
            cards: [
                [
                    604,
                    false,
                    10,
                    "%move% - 1",
                    "%attack% - 1",
                    "On Death:",
                    "^%attack% + 2 %aoe-circle-with-middle-black%"
                ],
                [
                    605,
                    false,
                    10,
                    "%move% - 1",
                    "%attack% - 1",
                    "On Death:",
                    "^%attack% + 2 %aoe-circle-with-middle-black%"
                ],
                [
                    606,
                    false,
                    27,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    607,
                    false,
                    27,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    608,
                    false,
                    39,
                    "%move% - 1",
                    "%attack% + 0",
                    "%heal% 1",
                    "^Self"
                ],
                [
                    609,
                    true,
                    63,
                    " ",
                    "Summon normal Living Bones",
                    "^Cultist suffers 2 damage."
                ],
                [
                    610,
                    true,
                    63,
                    " ",
                    "Summon normal Living Bones",
                    "^Cultist suffers 2 damage."
                ],
                [
                    611,
                    false,
                    31,
                    "%move% - 1",
                    "%heal% 3",
                    "^%range% 3"
                ]
            ]
        },
        {
            name: "Deep Terror",
            cards: [
                [
                    732,
                    false,
                    65,
                    "%attack% + 0",
                    "^%range% 3",
                    "^%target% 3",
                    "^%curse%"
                ],
                [
                    733,
                    true,
                    60,
                    "%attack% + 0 %aoe-line-6-with-black%",
                    "^%pierce% 3"
                ],
                [
                    734,
                    true,
                    60,
                    "%attack% + 0 %aoe-line-6-with-black%",
                    "^%pierce% 3"
                ],
                [
                    735,
                    false,
                    84,
                    "%attack% - 1",
                    "^Target all adjacent enemies",
                    "%attack% + 0",
                    "^%range% 4",
                    "^%wound%"
                ],
                [
                    736,
                    false,
                    75,
                    "%attack% + 0",
                    "^%poison%",
                    "%attack% - 1",
                    "^%range% 5",
                    "^%immobilize%"
                ],
                [
                    737,
                    false,
                    75,
                    "%attack% - 2",
                    "^Target all adjacent enemies",
                    "^%disarm%",
                    "%attack% + 0",
                    "^%range% 3",
                    "^%target% 2"
                ],
                [
                    738,
                    false,
                    96,
                    "%attack% - 2",
                    "^%range% 6",
                    "^Summon normal Deep Terror in a hex adjacent to the target"
                ],
                [
                    739,
                    false,
                    54,
                    "%wound% and",
                    "%poison%",
                    "^Target all adjacent enemies",
                    "%attack% + 0",
                    "^%range% 4"
                ]
            ]
        },
        {
            name: "Earth Demon",
            cards: [
                [
                    636,
                    true,
                    40,
                    "%heal% 3",
                    "^Self",
                    "%earth%%use%",
                    "!*%immobilize%",
                    "!*Target all enemies within %range% 3"
                ],
                [
                    637,
                    true,
                    42,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    638,
                    false,
                    62,
                    "%move% + 0",
                    "%attack% + 0",
                    "%earth%"
                ],
                [
                    639,
                    false,
                    71,
                    "%attack% + 0",
                    "^%range% 4",
                    "%earth%%use%",
                    "!^%target% 2"
                ],
                [
                    640,
                    false,
                    83,
                    "%move% - 1",
                    "%attack% + 1",
                    "%earth%"
                ],
                [
                    641,
                    false,
                    93,
                    "%move% - 1",
                    "%attack% - 1",
                    "^Target all adjacent enemies",
                    "%earth%%use%",
                    "!^%push% 1"
                ],
                [
                    642,
                    false,
                    79,
                    "%move% + 1",
                    "%attack% + 0",
                    "%air%%use%",
                    "!^-2 %attack%"
                ],
                [
                    643,
                    false,
                    87,
                    "%move% + 0",
                    "%attack% - 1",
                    "%aoe-4-with-black%",
                    "%any%%use%",
                    "!%earth%"
                ]
            ]
        },
        {
            name: "Flame Demon",
            cards: [
                [
                    628,
                    false,
                    3,
                    "%move% + 1",
                    "%attack% - 1",
                    "^%range% + 0",
                    "%fire%"
                ],
                [
                    629,
                    false,
                    24,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0",
                    "%fire%"
                ],
                [
                    630,
                    true,
                    46,
                    "%attack% + 0",
                    "^%range% + 0",
                    "%fire%%use%",
                    "!%aoe-circle%"
                ],
                [
                    631,
                    false,
                    49,
                    "%attack% + 0",
                    "%aoe-line-3-with-black%",
                    "%fire%%use%",
                    "!^+1 %attack%",
                    "!^%wound%"
                ],
                [
                    632,
                    false,
                    67,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% - 1",
                    "%fire%"
                ],
                [
                    633,
                    false,
                    77,
                    "%attack% + 0",
                    "^Target all adjacent enemies",
                    "%ice%%use%",
                    "!^Flame Demon suffers 1 damage."
                ],
                [
                    634,
                    true,
                    30,
                    "%fire%%use%",
                    "!^All adjacent enemies",
                    "!^suffer 2 damage.",
                    "%move% + 0",
                    "%attack% - 2",
                    "^%range% + 0",
                    "^%wound%",
                    "^%target% 2"
                ],
                [
                    635,
                    false,
                    8,
                    "%move% - 1",
                    "*Create a 4 damage trap in an adjacent empty hex closest to an enemy",
                    "%any%%use%",
                    "!%fire%"
                ]
            ]
        },
        {
            name: "Frost Demon",
            cards: [
                [
                    620,
                    false,
                    18,
                    "%immobilize%",
                    "^Target all enemies within %range% 2",
                    "%ice%%use%",
                    "!^%heal% 3",
                    "!^Self"
                ],
                [
                    621,
                    false,
                    38,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    622,
                    false,
                    58,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    623,
                    false,
                    58,
                    "%move% - 1",
                    "%attack% + 0",
                    "^%range% 2",
                    "%ice%%use%",
                    "!^+2 %attack%, +1 %range%"
                ],
                [
                    624,
                    true,
                    78,
                    "%move% - 1",
                    "%attack% + 0 %aoe-triangle-2-side-with-black%",
                    "%ice%"
                ],
                [
                    625,
                    true,
                    78,
                    "%move% - 1",
                    "%attack% + 0 %aoe-triangle-2-side-with-black%",
                    "%ice%"
                ],
                [
                    626,
                    false,
                    58,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%pierce% 3",
                    "%any%%use%",
                    "!%ice%"
                ],
                [
                    627,
                    false,
                    18,
                    "%shield% + 2",
                    "%move% + 1",
                    "%fire%%use%",
                    "!^Frost Demon suffers 1 damage"
                ]
            ]
        },
        {
            name: "Giant Viper",
            cards: [
                [
                    684,
                    true,
                    32,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Add +2 Attack if the target is adjacent to any of the Giant Viper's allies."
                ],
                [
                    685,
                    true,
                    32,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Add +2 Attack if the target is adjacent to any of the Giant Viper's allies."
                ],
                [
                    686,
                    false,
                    11,
                    "%shield% + 1",
                    "%attack% - 1"
                ],
                [
                    687,
                    false,
                    43,
                    "%move% + 1",
                    "^%jump%",
                    "%attack% - 1",
                    "^Target all adjacent enemies."
                ],
                [
                    688,
                    false,
                    58,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    689,
                    false,
                    58,
                    "%move% + 1",
                    "^%jump%",
                    "%attack% - 1",
                    "^All attacks targeting Giant Viper this round gain Disadvantage."
                ],
                [
                    690,
                    false,
                    43,
                    "%move% - 1",
                    "^%jump%",
                    "%attack% + 0",
                    "^%target% 2"
                ],
                [
                    691,
                    false,
                    23,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%immobilize%",
                    "%attack% - 1"
                ]
            ]
        },
        {
            name: "Guard",
            cards: [
                [
                    524,
                    true,
                    15,
                    "%shield% + 1",
                    "%retaliate% + 2"
                ],
                [
                    525,
                    false,
                    30,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    526,
                    false,
                    35,
                    "%move% - 1",
                    "%attack% + 0",
                    "^%range% 2"
                ],
                [
                    527,
                    false,
                    50,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    528,
                    false,
                    50,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    529,
                    false,
                    70,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    530,
                    false,
                    55,
                    "%move% - 1",
                    "%attack% + 0",
                    "%strengthen%",
                    "^Self"
                ],
                [
                    531,
                    true,
                    15,
                    "%shield% + 1",
                    "%attack% + 0",
                    "^%poison%"
                ]
            ]
        },
        {
            name: "Harrower Infester",
            cards: [
                [
                    724,
                    false,
                    38,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%target% 2"
                ],
                [
                    725,
                    false,
                    7,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%poison%",
                    "%dark%"
                ],
                [
                    726,
                    false,
                    16,
                    "%move% - 1",
                    "%attack% - 1",
                    "%heal% 5",
                    "^Self"
                ],
                [
                    727,
                    false,
                    16,
                    "%attack% + 2",
                    "^%immobilize%",
                    "%retaliate% + 2"
                ],
                [
                    728,
                    true,
                    2,
                    "%shield% + 2",
                    "%retaliate% 2",
                    "^%range% 3"
                ],
                [
                    729,
                    false,
                    30,
                    "%move% - 1",
                    "%attack% + 0 %aoe-line-4-with-black%",
                    "%dark%%use%",
                    "!^Perform \"%heal% 2, Self\"",
                    "!^for each target damaged"
                ],
                [
                    730,
                    false,
                    38,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%target% 2",
                    "%dark%%use%",
                    "!^+2 %attack%, %disarm%"
                ],
                [
                    731,
                    true,
                    7,
                    "%attack% - 1",
                    "^%range% 3",
                    "^%muddle%",
                    "%heal% 4",
                    "^Self"
                ]
            ]
        },
        {
            name: "Hound",
            cards: [
                [
                    540,
                    false,
                    6,
                    "%move% - 1",
                    "%attack% + 0",
                    "^%immobilize%"
                ],
                [
                    541,
                    false,
                    7,
                    "%move% + 0",
                    "%muddle%",
                    "^Target all adjacent enemies"
                ],
                [
                    542,
                    true,
                    19,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Add +2 %attack% if the target is adjacent",
                    "^to any of the Hound's allies"
                ],
                [
                    543,
                    true,
                    19,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Add +2 %attack% if the target is adjacent",
                    "^to any of the Hound's allies"
                ],
                [
                    544,
                    false,
                    26,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    545,
                    false,
                    26,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    546,
                    false,
                    83,
                    "%move% - 2",
                    "%attack% + 1"
                ],
                [
                    547,
                    false,
                    72,
                    "%attack% - 1",
                    "^%pierce% 2",
                    "%move% - 2",
                    "%attack% - 1",
                    "^%pierce% 2"
                ]
            ]
        },
        {
            name: "Imp",
            cards: [
                [
                    676,
                    false,
                    5,
                    "%shield% + 5",
                    "%heal% 1",
                    "^Self"
                ],
                [
                    677,
                    false,
                    37,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0"
                ],
                [
                    678,
                    false,
                    37,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0"
                ],
                [
                    679,
                    false,
                    42,
                    "%move% + 1",
                    "%heal% 2",
                    "^%range% 3"
                ],
                [
                    680,
                    true,
                    43,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% + 0",
                    "^%target% 2",
                    "^%poison%"
                ],
                [
                    681,
                    false,
                    76,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% + 0"
                ],
                [
                    682,
                    true,
                    43,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% + 0",
                    "^%target% 2",
                    "^%curse%"
                ],
                [
                    683,
                    false,
                    24,
                    "%strengthen%",
                    "^Affect all allies within %range% 2",
                    "%muddle%",
                    "^Target all enemies within %range% 2"
                ]
            ]
        },
        {
            name: "Living Bones",
            cards: [
                [
                    516,
                    false,
                    64,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    517,
                    true,
                    20,
                    "%move% - 2",
                    "%attack% + 0",
                    "%heal% 2",
                    "^Self"
                ],
                [
                    518,
                    false,
                    25,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    519,
                    false,
                    45,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    520,
                    false,
                    45,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    521,
                    false,
                    81,
                    "%attack% + 2"
                ],
                [
                    522,
                    false,
                    74,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Target one enemy with all attacks"
                ],
                [
                    523,
                    true,
                    12,
                    "%shield% + 1",
                    "%heal% 2",
                    "^Self"
                ]
            ]
        },
        {
            name: "Living Corpse",
            cards: [
                [
                    564,
                    false,
                    21,
                    "%move% + 1",
                    "%muddle% and",
                    "%immobilize%",
                    "^Target one adjacent enemy"
                ],
                [
                    565,
                    false,
                    47,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    566,
                    true,
                    66,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    567,
                    true,
                    66,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    568,
                    false,
                    82,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    569,
                    false,
                    91,
                    "%move% + 1",
                    "Living Corpse suffers 1 damage."
                ],
                [
                    570,
                    false,
                    71,
                    "%move% + 0",
                    "%attack% + 1",
                    "%poison%",
                    "^Target all adjacent enemies"
                ],
                [
                    571,
                    false,
                    32,
                    "%attack% + 2",
                    "^%push% 1",
                    "Living Corpse suffers 1 damage."
                ]
            ]
        },
        {
            name: "Living Spirit",
            cards: [
                [
                    580,
                    true,
                    22,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%range% + 0",
                    "^%muddle%"
                ],
                [
                    581,
                    true,
                    33,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% + 0",
                    "^Target all enemies within range"
                ],
                [
                    582,
                    false,
                    48,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0"
                ],
                [
                    583,
                    false,
                    48,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0"
                ],
                [
                    584,
                    false,
                    61,
                    "%attack% + 0",
                    "^%range% - 1",
                    "^%target% 2"
                ],
                [
                    585,
                    false,
                    75,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% - 1",
                    "%heal% 1",
                    "^Self"
                ],
                [
                    586,
                    false,
                    55,
                    "%move% + 0",
                    "%curse%",
                    "^%range% + 0",
                    "^Target all enemies within range",
                    "%ice%"
                ],
                [
                    587,
                    false,
                    67,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% + 0",
                    "%ice%%use%",
                    "!^%stun%"
                ]
            ]
        },
        {
            name: "Lurker",
            cards: [
                [
                    612,
                    true,
                    11,
                    "%shield% + 1",
                    "%ice%%use%",
                    "!^%shield% + 2 instead",
                    "%wound%",
                    "^Target all adjacent enemies"
                ],
                [
                    613,
                    false,
                    28,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    614,
                    false,
                    38,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    615,
                    false,
                    38,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Target one enemy with all attacks"
                ],
                [
                    616,
                    false,
                    61,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    617,
                    false,
                    64,
                    "%attack% + 1",
                    "^Target all adjacent enemies"
                ],
                [
                    618,
                    false,
                    41,
                    "%ice%%use%",
                    "!^%strengthen%",
                    "!^Self",
                    "%move% + 0",
                    "%attack% - 1",
                    "^%wound%"
                ],
                [
                    619,
                    true,
                    23,
                    "%shield% + 1",
                    "%move% + 0",
                    "%attack% - 1",
                    "%ice%"
                ]
            ]
        },
        {
            name: "Night Demon",
            cards: [
                [
                    660,
                    false,
                    4,
                    "%move% + 1",
                    "%attack% - 1",
                    "%dark%"
                ],
                [
                    661,
                    false,
                    7,
                    "%move% + 1",
                    "%attack% - 1",
                    "%dark%%use%",
                    "!^%invisible%",
                    "!^Self"
                ],
                [
                    662,
                    false,
                    22,
                    "%move% + 0",
                    "%attack% + 0",
                    "%dark%"
                ],
                [
                    663,
                    false,
                    26,
                    "%attack% - 2",
                    "^%range% 3",
                    "^%target% 3",
                    "%dark%%use%",
                    "!^%muddle%"
                ],
                [
                    664,
                    true,
                    46,
                    "%move% - 1",
                    "%attack% + 1",
                    "%dark%%use%",
                    "!^+2 %attack%"
                ],
                [
                    665,
                    true,
                    41,
                    "%move% - 1",
                    "%attack% + 1",
                    "%dark%"
                ],
                [
                    666,
                    false,
                    35,
                    "%attack% - 1",
                    "%attack% - 1",
                    "^%pierce% 2",
                    "%light%%use%",
                    "!^%curse%",
                    "!^Self"
                ],
                [
                    667,
                    false,
                    15,
                    "%move% + 0",
                    "%attack% - 1",
                    "*All adjacent enemies and allies suffer 1 damage.",
                    "%any%%use%",
                    "!%dark%"
                ]
            ]
        },
        {
            name: "Ooze",
            cards: [
                [
                    692,
                    false,
                    36,
                    "%move% + 1",
                    "%attack% - 1",
                    "^%range% + 0"
                ],
                [
                    693,
                    false,
                    57,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0"
                ],
                [
                    694,
                    false,
                    59,
                    "%attack% + 0",
                    "^%range% + 0",
                    "^%target% 2",
                    "^%poison%"
                ],
                [
                    695,
                    false,
                    66,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% + 1"
                ],
                [
                    696,
                    true,
                    94,
                    "Ooze suffers 2 damage",
                    "*Summons normal Ooze with a hit point value equal to the summoning Ooze's current hit point value (limited by a normal Ooze's specified maximum hit point value)"
                ],
                [
                    697,
                    true,
                    94,
                    "Ooze suffers 2 damage",
                    "*Summons normal Ooze with a hit point value equal to the summoning Ooze's current hit point value (limited by a normal Ooze's specified maximum hit point value)"
                ],
                [
                    699,
                    false,
                    85,
                    "%push% 1 and",
                    "%poison%",
                    "^Target all adjacent enemies",
                    "%attack% + 1",
                    "^%range% - 1"
                ],
                [
                    698,
                    false,
                    66,
                    "%move% - 1",
                    "%loot% 1",
                    "%heal% 2",
                    "^Self"
                ]
            ]
        },
        {
            name: "Rending Drake",
            cards: [
                [
                    548,
                    false,
                    12,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    549,
                    true,
                    13,
                    "%attack% - 1",
                    "%move% - 1",
                    "%attack% - 1"
                ],
                [
                    550,
                    false,
                    25,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    551,
                    false,
                    39,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    552,
                    false,
                    54,
                    "%move% - 2",
                    "%attack% - 1",
                    "^%range% 3",
                    "^%target% 2",
                    "^%poison%"
                ],
                [
                    553,
                    false,
                    59,
                    "%move% - 2",
                    "%attack% + 1",
                    "^%target% 2"
                ],
                [
                    555,
                    false,
                    6,
                    "%shield% + 2",
                    "%heal% 2",
                    "^Self",
                    "%strengthen%",
                    "^Self"
                ],
                [
                    554,
                    true,
                    72,
                    "%attack% - 1",
                    "%attack% - 1",
                    "%attack% - 2"
                ]
            ]
        },
        {
            name: "Savvas Icestorm",
            cards: [
                [
                    708,
                    false,
                    70,
                    "%push% 2",
                    "^Target all adjacent enemies",
                    "%air%%use%",
                    "!^%push% 4 instead",
                    "%attack% + 1",
                    "^%range% + 1"
                ],
                [
                    709,
                    false,
                    98,
                    "^Summon normal Wind Demon",
                    "%air%"
                ],
                [
                    710,
                    false,
                    98,
                    "^Summon normal Frost Demon",
                    "%ice%"
                ],
                [
                    711,
                    false,
                    19,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% - 1",
                    "%shield% + 1",
                    "^Affect self and all allies within %range% 2",
                    "%ice%"
                ],
                [
                    712,
                    false,
                    14,
                    "%attack% + 0",
                    "^%range% + 0",
                    "%ice%%use%",
                    "!^+2 %attack%",
                    "!^%immobilize%",
                    "%retaliate% + 2",
                    "%air%"
                ],
                [
                    713,
                    false,
                    14,
                    "%shield% + 4",
                    "%heal% 2",
                    "^%range% 3",
                    "%ice%%use%",
                    "!^+3 %heal%",
                    "%air%%use%",
                    "!^%attack% + 0"
                ],
                [
                    714,
                    true,
                    47,
                    "%disarm%",
                    "^Target all adjacent enemies",
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% + 0",
                    "%air%"
                ],
                [
                    715,
                    true,
                    35,
                    "%move% - 1",
                    "%attack% - 1 %aoe-triangle-3-side-with-corner-black%",
                    "%ice%"
                ]
            ]
        },
        {
            name: "Savvas Lavaflow",
            cards: [
                [
                    716,
                    false,
                    97,
                    "^Summon normal Flame Demon",
                    "%fire%"
                ],
                [
                    716,
                    false,
                    97,
                    "^Summon normal Earth Demon",
                    "%earth%"
                ],
                [
                    716,
                    false,
                    22,
                    "%move% + 1",
                    "%attack% - 1",
                    "^Target all adjacent enemies",
                    "%fire%%use%",
                    "!^%retaliate% + 3"
                ],
                [
                    716,
                    true,
                    68,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% 3",
                    "^All allies and enemies adjacent to the target suffer 2 damage.",
                    "%earth%"
                ],
                [
                    716,
                    false,
                    41,
                    "%move% + 0",
                    "%attack% - 1 %aoe-line-4-with-black%",
                    "%earth%%use%",
                    "!^+2 %attack%, %immobilize%"
                ],
                [
                    716,
                    false,
                    51,
                    "^All enemies suffer 2 damage.",
                    "%fire%%use%",
                    "!^%wound% all enemies",
                    "%earth%%use%",
                    "!^%disarm% all enemies"
                ],
                [
                    716,
                    false,
                    31,
                    "%heal% 4",
                    "^%range% 3",
                    "%earth%%use%",
                    "!^%target% 3"
                ],
                [
                    716,
                    true,
                    68,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%range% 3",
                    "^%target% 2",
                    "%fire%"
                ]
            ]
        },
        {
            name: "Scout",
            cards: [
                [
                    668,
                    false,
                    29,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%range% 3"
                ],
                [
                    669,
                    false,
                    40,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    670,
                    false,
                    53,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    671,
                    false,
                    54,
                    "%move% - 2",
                    "%attack% + 0",
                    "^%range% 3",
                    "^%poison%"
                ],
                [
                    672,
                    false,
                    69,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    673,
                    true,
                    92,
                    "%attack% + 2",
                    "^%poison%"
                ],
                [
                    675,
                    true,
                    35,
                    "%move% + 1",
                    "^%jump%",
                    "%loot% 1"
                ],
                [
                    674,
                    false,
                    79,
                    "%attack% - 1",
                    "^%range% 4",
                    "^%target% 2"
                ]
            ]
        },
        {
            name: "Shaman",
            cards: [
                [
                    588,
                    false,
                    8,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% + 0",
                    "^%disarm%"
                ],
                [
                    589,
                    false,
                    8,
                    "%move% - 1",
                    "%attack% + 0",
                    "^%range% + 0",
                    "^%immobilize%"
                ],
                [
                    590,
                    true,
                    23,
                    "%move% + 0",
                    "%heal% 3",
                    "^%range% 3"
                ],
                [
                    591,
                    true,
                    23,
                    "%move% + 0",
                    "%heal% 3",
                    "^%range% 3"
                ],
                [
                    592,
                    false,
                    62,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0"
                ],
                [
                    593,
                    false,
                    74,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% + 0"
                ],
                [
                    594,
                    false,
                    89,
                    "%move% - 1",
                    "%heal% 1",
                    "^Affect all adjacent allies",
                    "%bless%",
                    "^Self"
                ],
                [
                    595,
                    false,
                    9,
                    "%move% + 1",
                    "%attack% - 1",
                    "^%range% + 0",
                    "^%curse%",
                    "^%target% 2"
                ]
            ]
        },
        {
            name: "Spitting Drake",
            cards: [
                [
                    556,
                    false,
                    32,
                    "%move% + 1",
                    "%attack% - 1",
                    "^%range% + 0"
                ],
                [
                    557,
                    false,
                    52,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0"
                ],
                [
                    558,
                    true,
                    57,
                    "%move% + 0",
                    "%attack% - 1 %aoe-triangle-2-side%",
                    "^%range% - 1"
                ],
                [
                    559,
                    false,
                    27,
                    "%attack% + 0",
                    "^%range% + 0",
                    "^%target% 2",
                    "^%poison%"
                ],
                [
                    560,
                    false,
                    87,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% + 0"
                ],
                [
                    561,
                    false,
                    89,
                    "%attack% - 2",
                    "^%range% + 0",
                    "^%stun%"
                ],
                [
                    562,
                    false,
                    6,
                    "%shield% + 2",
                    "%heal% 2",
                    "^Self",
                    "%strengthen%",
                    "^Self"
                ],
                [
                    563,
                    true,
                    89,
                    "%move% - 1",
                    "%attack% - 2 %aoe-circle%",
                    "^%range% - 2",
                    "^%poison%"
                ]
            ]
        },
        {
            name: "Stone Golem",
            cards: [
                [
                    740,
                    false,
                    11,
                    "%retaliate% 3",
                    "^%range% 3"
                ],
                [
                    741,
                    false,
                    28,
                    "%move% + 1",
                    "%attack% + 0",
                    "Stone Golem suffers 1 damage."
                ],
                [
                    742,
                    true,
                    51,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    743,
                    false,
                    65,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    744,
                    false,
                    72,
                    "%attack% + 1",
                    "^%range% 3",
                    "Stone Golem suffers 2 damage"
                ],
                [
                    745,
                    true,
                    90,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    747,
                    false,
                    28,
                    "%move% + 1",
                    "%attack% - 2",
                    "^%range% 3",
                    "^%pull% 2",
                    "^%immobilize%"
                ],
                [
                    746,
                    false,
                    83,
                    "%move% + 0",
                    "%attack% - 1",
                    "^Target all adjacent enemies"
                ]
            ]
        },
        {
            name: "Sun Demon",
            cards: [
                [
                    652,
                    true,
                    17,
                    "%heal% 3",
                    "^%range% 3",
                    "%light%%use%",
                    "!^Target all allies within range"
                ],
                [
                    653,
                    false,
                    36,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Target all adjacent enemies",
                    "%light%"
                ],
                [
                    654,
                    false,
                    36,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Target all adjacent enemies",
                    "%light%"
                ],
                [
                    655,
                    false,
                    68,
                    "%move% + 0",
                    "%attack% + 1",
                    "%light%"
                ],
                [
                    656,
                    true,
                    73,
                    "%move% + 0",
                    "%attack% + 1",
                    "%light%%use%",
                    "!^%heal% 3",
                    "!^Self"
                ],
                [
                    657,
                    false,
                    95,
                    "%move% - 1",
                    "%attack% + 0",
                    "^%range% 4",
                    "%light%%use%",
                    "!^Target all enemies within range"
                ],
                [
                    658,
                    false,
                    88,
                    "%move% - 1",
                    "%attack% - 1",
                    "^Target all adjacent enemies",
                    "%dark%%use%",
                    "!^%muddle%",
                    "!^Self"
                ],
                [
                    659,
                    false,
                    50,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% 3",
                    "%any%%use%",
                    "!%light%"
                ]
            ]
        },
        {
            name: "Wind Demon",
            cards: [
                [
                    644,
                    false,
                    9,
                    "%attack% - 1",
                    "^%range% + 0",
                    "%heal% 1",
                    "^Self",
                    "%air%%use%",
                    "!^%invisible%",
                    "!^Self"
                ],
                [
                    645,
                    true,
                    21,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0",
                    "^%pull% 1",
                    "%air%"
                ],
                [
                    646,
                    true,
                    21,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 0",
                    "^%pull% 1",
                    "%air%"
                ],
                [
                    647,
                    false,
                    29,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% + 0",
                    "^%target% 2",
                    "%air%%use%",
                    "!^%push% 2"
                ],
                [
                    648,
                    false,
                    37,
                    "%move% + 0",
                    "%attack% + 0 %aoe-4-with-black%",
                    "%air%%use%",
                    "!^+1 %attack% %aoe-circle-with-side-black%"
                ],
                [
                    649,
                    false,
                    43,
                    "%move% - 1",
                    "%attack% + 1",
                    "^%range% + 0",
                    "%air%%use%",
                    "!^%target% 2"
                ],
                [
                    650,
                    false,
                    43,
                    "%push% 1",
                    "^Target all adjacent enemies",
                    "%attack% + 0",
                    "^%range% + 0",
                    "%earth%%use%",
                    "!^-2 %range%"
                ],
                [
                    651,
                    false,
                    2,
                    "%shield% + 1",
                    "%move% - 1",
                    "%attack% - 1",
                    "^%range% + 0",
                    "%any%%use%",
                    "!%air%"
                ]
            ]
        },
        {
            name: "Ashblade",
            edition: "FC",
            cards: [
                [
                    1007,
                    true,
                    42,
                    "%move% + 1",
                    "%attack% + 0",
                    "%dark%"
                ],
                [
                    1008,
                    true,
                    47,
                    "%move% + 1",
                    "%attack% + 0",
                    "%fire%"
                ],
                [
                    1009,
                    false,
                    24,
                    "%attack% + 3",
                    "^%pierce% 2",
                    "%fire%"
                ],
                [
                    1010,
                    false,
                    28,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%range% 3",
                    "^%immobilize%"
                ],
                [
                    1011,
                    false,
                    17,
                    "%move% + 0",
                    "%attack% + 0",
                    "%fire%%use%",
                    "!^%disarm%"
                ],
                [
                    1012,
                    false,
                    9,
                    "%move% + 0",
                    "%attack% + 0",
                    "%dark%%use%",
                    "!^%invisible%",
                    "!^Self"
                ],
                [
                    1013,
                    false,
                    36,
                    "%move% - 1",
                    "%attack% + 2",
                    "%fire%%use%",
                    "!^%wound%",
                    "%dark%%use%",
                    "!^%curse%"
                ],
                [
                    1014,
                    false,
                    2,
                    "*Focus on the enemy with",
                    "*the highest initiative",
                    "*%teleport% to the closest unoccupied",
                    "*hex adjacent to the focus",
                    "%attack% - 2",
                    "%dark%"
                ]
            ]
        },
        {
            name: "Bear-Drake Abomination",
            edition: "FC",
            cards: [
                [
                    587,
                    false,
                    14,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%immobilize%"
                ],
                [
                    601,
                    true,
                    80,
                    "%attack% - 1",
                    "%move% - 2",
                    "%attack% - 1",
                    "^%wound%"
                ],
                [
                    602,
                    false,
                    61,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%target% 2"
                ],
                [
                    603,
                    false,
                    3,
                    "%shield% + 1",
                    "%retaliate% + 2",
                    "%heal% 2",
                    "^Self"
                ],
                [
                    548,
                    false,
                    12,
                    "%move% + 1",
                    "%attack% - 1"
                ],
                [
                    549,
                    true,
                    13,
                    "%attack% - 1",
                    "%move% - 1",
                    "%attack% - 1"
                ],
                [
                    550,
                    false,
                    25,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    553,
                    false,
                    59,
                    "%move% - 2",
                    "%attack% + 1",
                    "^%target% 2"
                ]
            ]
        },
        {
            name: "Wolf-Viper Abomination",
            edition: "FC",
            cards: [
                [
                    540,
                    false,
                    6,
                    "%move% - 1",
                    "%attack% + 0",
                    "^%immobilize%"
                ],
                [
                    543,
                    true,
                    19,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Add +2 %attack% if the target is adjacent",
                    "^to any of the Abomination's allies"
                ],
                [
                    544,
                    false,
                    26,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    547,
                    false,
                    72,
                    "%attack% - 1",
                    "^%pierce% 2",
                    "%move% - 2",
                    "%attack% - 1",
                    "^%pierce% 2"
                ],
                [
                    685,
                    true,
                    32,
                    "%move% + 0",
                    "%attack% + 0",
                    "^Add +2 Attack if the target is adjacent to any of the Abomination's allies."
                ],
                [
                    687,
                    false,
                    43,
                    "%move% + 1",
                    "^%jump%",
                    "%attack% - 1",
                    "^Target all adjacent enemies."
                ],
                [
                    688,
                    false,
                    58,
                    "%move% - 1",
                    "%attack% + 1"
                ],
                [
                    689,
                    false,
                    58,
                    "%move% + 1",
                    "^%jump%",
                    "%attack% - 1",
                    "^All attacks targeting Abomination this round gain Disadvantage."
                ],
                [
                    691,
                    false,
                    23,
                    "%move% - 1",
                    "%attack% - 1",
                    "^%immobilize%",
                    "%attack% - 1"
                ]
            ]
        },
        {
            name: "Savage",
            edition: "FC",
            cards: [
                [
                    999,
                    false,
                    13,
                    "%strengthen%",
                    "^Self",
                    "%attack% + 0",
                    "^%wound%",
                    "Savage suffers 2 damage"
                ],
                [
                    1000,
                    true,
                    17,
                    "%retaliate% 3",
                    "^%range% 3",
                    "%heal% 1",
                    "%regenerate%",
                    "^Self"
                ],
                [
                    1001,
                    false,
                    28,
                    "%move% + 0",
                    "%attack% - 1",
                    "%attack% - 1"
                ],
                [
                    1002,
                    false,
                    38,
                    "%move% - 1",
                    "%attack% + 0",
                    "^%pierce% 2"
                ],
                [
                    1003,
                    false,
                    46,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% 3"
                ],
                [
                    1004,
                    false,
                    46,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%range% 3"
                ],
                [
                    1005,
                    false,
                    60,
                    "%move% + 2",
                    "%attack% + 0",
                    "ELITE:",
                    "%attack% + 0"
                ],
                [
                    1006,
                    true,
                    72,
                    "%move% - 1",
                    "NORMAL:",
                    "%attack% + 0",
                    "ELITE:",
                    "%attack% + 1 %aoe-arc-3%"
                ]
            ]
        },
        {
            name: "Tracker",
            edition: "FC",
            cards: [
                [
                    991,
                    false,
                    12,
                    "%move% + 0",
                    "%attack% - 1",
                    "^%muddle%"
                ],
                [
                    992,
                    false,
                    18,
                    "%move% - 1",
                    "%attack% - 1",
                    "*Create one %disarm% trap in any adjacent",
                    "*empty hex closest to an enemy"
                ],
                [
                    993,
                    false,
                    27,
                    "%move% + 0",
                    "%attack% + 0"
                ],
                [
                    994,
                    true,
                    33,
                    "%move% + 0",
                    "%attack% + 0",
                    "^%range% + 1",
                    "^%pierce% 1"
                ],
                [
                    995,
                    false,
                    37,
                    "%move% - 1",
                    "%attack% + 0",
                    "^%range% + 1",
                    "^%immobilize%"
                ],
                [
                    996,
                    false,
                    48,
                    "ELITE:",
                    "*Focus on the enemy with the",
                    "*lowest current hit point value ",
                    "%move% + 1",
                    "%attack% + 0"
                ],
                [
                    997,
                    false,
                    55,
                    "ELITE:",
                    "*Focus on the enemy with the",
                    "*highest current hit point value ",
                    "%move% + 0",
                    "%attack% - 1",
                    "%wound%"
                ],
                [
                    998,
                    true,
                    69,
                    "%attack% + 1",
                    "%heal% 1",
                    "%regenerate%",
                    "^Self"
                ]
            ]
        },
        {
            name: "Manifestation of Corruption",
            cards: [
                [
                    0,
                    false,
                    0,
                    "(Use the Manifestation of Corruption ability deck.)"
                ]
            ]
        }
    ],
    monsters: {
        "Ancient Artillery": {
            deck: "Ancient Artillery",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 4, move: 0, attack: 2, range: 4
                    },
                    elite: {
                        health: 7, move: 0, attack: 3, range: 5
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 6, move: 0, attack: 2, range: 4
                    },
                    elite: {
                        health: 9, move: 0, attack: 3, range: 5
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 7, move: 0, attack: 2, range: 5
                    },
                    elite: {
                        health: 11, move: 0, attack: 3, range: 6
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 8, move: 0, attack: 3, range: 5
                    },
                    elite: {
                        health: 13, move: 0, attack: 4, range: 6
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 9, move: 0, attack: 4, range: 5
                    },
                    elite: {
                        health: 13,
                        move: 0,
                        attack: 4,
                        range: 6,
                        attributes: [
                            "%target% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 11, move: 0, attack: 4, range: 6
                    },
                    elite: {
                        health: 15,
                        move: 0,
                        attack: 4,
                        range: 7,
                        attributes: [
                            "%target% 2"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 14, move: 0, attack: 4, range: 6
                    },
                    elite: {
                        health: 16,
                        move: 0,
                        attack: 5,
                        range: 7,
                        attributes: [
                            "%target% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 16, move: 0, attack: 4, range: 7
                    },
                    elite: {
                        health: 20,
                        move: 0,
                        attack: 5,
                        range: 7,
                        attributes: [
                            "%target% 2"
                        ]
                    }
                }
            ]
        },
        "Bandit Archer": {
            deck: "Archer",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 4, move: 2, attack: 2, range: 3
                    },
                    elite: {
                        health: 6, move: 2, attack: 3, range: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 5, move: 2, attack: 2, range: 4
                    },
                    elite: {
                        health: 7, move: 2, attack: 3, range: 5
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 6, move: 3, attack: 2, range: 4
                    },
                    elite: {
                        health: 9, move: 3, attack: 3, range: 5
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 6, move: 3, attack: 3, range: 4
                    },
                    elite: {
                        health: 10, move: 3, attack: 4, range: 5
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 8, move: 3, attack: 3, range: 4
                    },
                    elite: {
                        health: 10,
                        move: 3,
                        attack: 4,
                        range: 6,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 10, move: 3, attack: 3, range: 5
                    },
                    elite: {
                        health: 12,
                        move: 4,
                        attack: 4,
                        range: 6,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 10, move: 3, attack: 4, range: 5
                    },
                    elite: {
                        health: 13,
                        move: 4,
                        attack: 5,
                        range: 6,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 13, move: 3, attack: 4, range: 5
                    },
                    elite: {
                        health: 17,
                        move: 4,
                        attack: 5,
                        range: 6,
                        attributes: [
                            "%poison%"
                        ]
                    }
                }
            ]
        },
        "Bandit Guard": {
            deck: "Guard",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5, move: 2, attack: 2
                    },
                    elite: {
                        health: 9, move: 2, attack: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 6, move: 3, attack: 2
                    },
                    elite: {
                        health: 9,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 6, move: 3, attack: 3
                    },
                    elite: {
                        health: 10,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 9, move: 3, attack: 3
                    },
                    elite: {
                        health: 10,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 10, move: 4, attack: 3
                    },
                    elite: {
                        health: 11,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%muddle%",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 11, move: 4, attack: 4
                    },
                    elite: {
                        health: 12,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%muddle%",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 14, move: 4, attack: 4
                    },
                    elite: {
                        health: 14,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%muddle%",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 16, move: 5, attack: 4
                    },
                    elite: {
                        health: 14,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%muddle%",
                            "%shield% 3"
                        ]
                    }
                }
            ]
        },
        "Black Imp": {
            deck: "Imp",
            count: 10,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 3, move: 1, attack: 1, range: 3
                    },
                    elite: {
                        health: 4,
                        move: 1,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 4,
                        move: 1,
                        attack: 1,
                        range: 3,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 1,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 5,
                        move: 1,
                        attack: 1,
                        range: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 1,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 5,
                        move: 1,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 1,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "Attackers gain Disadvantage",
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 7,
                        move: 1,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 1,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "Attackers gain Disadvantage",
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 9,
                        move: 1,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 1,
                        attack: 3,
                        range: 5,
                        attributes: [
                            "Attackers gain Disadvantage",
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 10,
                        move: 1,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 1,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "Attackers gain Disadvantage",
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 12,
                        move: 1,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 17,
                        move: 1,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "Attackers gain Disadvantage",
                            "%poison%"
                        ]
                    }
                }
            ]
        },
        "Cave Bear": {
            deck: "Cave Bear",
            count: 4,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 7, move: 3, attack: 3
                    },
                    elite: {
                        health: 11, move: 3, attack: 4
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 9, move: 3, attack: 3
                    },
                    elite: {
                        health: 14, move: 3, attack: 4
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 11, move: 4, attack: 3
                    },
                    elite: {
                        health: 17, move: 4, attack: 4
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 13, move: 4, attack: 4
                    },
                    elite: {
                        health: 20, move: 4, attack: 5
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 16, move: 4, attack: 4
                    },
                    elite: {
                        health: 21,
                        move: 5,
                        attack: 5,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 17,
                        move: 5,
                        attack: 4,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 24,
                        move: 5,
                        attack: 6,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 19,
                        move: 5,
                        attack: 5,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 28,
                        move: 5,
                        attack: 7,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 22,
                        move: 5,
                        attack: 5,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 33,
                        move: 5,
                        attack: 7,
                        attributes: [
                            "%wound%"
                        ]
                    }
                }
            ]
        },
        "City Archer": {
            deck: "Archer",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 4, move: 1, attack: 2, range: 3
                    },
                    elite: {
                        health: 6, move: 1, attack: 3, range: 4
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 5, move: 1, attack: 2, range: 4
                    },
                    elite: {
                        health: 6,
                        move: 1,
                        attack: 3,
                        range: 5,
                        attributes: [
                            "%pierce% 1",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 6, move: 1, attack: 3, range: 4
                    },
                    elite: {
                        health: 7,
                        move: 1,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%pierce% 2",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 6,
                        move: 2,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 2,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%pierce% 2",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 8,
                        move: 2,
                        attack: 3,
                        range: 5,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 10,
                        move: 2,
                        attack: 4,
                        range: 6,
                        attributes: [
                            "%pierce% 2",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 9,
                        move: 2,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 2,
                        attack: 5,
                        range: 6,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 9,
                        move: 3,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 3,
                        attack: 6,
                        range: 6,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 10,
                        move: 3,
                        attack: 4,
                        range: 6,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 13,
                        move: 3,
                        attack: 6,
                        range: 7,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 3"
                        ]
                    }
                }
            ]
        },
        "City Guard": {
            deck: "Guard",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5, move: 2, attack: 2
                    },
                    elite: {
                        health: 6,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 5,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 7,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 8,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%retaliate% 1",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 9,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 10,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 10,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2",
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 11,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 13,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%retaliate% 3",
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 13,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 3,
                        attack: 6,
                        attributes: [
                            "%retaliate% 3",
                            "%shield% 3"
                        ]
                    }
                }
            ]
        },
        Cultist: {
            deck: "Cultist",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 4, move: 2, attack: 1
                    },
                    elite: {
                        health: 7, move: 2, attack: 2
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 5, move: 2, attack: 1
                    },
                    elite: {
                        health: 9, move: 2, attack: 2
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 7, move: 2, attack: 1
                    },
                    elite: {
                        health: 12, move: 2, attack: 2
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 9, move: 3, attack: 1
                    },
                    elite: {
                        health: 13,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%curse%"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 10, move: 3, attack: 2
                    },
                    elite: {
                        health: 15,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%curse%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 11,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%curse%"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%curse%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 14,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%curse%"
                        ]
                    },
                    elite: {
                        health: 22,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%curse%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 15,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%curse%"
                        ]
                    },
                    elite: {
                        health: 25,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%curse%"
                        ]
                    }
                }
            ]
        },
        "Deep Terror": {
            deck: "Deep Terror",
            count: 10,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 3, move: 0, attack: 2
                    },
                    elite: {
                        health: 5, move: 0, attack: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 4,
                        move: 0,
                        attack: 2,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 0,
                        attack: 3,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 4,
                        move: 0,
                        attack: 3,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 0,
                        attack: 4,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 5,
                        move: 0,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 0,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 6,
                        move: 0,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 0,
                        attack: 5,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 7,
                        move: 0,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 0,
                        attack: 5,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 8,
                        move: 0,
                        attack: 5,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    },
                    elite: {
                        health: 13,
                        move: 0,
                        attack: 6,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 9,
                        move: 0,
                        attack: 5,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 0,
                        attack: 6,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                }
            ]
        },
        "Earth Demon": {
            deck: "Earth Demon",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 7, move: 1, attack: 3
                    },
                    elite: {
                        health: 10, move: 2, attack: 4
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 9, move: 1, attack: 3
                    },
                    elite: {
                        health: 13, move: 2, attack: 4
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 12, move: 1, attack: 3
                    },
                    elite: {
                        health: 18, move: 2, attack: 4
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 13, move: 2, attack: 3
                    },
                    elite: {
                        health: 20,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%immobilize%"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 15, move: 2, attack: 4
                    },
                    elite: {
                        health: 21,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%immobilize%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 17,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%immobilize%"
                        ]
                    },
                    elite: {
                        health: 25,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%immobilize%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 20,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%immobilize%"
                        ]
                    },
                    elite: {
                        health: 27,
                        move: 3,
                        attack: 6,
                        attributes: [
                            "%immobilize%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 22,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%immobilize%"
                        ]
                    },
                    elite: {
                        health: 32,
                        move: 3,
                        attack: 6,
                        attributes: [
                            "%immobilize%"
                        ]
                    }
                }
            ]
        },
        "Flame Demon": {
            deck: "Flame Demon",
            count: 6,
            flying: true,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 2,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 3,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 2,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 3,
                        move: 3,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%retaliate% 2",
                            "*%range% 2",
                            "%shield% 4"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 3,
                        move: 3,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 4,
                        move: 3,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%retaliate% 3",
                            "*%range% 2",
                            "%shield% 4"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 3,
                        move: 3,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%retaliate% 2",
                            "*%range% 2",
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 5,
                        move: 3,
                        attack: 3,
                        range: 5,
                        attributes: [
                            "%retaliate% 3",
                            "*%range% 3",
                            "%shield% 4"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 3,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%retaliate% 3",
                            "*%range% 2",
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 5,
                        move: 4,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%retaliate% 4",
                            "*%range% 3",
                            "%shield% 4"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 4,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%retaliate% 3",
                            "*%range% 2",
                            "%shield% 4"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 4,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%retaliate% 4",
                            "*%range% 3",
                            "%shield% 5"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 4,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%retaliate% 4",
                            "*%range% 2",
                            "%shield% 4"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 4,
                        attack: 5,
                        range: 5,
                        attributes: [
                            "%retaliate% 5",
                            "*%range% 3",
                            "%shield% 5"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 5,
                        move: 4,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%retaliate% 4",
                            "*%range% 3",
                            "%shield% 4"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 4,
                        attack: 5,
                        range: 6,
                        attributes: [
                            "%retaliate% 5",
                            "*%range% 4",
                            "%shield% 5"
                        ]
                    }
                }
            ]
        },
        "Frost Demon": {
            deck: "Frost Demon",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5, move: 2, attack: 3
                    },
                    elite: {
                        health: 10, move: 3, attack: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 6,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 10,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 7,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 8,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 10,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 11,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    },
                    elite: {
                        health: 20,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 12,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    },
                    elite: {
                        health: 22,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 14,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    },
                    elite: {
                        health: 25,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                }
            ]
        },
        "Forest Imp": {
            deck: "Imp",
            count: 10,
            flying: true,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 1,
                        move: 3,
                        attack: 1,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 4,
                        move: 3,
                        attack: 1,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 2,
                        move: 3,
                        attack: 1,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 5,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 2,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%curse%",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 3,
                        move: 4,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 4,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%curse%",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 3,
                        move: 4,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 4,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%curse%",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 4,
                        move: 4,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%curse%",
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%curse%",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 4,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%curse%",
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%curse%",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 6,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%curse%",
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%curse%",
                            "%shield% 2"
                        ]
                    }
                }
            ]
        },
        "Giant Viper": {
            deck: "Giant Viper",
            count: 10,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 2,
                        move: 2,
                        attack: 1,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 3,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 3,
                        move: 2,
                        attack: 1,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 5,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 4,
                        move: 3,
                        attack: 1,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 4,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 6,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 7,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 13,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 8,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 10,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 17,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%poison%"
                        ]
                    }
                }
            ]
        },
        "Harrower Infester": {
            deck: "Harrower Infester",
            count: 4,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 6, move: 2, attack: 2
                    },
                    elite: {
                        health: 12, move: 2, attack: 2
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 7,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 8,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 10,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 17,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 12,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 19,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 12,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 15,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    },
                    elite: {
                        health: 22,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 17,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    },
                    elite: {
                        health: 26,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                }
            ]
        },
        Hound: {
            deck: "Hound",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 4, move: 3, attack: 2
                    },
                    elite: {
                        health: 6, move: 5, attack: 2
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 4,
                        move: 4,
                        attack: 2,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 5,
                        attack: 2,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 6,
                        move: 4,
                        attack: 2,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 5,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 8,
                        move: 4,
                        attack: 2,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 5,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 8,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 5,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 9,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 5,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 11,
                        move: 5,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 6,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 15,
                        move: 5,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 6,
                        attack: 5,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                }
            ]
        },
        "Inox Archer": {
            deck: "Archer",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5, move: 2, attack: 2, range: 2
                    },
                    elite: {
                        health: 7, move: 2, attack: 3, range: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 6, move: 2, attack: 2, range: 3
                    },
                    elite: {
                        health: 8, move: 2, attack: 3, range: 4
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 8, move: 2, attack: 2, range: 3
                    },
                    elite: {
                        health: 11, move: 2, attack: 3, range: 4
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 9, move: 2, attack: 3, range: 3
                    },
                    elite: {
                        health: 13, move: 2, attack: 4, range: 4
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 10, move: 3, attack: 3, range: 3
                    },
                    elite: {
                        health: 14,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 12, move: 3, attack: 3, range: 4
                    },
                    elite: {
                        health: 17,
                        move: 3,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 12,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 19,
                        move: 3,
                        attack: 5,
                        range: 5,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 15,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 23,
                        move: 3,
                        attack: 5,
                        range: 5,
                        attributes: [
                            "%wound%"
                        ]
                    }
                }
            ]
        },
        "Inox Guard": {
            deck: "Guard",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5, move: 2, attack: 2
                    },
                    elite: {
                        health: 9,
                        move: 1,
                        attack: 3,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 8, move: 2, attack: 2
                    },
                    elite: {
                        health: 10,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 9, move: 2, attack: 3
                    },
                    elite: {
                        health: 12,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 11, move: 3, attack: 3
                    },
                    elite: {
                        health: 15,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 12,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 17,
                        move: 2,
                        attack: 5,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 13,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 19,
                        move: 2,
                        attack: 5,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 16,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 19,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 23,
                        move: 3,
                        attack: 6,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                }
            ]
        },
        "Inox Shaman": {
            deck: "Shaman",
            count: 4,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 4, move: 1, attack: 2, range: 3
                    },
                    elite: {
                        health: 6, move: 2, attack: 3, range: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 6, move: 1, attack: 2, range: 3
                    },
                    elite: {
                        health: 9, move: 2, attack: 3, range: 3
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 7, move: 2, attack: 2, range: 3
                    },
                    elite: {
                        health: 11, move: 3, attack: 3, range: 3
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 9, move: 2, attack: 2, range: 4
                    },
                    elite: {
                        health: 14, move: 3, attack: 3, range: 4
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 10, move: 2, attack: 3, range: 4
                    },
                    elite: {
                        health: 16, move: 3, attack: 4, range: 4
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 13, move: 2, attack: 3, range: 4
                    },
                    elite: {
                        health: 20, move: 3, attack: 4, range: 4
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 15, move: 3, attack: 3, range: 4
                    },
                    elite: {
                        health: 24, move: 4, attack: 4, range: 4
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 16, move: 3, attack: 4, range: 4
                    },
                    elite: {
                        health: 27, move: 4, attack: 5, range: 4
                    }
                }
            ]
        },
        "Living Bones": {
            deck: "Living Bones",
            count: 10,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5,
                        move: 2,
                        attack: 1,
                        attributes: [
                            "%target% 2"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 4,
                        attack: 2,
                        attributes: [
                            "%target% 2"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 5,
                        move: 3,
                        attack: 1,
                        attributes: [
                            "%target% 2",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 4,
                        attack: 2,
                        attributes: [
                            "%target% 3",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 5,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%target% 2",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%target% 3",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 7,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%target% 2",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 10,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%target% 3",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 7,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%target% 2",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%target% 3",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 9,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%target% 2",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%target% 3",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 10,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%target% 2",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 6,
                        attack: 4,
                        attributes: [
                            "%target% 3",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 13,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%target% 2",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 6,
                        attack: 4,
                        attributes: [
                            "%target% 3",
                            "%shield% 2"
                        ]
                    }
                }
            ]
        },
        "Living Corpse": {
            deck: "Living Corpse",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5, move: 1, attack: 3
                    },
                    elite: {
                        health: 10, move: 1, attack: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 7, move: 1, attack: 3
                    },
                    elite: {
                        health: 10, move: 1, attack: 4
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 9, move: 1, attack: 3
                    },
                    elite: {
                        health: 13, move: 1, attack: 4
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 10, move: 1, attack: 4
                    },
                    elite: {
                        health: 13, move: 2, attack: 5
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 11, move: 2, attack: 4
                    },
                    elite: {
                        health: 15,
                        move: 2,
                        attack: 5,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 13, move: 2, attack: 4
                    },
                    elite: {
                        health: 17,
                        move: 2,
                        attack: 6,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 14,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 2,
                        attack: 6,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 15,
                        move: 2,
                        attack: 5,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 25,
                        move: 2,
                        attack: 6,
                        attributes: [
                            "%poison%"
                        ]
                    }
                }
            ]
        },
        "Living Spirit": {
            deck: "Living Spirit",
            count: 6,
            flying: true,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 2,
                        move: 2,
                        attack: 2,
                        range: 2,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 3,
                        move: 3,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 2,
                        move: 2,
                        attack: 2,
                        range: 2,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 3,
                        move: 3,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 2,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 3,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 3,
                        move: 3,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 4,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 3,
                        move: 3,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 4,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%shield% 4"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 4,
                        move: 3,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%shield% 4"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 4,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 4,
                        attack: 5,
                        range: 5,
                        attributes: [
                            "%shield% 4"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 6,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 4,
                        attack: 5,
                        range: 5,
                        attributes: [
                            "%shield% 4"
                        ]
                    }
                }
            ]
        },
        Lurker: {
            deck: "Lurker",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%target% 2"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%target% 2",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 7,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%target% 2",
                            "%pierce% 1"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%target% 2",
                            "%pierce% 1",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 9,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%target% 2",
                            "%pierce% 1"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%target% 2",
                            "%pierce% 2",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 10,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%target% 2",
                            "%pierce% 2"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%target% 2",
                            "%pierce% 2",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 10,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%target% 2",
                            "%pierce% 2",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%target% 2",
                            "%pierce% 3",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 11,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%target% 2",
                            "%pierce% 2",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "%target% 2",
                            "%pierce% 3",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 12,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%target% 2",
                            "%pierce% 3",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 16,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%target% 2",
                            "%pierce% 4",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 14,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%target% 2",
                            "%pierce% 3",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%target% 2",
                            "%pierce% 4",
                            "%shield% 2"
                        ]
                    }
                }
            ]
        },
        Ooze: {
            deck: "Ooze",
            count: 10,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 4, move: 1, attack: 2, range: 2
                    },
                    elite: {
                        health: 8, move: 1, attack: 2, range: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 5,
                        move: 1,
                        attack: 2,
                        range: 2,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 1,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 7,
                        move: 1,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 1,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 8,
                        move: 1,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 2,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%poison%",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 9,
                        move: 2,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 13,
                        move: 2,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%poison%",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 10,
                        move: 2,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%poison%",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%poison%",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 12,
                        move: 2,
                        attack: 4,
                        range: 3,
                        attributes: [
                            "%poison%",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 16,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%poison%",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 14,
                        move: 2,
                        attack: 4,
                        range: 3,
                        attributes: [
                            "%poison%",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 3,
                        attack: 5,
                        range: 4,
                        attributes: [
                            "%poison%",
                            "%shield% 2"
                        ]
                    }
                }
            ]
        },
        "Night Demon": {
            deck: "Night Demon",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 3,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    },
                    elite: {
                        health: 5,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 5,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 6,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 7,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    },
                    elite: {
                        health: 13,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 8,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 5,
                        attack: 5,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 11,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    },
                    elite: {
                        health: 17,
                        move: 5,
                        attack: 6,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 14,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 5,
                        attack: 6,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 15,
                        move: 4,
                        attack: 6,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 5,
                        attack: 8,
                        attributes: [
                            "Attackers gain Disadvantage"
                        ]
                    }
                }
            ]
        },
        "Rending Drake": {
            deck: "Rending Drake",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5, move: 3, attack: 3
                    },
                    elite: {
                        health: 7, move: 4, attack: 4
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 6,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 7,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 5,
                        attack: 5,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 7,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 10,
                        move: 5,
                        attack: 6,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 9,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 6,
                        attack: 6,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 10,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 6,
                        attack: 6,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 11,
                        move: 5,
                        attack: 5,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 6,
                        attack: 7,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 14,
                        move: 5,
                        attack: 5,
                        attributes: [
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 6,
                        attack: 7,
                        attributes: [
                            "%wound%"
                        ]
                    }
                }
            ]
        },
        "Savvas Icestorm": {
            deck: "Savvas Icestorm",
            count: 4,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 7,
                        move: 2,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%pierce% 3"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 2,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%pierce% 3"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 10,
                        move: 2,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%pierce% 3"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 2,
                        attack: 3,
                        range: 5,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 12,
                        move: 3,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%pierce% 3"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 3,
                        attack: 3,
                        range: 5,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 12,
                        move: 3,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 3,
                        attack: 4,
                        range: 6,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 14,
                        move: 3,
                        attack: 3,
                        range: 5,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 19,
                        move: 4,
                        attack: 4,
                        range: 6,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 16,
                        move: 3,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 4,
                        attack: 5,
                        range: 6,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 16,
                        move: 3,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 23,
                        move: 4,
                        attack: 6,
                        range: 6,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 17,
                        move: 4,
                        attack: 4,
                        range: 6,
                        attributes: [
                            "%pierce% 3",
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 24,
                        move: 4,
                        attack: 6,
                        range: 6,
                        attributes: [
                            "%pierce% 4",
                            "%shield% 3"
                        ]
                    }
                }
            ]
        },
        "Savvas Lavaflow": {
            deck: "Savvas Lavaflow",
            count: 4,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 8, move: 3, attack: 2
                    },
                    elite: {
                        health: 13, move: 3, attack: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 9,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 11,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%poison%",
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 14,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%poison%",
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 16,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 24,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%poison%",
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 18,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "%poison%",
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 27,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%poison%",
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 20,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%poison%",
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 30,
                        move: 4,
                        attack: 6,
                        attributes: [
                            "%poison%",
                            "%wound%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 24,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%poison%",
                            "%wound%"
                        ]
                    },
                    elite: {
                        health: 35,
                        move: 4,
                        attack: 6,
                        attributes: [
                            "%poison%",
                            "%wound%"
                        ]
                    }
                }
            ]
        },
        "Spitting Drake": {
            deck: "Spitting Drake",
            count: 6,
            flying: true,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5, move: 3, attack: 3, range: 3
                    },
                    elite: {
                        health: 8, move: 3, attack: 4, range: 4
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 6, move: 3, attack: 3, range: 3
                    },
                    elite: {
                        health: 9,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%muddle%"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 8,
                        move: 3,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%muddle%"
                        ]
                    },
                    elite: {
                        health: 10,
                        move: 3,
                        attack: 5,
                        range: 4,
                        attributes: [
                            "%muddle%"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 8,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%muddle%"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 3,
                        attack: 5,
                        range: 5,
                        attributes: [
                            "%muddle%"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 9,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%muddle%"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 4,
                        attack: 5,
                        range: 5,
                        attributes: [
                            "%muddle%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 12,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%muddle%"
                        ]
                    },
                    elite: {
                        health: 16,
                        move: 4,
                        attack: 6,
                        range: 5,
                        attributes: [
                            "%muddle%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 13,
                        move: 4,
                        attack: 5,
                        range: 4,
                        attributes: [
                            "%muddle%"
                        ]
                    },
                    elite: {
                        health: 19,
                        move: 4,
                        attack: 6,
                        range: 5,
                        attributes: [
                            "%muddle%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 16,
                        move: 4,
                        attack: 5,
                        range: 4,
                        attributes: [
                            "%muddle%"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 4,
                        attack: 7,
                        range: 5,
                        attributes: [
                            "%muddle%"
                        ]
                    }
                }
            ]
        },
        "Stone Golem": {
            deck: "Stone Golem",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 10, move: 1, attack: 3
                    },
                    elite: {
                        health: 10,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 10,
                        move: 1,
                        attack: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 11,
                        move: 1,
                        attack: 4,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 2,
                        attack: 5,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 11,
                        move: 1,
                        attack: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 2,
                        attack: 5,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 12,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 17,
                        move: 2,
                        attack: 6,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 13,
                        move: 2,
                        attack: 5,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 19,
                        move: 3,
                        attack: 6,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 16,
                        move: 2,
                        attack: 5,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 20,
                        move: 3,
                        attack: 7,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 16,
                        move: 2,
                        attack: 5,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 3,
                        attack: 7,
                        attributes: [
                            "%shield% 4"
                        ]
                    }
                }
            ]
        },
        "Sun Demon": {
            deck: "Sun Demon",
            count: 6,
            flying: true,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 7,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 9,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 13,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 10,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 11,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 16,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "Advantage",
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 11,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "Advantage",
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 16,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "Advantage",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 12,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "Advantage",
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "Advantage",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 15,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "Advantage",
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 22,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "Advantage",
                            "%shield% 2"
                        ]
                    }
                }
            ]
        },
        "Vermling Scout": {
            deck: "Scout",
            count: 10,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 2, move: 3, attack: 1
                    },
                    elite: {
                        health: 4, move: 3, attack: 2
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 3, move: 3, attack: 1
                    },
                    elite: {
                        health: 5, move: 3, attack: 2
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 3, move: 3, attack: 2
                    },
                    elite: {
                        health: 5, move: 4, attack: 3
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 5, move: 3, attack: 2
                    },
                    elite: {
                        health: 7, move: 4, attack: 3
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 6, move: 3, attack: 3
                    },
                    elite: {
                        health: 8, move: 4, attack: 4
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 8, move: 3, attack: 3
                    },
                    elite: {
                        health: 11, move: 4, attack: 4
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 9, move: 4, attack: 3
                    },
                    elite: {
                        health: 12, move: 5, attack: 4
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 11, move: 4, attack: 3
                    },
                    elite: {
                        health: 15, move: 5, attack: 4
                    }
                }
            ]
        },
        "Vermling Shaman": {
            deck: "Shaman",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 2,
                        move: 2,
                        attack: 1,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 3,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 2,
                        move: 2,
                        attack: 1,
                        range: 3,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 3,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 3,
                        move: 2,
                        attack: 1,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 4,
                        move: 3,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 3,
                        move: 2,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 5,
                        move: 3,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 3,
                        move: 3,
                        attack: 2,
                        range: 4,
                        attributes: [
                            "%muddle%",
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 5,
                        move: 3,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%muddle%",
                            "%shield% 4"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 4,
                        move: 3,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%muddle%",
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%muddle%",
                            "%shield% 4"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 5,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%muddle%",
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 6,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%muddle%",
                            "%shield% 5"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 7,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%muddle%",
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 3,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%muddle%",
                            "%shield% 5"
                        ]
                    }
                }
            ]
        },
        "Wind Demon": {
            deck: "Wind Demon",
            count: 6,
            flying: true,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 3,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 5,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%shield% 1"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 3,
                        move: 3,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 5,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 4,
                        move: 4,
                        attack: 2,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 7,
                        move: 5,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 5,
                        move: 4,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 5,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 7,
                        move: 4,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 8,
                        move: 5,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%disarm%",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 9,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 5,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%disarm%",
                            "%shield% 2"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 10,
                        move: 4,
                        attack: 3,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 12,
                        move: 5,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%disarm%",
                            "%shield% 3"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 11,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 13,
                        move: 5,
                        attack: 5,
                        range: 4,
                        attributes: [
                            "%disarm%",
                            "%shield% 3"
                        ]
                    }
                }
            ]
        },
        "Bandit Commander": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "8xC",
                    move: 3,
                    attack: 3,
                    special1: [
                        "Move to next door and reveal room"
                    ],
                    special2: [
                        "Summon Living Bones"
                    ],
                    immunities: [
                        "%stun%",
                        "%immobilize%",
                        "%curse%"
                    ]
                },
                {
                    level: 1,
                    health: "10xC",
                    move: 3,
                    attack: 3,
                    special1: [
                        "Move to next door and reveal room"
                    ],
                    special2: [
                        "Summon Living Bones"
                    ],
                    immunities: [
                        "%stun%",
                        "%immobilize%",
                        "%curse%"
                    ]
                },
                {
                    level: 2,
                    health: "12xC",
                    move: 4,
                    attack: 3,
                    special1: [
                        "Move to next door and reveal room"
                    ],
                    special2: [
                        "Summon Living Bones"
                    ],
                    immunities: [
                        "%stun%",
                        "%immobilize%",
                        "%curse%"
                    ]
                },
                {
                    level: 3,
                    health: "13xC",
                    move: 4,
                    attack: 4,
                    special1: [
                        "Move to next door and reveal room"
                    ],
                    special2: [
                        "Summon Living Bones"
                    ],
                    immunities: [
                        "%stun%",
                        "%immobilize%",
                        "%curse%"
                    ]
                },
                {
                    level: 4,
                    health: "15xC",
                    move: 4,
                    attack: 4,
                    special1: [
                        "Move to next door and reveal room"
                    ],
                    special2: [
                        "Summon Living Bones"
                    ],
                    immunities: [
                        "%stun%",
                        "%immobilize%",
                        "%curse%"
                    ]
                },
                {
                    level: 5,
                    health: "16xC",
                    move: 5,
                    attack: 5,
                    special1: [
                        "Move to next door and reveal room"
                    ],
                    special2: [
                        "Summon Living Bones"
                    ],
                    immunities: [
                        "%stun%",
                        "%immobilize%",
                        "%curse%"
                    ]
                },
                {
                    level: 6,
                    health: "19xC",
                    move: 5,
                    attack: 5,
                    special1: [
                        "Move to next door and reveal room"
                    ],
                    special2: [
                        "Summon Living Bones"
                    ],
                    immunities: [
                        "%stun%",
                        "%immobilize%",
                        "%curse%"
                    ]
                },
                {
                    level: 7,
                    health: "23xC",
                    move: 5,
                    attack: 5,
                    special1: [
                        "Move to next door and reveal room"
                    ],
                    special2: [
                        "Summon Living Bones"
                    ],
                    immunities: [
                        "%stun%",
                        "%immobilize%",
                        "%curse%"
                    ]
                }
            ]
        },
        "The Betrayer": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "10xC",
                    move: 3,
                    attack: 4,
                    range: 3,
                    special1: [
                        "Summon Giant Viper and Fear"
                    ],
                    special2: [
                        "Mind Control"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%stun%",
                        "%disarm%",
                        "%curse%"
                    ]
                },
                {
                    level: 1,
                    health: "12xC",
                    move: 3,
                    attack: 5,
                    range: 3,
                    special1: [
                        "Summon Giant Viper and Fear"
                    ],
                    special2: [
                        "Mind Control"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%stun%",
                        "%disarm%",
                        "%curse%"
                    ]
                },
                {
                    level: 2,
                    health: "14xC",
                    move: 3,
                    attack: 6,
                    range: 4,
                    special1: [
                        "Summon Giant Viper and Fear"
                    ],
                    special2: [
                        "Mind Control"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%stun%",
                        "%disarm%",
                        "%curse%"
                    ]
                },
                {
                    level: 3,
                    health: "16xC",
                    move: 4,
                    attack: 7,
                    range: 4,
                    special1: [
                        "Summon Giant Viper and Fear"
                    ],
                    special2: [
                        "Mind Control"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%stun%",
                        "%disarm%",
                        "%curse%"
                    ]
                },
                {
                    level: 4,
                    health: "18xC",
                    move: 4,
                    attack: 8,
                    range: 4,
                    special1: [
                        "Summon Giant Viper and Fear"
                    ],
                    special2: [
                        "Mind Control"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%stun%",
                        "%disarm%",
                        "%curse%"
                    ]
                },
                {
                    level: 5,
                    health: "20xC",
                    move: 5,
                    attack: 8,
                    range: 5,
                    special1: [
                        "Summon Giant Viper and Fear"
                    ],
                    special2: [
                        "Mind Control"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%stun%",
                        "%disarm%",
                        "%curse%"
                    ]
                },
                {
                    level: 6,
                    health: "23xC",
                    move: 5,
                    attack: 9,
                    range: 5,
                    special1: [
                        "Summon Giant Viper and Fear"
                    ],
                    special2: [
                        "Mind Control"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%stun%",
                        "%disarm%",
                        "%curse%"
                    ]
                },
                {
                    level: 7,
                    health: "27xC",
                    move: 5,
                    attack: 9,
                    range: 5,
                    special1: [
                        "Summon Giant Viper and Fear"
                    ],
                    special2: [
                        "Mind Control"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%stun%",
                        "%disarm%",
                        "%curse%"
                    ]
                }
            ]
        },
        "Captain of the Guard": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "7xC",
                    move: 2,
                    attack: 3,
                    special1: [
                        "%heal% 2, Affect self",
                        "and all allies"
                    ],
                    special2: [
                        "All allies add +1 Attack to all attacks this round",
                        "%attack% + 1"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 1,
                    health: "9xC",
                    move: 2,
                    attack: 3,
                    special1: [
                        "%heal% 2, Affect self",
                        "and all allies"
                    ],
                    special2: [
                        "All allies add +1 Attack to all attacks this round",
                        "%attack% + 1"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 2,
                    health: "11xC",
                    move: 2,
                    attack: 4,
                    special1: [
                        "%heal% 2, Affect self",
                        "and all allies"
                    ],
                    special2: [
                        "All allies add +1 Attack to all attacks this round",
                        "%attack% + 1"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 3,
                    health: "14xC",
                    move: 3,
                    attack: 4,
                    special1: [
                        "%heal% 2, Affect self",
                        "and all allies"
                    ],
                    special2: [
                        "All allies add +1 Attack to all attacks this round",
                        "%attack% + 1"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 4,
                    health: "16xC",
                    move: 3,
                    attack: 5,
                    special1: [
                        "%heal% 2, Affect self",
                        "and all allies"
                    ],
                    special2: [
                        "All allies add +1 Attack to all attacks this round",
                        "%attack% + 1"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 5,
                    health: "20xC",
                    move: 3,
                    attack: 5,
                    special1: [
                        "%heal% 2, Affect self",
                        "and all allies"
                    ],
                    special2: [
                        "All allies add +1 Attack to all attacks this round",
                        "%attack% + 1"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 6,
                    health: "21xC",
                    move: 4,
                    attack: 6,
                    special1: [
                        "%heal% 2, Affect self",
                        "and all allies"
                    ],
                    special2: [
                        "All allies add +1 Attack to all attacks this round",
                        "%attack% + 1"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 7,
                    health: "25xC",
                    move: 4,
                    attack: 6,
                    special1: [
                        "%heal% 2, Affect self",
                        "and all allies"
                    ],
                    special2: [
                        "All allies add +1 Attack to all attacks this round",
                        "%attack% + 1"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%muddle%",
                        "%stun%"
                    ]
                }
            ]
        },
        "The Colorless": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "9xC",
                    move: 3,
                    attack: 2,
                    special1: [
                        "%dark%%use%",
                        "!Summon Night",
                        "!Demon",
                        "%invisible%, Self"
                    ],
                    special2: [
                        "%light%%use%",
                        "!Summon Sun",
                        "!Demon",
                        "%heal% 4, Self",
                        "%shield% + 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 1,
                    health: "10xC",
                    move: 3,
                    attack: 3,
                    special1: [
                        "%dark%%use%",
                        "!Summon Night",
                        "!Demon",
                        "%invisible%, Self"
                    ],
                    special2: [
                        "%light%%use%",
                        "!Summon Sun",
                        "!Demon",
                        "%heal% 4, Self",
                        "%shield% + 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 2,
                    health: "11xC",
                    move: 4,
                    attack: 3,
                    special1: [
                        "%dark%%use%",
                        "!Summon Night",
                        "!Demon",
                        "%invisible%, Self"
                    ],
                    special2: [
                        "%light%%use%",
                        "!Summon Sun",
                        "!Demon",
                        "%heal% 5, Self",
                        "%shield% + 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 3,
                    health: "12xC",
                    move: 4,
                    attack: 4,
                    special1: [
                        "%dark%%use%",
                        "!Summon Night",
                        "!Demon",
                        "%invisible%, Self"
                    ],
                    special2: [
                        "%light%%use%",
                        "!Summon Sun",
                        "!Demon",
                        "%heal% 5, Self",
                        "%shield% + 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 4,
                    health: "14xC",
                    move: 4,
                    attack: 4,
                    special1: [
                        "%dark%%use%",
                        "!Summon Night",
                        "!Demon",
                        "%invisible%, Self"
                    ],
                    special2: [
                        "%light%%use%",
                        "!Summon Sun",
                        "!Demon",
                        "%heal% 6, Self",
                        "%shield% + 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 5,
                    health: "15xC",
                    move: 4,
                    attack: 5,
                    special1: [
                        "%dark%%use%",
                        "!Summon Night",
                        "!Demon",
                        "%invisible%, Self"
                    ],
                    special2: [
                        "%light%%use%",
                        "!Summon Sun",
                        "!Demon",
                        "%heal% 6, Self",
                        "%shield% + 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 6,
                    health: "17xC",
                    move: 4,
                    attack: 6,
                    special1: [
                        "%dark%%use%",
                        "!Summon Night",
                        "!Demon",
                        "%invisible%, Self"
                    ],
                    special2: [
                        "%light%%use%",
                        "!Summon Sun",
                        "!Demon",
                        "%heal% 7, Self",
                        "%shield% + 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 7,
                    health: "19xC",
                    move: 5,
                    attack: 7,
                    special1: [
                        "%dark%%use%",
                        "!Summon Night",
                        "!Demon",
                        "%invisible%, Self"
                    ],
                    special2: [
                        "%light%%use%",
                        "!Summon Sun",
                        "!Demon",
                        "%heal% 7, Self",
                        "%shield% + 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                }
            ]
        },
        "Dark Rider": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "9xC",
                    move: 2,
                    attack: "3+X",
                    special1: [
                        "%move% + 2",
                        "%attack% + 0"
                    ],
                    special2: [
                        "%move% + 0",
                        "Summon Imp",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%stun%",
                        "%disarm%"
                    ],
                    notes: "X = Hexes moved"
                },
                {
                    level: 1,
                    health: "10xC",
                    move: 3,
                    attack: "3+X",
                    special1: [
                        "%move% + 2",
                        "%attack% + 0"
                    ],
                    special2: [
                        "%move% + 0",
                        "Summon Imp",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%stun%",
                        "%disarm%"
                    ],
                    notes: "X = Hexes moved"
                },
                {
                    level: 2,
                    health: "12xC",
                    move: 3,
                    attack: "3+X",
                    special1: [
                        "%move% + 2",
                        "%attack% + 0"
                    ],
                    special2: [
                        "%move% + 0",
                        "Summon Imp",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%stun%",
                        "%disarm%"
                    ],
                    notes: "X = Hexes moved"
                },
                {
                    level: 3,
                    health: "13xC",
                    move: 3,
                    attack: "4+X",
                    special1: [
                        "%move% + 2",
                        "%attack% + 0"
                    ],
                    special2: [
                        "%move% + 0",
                        "Summon Imp",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%stun%",
                        "%disarm%"
                    ],
                    notes: "X = Hexes moved"
                },
                {
                    level: 4,
                    health: "15xC",
                    move: 3,
                    attack: "4+X",
                    special1: [
                        "%move% + 2",
                        "%attack% + 0"
                    ],
                    special2: [
                        "%move% + 0",
                        "Summon Imp",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%stun%",
                        "%disarm%"
                    ],
                    notes: "X = Hexes moved"
                },
                {
                    level: 5,
                    health: "16xC",
                    move: 3,
                    attack: "5+X",
                    special1: [
                        "%move% + 2",
                        "%attack% + 0"
                    ],
                    special2: [
                        "%move% + 0",
                        "Summon Imp",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%stun%",
                        "%disarm%"
                    ],
                    notes: "X = Hexes moved"
                },
                {
                    level: 6,
                    health: "16xC",
                    move: 4,
                    attack: "5+X",
                    special1: [
                        "%move% + 2",
                        "%attack% + 0"
                    ],
                    special2: [
                        "%move% + 0",
                        "Summon Imp",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%stun%",
                        "%disarm%"
                    ],
                    notes: "X = Hexes moved"
                },
                {
                    level: 7,
                    health: "18xC",
                    move: 4,
                    attack: "6+X",
                    special1: [
                        "%move% + 2",
                        "%attack% + 0"
                    ],
                    special2: [
                        "%move% + 0",
                        "Summon Imp",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%stun%",
                        "%disarm%"
                    ],
                    notes: "X = Hexes moved"
                }
            ]
        },
        "Elder Drake": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "11xC",
                    move: 0,
                    attack: 3,
                    special1: [
                        "%attack% + 0 %boss-aoe-elder-drake-sp1%"
                    ],
                    special2: [
                        "Summon 2 Zephyrs",
                        "and %move%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%stun%",
                        "%pull%",
                        "%push%"
                    ]
                },
                {
                    level: 1,
                    health: "12xC",
                    move: 0,
                    attack: 4,
                    special1: [
                        "%attack% + 0 %boss-aoe-elder-drake-sp1%"
                    ],
                    special2: [
                        "Summon 2 Zephyrs",
                        "and %move%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%stun%",
                        "%pull%",
                        "%push%"
                    ]
                },
                {
                    level: 2,
                    health: "15xC",
                    move: 0,
                    attack: 4,
                    special1: [
                        "%attack% + 0 %boss-aoe-elder-drake-sp1%"
                    ],
                    special2: [
                        "Summon 2 Zephyrs",
                        "and %move%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%stun%",
                        "%pull%",
                        "%push%"
                    ]
                },
                {
                    level: 3,
                    health: "16xC",
                    move: 0,
                    attack: 5,
                    special1: [
                        "%attack% + 0 %boss-aoe-elder-drake-sp1%"
                    ],
                    special2: [
                        "Summon 2 Zephyrs",
                        "and %move%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%stun%",
                        "%pull%",
                        "%push%"
                    ]
                },
                {
                    level: 4,
                    health: "20xC",
                    move: 0,
                    attack: 5,
                    special1: [
                        "%attack% + 0 %boss-aoe-elder-drake-sp1%"
                    ],
                    special2: [
                        "Summon 2 Zephyrs",
                        "and %move%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%stun%",
                        "%pull%",
                        "%push%"
                    ]
                },
                {
                    level: 5,
                    health: "22xC",
                    move: 0,
                    attack: 6,
                    special1: [
                        "%attack% + 0 %boss-aoe-elder-drake-sp1%"
                    ],
                    special2: [
                        "Summon 2 Zephyrs",
                        "and %move%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%stun%",
                        "%pull%",
                        "%push%"
                    ]
                },
                {
                    level: 6,
                    health: "27xC",
                    move: 0,
                    attack: 6,
                    special1: [
                        "%attack% + 0 %boss-aoe-elder-drake-sp1%"
                    ],
                    special2: [
                        "Summon 2 Zephyrs",
                        "and %move%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%stun%",
                        "%pull%",
                        "%push%"
                    ]
                },
                {
                    level: 7,
                    health: "29xC",
                    move: 0,
                    attack: 7,
                    special1: [
                        "%attack% + 0 %boss-aoe-elder-drake-sp1%"
                    ],
                    special2: [
                        "Summon 2 Zephyrs",
                        "and %move%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%stun%",
                        "%pull%",
                        "%push%"
                    ]
                }
            ]
        },
        "The Gloom": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "20xC",
                    move: 2,
                    attack: 5,
                    special1: [
                        "%move% + 9",
                        "%attack% + 9"
                    ],
                    special2: [
                        "Teleport",
                        "%attack% + 1",
                        "%range% 5",
                        "%poison%",
                        "%wound%",
                        "%stun%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 1,
                    health: "25xC",
                    move: 2,
                    attack: 5,
                    special1: [
                        "%move% + 9",
                        "%attack% + 9"
                    ],
                    special2: [
                        "Teleport",
                        "%attack% + 1",
                        "%range% 5",
                        "%poison%",
                        "%wound%",
                        "%stun%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 2,
                    health: "29xC",
                    move: 2,
                    attack: 6,
                    special1: [
                        "%move% + 9",
                        "%attack% + 9"
                    ],
                    special2: [
                        "Teleport",
                        "%attack% + 1",
                        "%range% 5",
                        "%poison%",
                        "%wound%",
                        "%stun%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 3,
                    health: "35xC",
                    move: 2,
                    attack: 6,
                    special1: [
                        "%move% + 9",
                        "%attack% + 9"
                    ],
                    special2: [
                        "Teleport",
                        "%attack% + 1",
                        "%range% 5",
                        "%poison%",
                        "%wound%",
                        "%stun%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 4,
                    health: "39xC",
                    move: 3,
                    attack: 7,
                    special1: [
                        "%move% + 9",
                        "%attack% + 9"
                    ],
                    special2: [
                        "Teleport",
                        "%attack% + 1",
                        "%range% 5",
                        "%poison%",
                        "%wound%",
                        "%stun%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 5,
                    health: "46xC",
                    move: 3,
                    attack: 7,
                    special1: [
                        "%move% + 9",
                        "%attack% + 9"
                    ],
                    special2: [
                        "Teleport",
                        "%attack% + 1",
                        "%range% 5",
                        "%poison%",
                        "%wound%",
                        "%stun%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 6,
                    health: "50xC",
                    move: 3,
                    attack: 8,
                    special1: [
                        "%move% + 9",
                        "%attack% + 9"
                    ],
                    special2: [
                        "Teleport",
                        "%attack% + 1",
                        "%range% 5",
                        "%poison%",
                        "%wound%",
                        "%stun%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 7,
                    health: "56xC",
                    move: 3,
                    attack: 9,
                    special1: [
                        "%move% + 9",
                        "%attack% + 9"
                    ],
                    special2: [
                        "Teleport",
                        "%attack% + 1",
                        "%range% 5",
                        "%poison%",
                        "%wound%",
                        "%stun%"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                }
            ]
        },
        "Inox Bodyguard": {
            deck: "Boss",
            count: 2,
            levels: [
                {
                    level: 0,
                    health: "6xC",
                    move: 2,
                    attack: "C",
                    special1: [
                        "%move% - 1",
                        "%attack% - 1 %boss-aoe-inox-bodyguard-sp1%"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "%retaliate% + 3"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 1,
                    health: "7xC",
                    move: 2,
                    attack: "1+C",
                    special1: [
                        "%move% - 1",
                        "%attack% - 1 %boss-aoe-inox-bodyguard-sp1%"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "%retaliate% + 3"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 2,
                    health: "9xC",
                    move: 2,
                    attack: "1+C",
                    special1: [
                        "%move% - 1",
                        "%attack% - 1 %boss-aoe-inox-bodyguard-sp1%"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "%retaliate% + 3"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 3,
                    health: "10xC",
                    move: 3,
                    attack: "2+C",
                    special1: [
                        "%move% - 1",
                        "%attack% - 1 %boss-aoe-inox-bodyguard-sp1%"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "%retaliate% + 4"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 4,
                    health: "11xC",
                    move: 3,
                    attack: "2+C",
                    special1: [
                        "%move% - 1",
                        "%attack% - 1 %boss-aoe-inox-bodyguard-sp1%"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "%retaliate% + 4"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 5,
                    health: "13xC",
                    move: 3,
                    attack: "3+C",
                    special1: [
                        "%move% - 1",
                        "%attack% - 1 %boss-aoe-inox-bodyguard-sp1%"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "%retaliate% + 5"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 6,
                    health: "15xC",
                    move: 4,
                    attack: "3+C",
                    special1: [
                        "%move% - 1",
                        "%attack% - 1 %boss-aoe-inox-bodyguard-sp1%"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "%retaliate% + 5"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 7,
                    health: "17xC",
                    move: 4,
                    attack: "4+C",
                    special1: [
                        "%move% - 1",
                        "%attack% - 1 %boss-aoe-inox-bodyguard-sp1%"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "%retaliate% + 5"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%"
                    ]
                }
            ]
        },
        Jekserah: {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "6xC",
                    move: 2,
                    attack: 2,
                    special1: [
                        "Summon Living Bones",
                        "%attack% - 1, Target all",
                        "adjacent enemies"
                    ],
                    special2: [
                        "Summon Living Corpse",
                        "%move% - 1",
                        "%attack% + 2"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ]
                },
                {
                    level: 1,
                    health: "7xC",
                    move: 2,
                    attack: 3,
                    special1: [
                        "Summon Living Bones",
                        "%attack% - 1, Target all",
                        "adjacent enemies"
                    ],
                    special2: [
                        "Summon Living Corpse",
                        "%move% - 1",
                        "%attack% + 2"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ]
                },
                {
                    level: 2,
                    health: "9xC",
                    move: 3,
                    attack: 3,
                    special1: [
                        "Summon Living Bones",
                        "%attack% - 1, Target all",
                        "adjacent enemies"
                    ],
                    special2: [
                        "Summon Living Corpse",
                        "%move% - 1",
                        "%attack% + 2"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ]
                },
                {
                    level: 3,
                    health: "12xC",
                    move: 4,
                    attack: 4,
                    special1: [
                        "Summon Living Bones",
                        "%attack% - 1, Target all",
                        "adjacent enemies"
                    ],
                    special2: [
                        "Summon Living Corpse",
                        "%move% - 1",
                        "%attack% + 2"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ]
                },
                {
                    level: 4,
                    health: "13xC",
                    move: 4,
                    attack: 5,
                    special1: [
                        "Summon Living Bones",
                        "%attack% - 1, Target all",
                        "adjacent enemies"
                    ],
                    special2: [
                        "Summon Living Corpse",
                        "%move% - 1",
                        "%attack% + 2"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ]
                },
                {
                    level: 5,
                    health: "15xC",
                    move: 5,
                    attack: 5,
                    special1: [
                        "Summon Living Bones",
                        "%attack% - 1, Target all",
                        "adjacent enemies"
                    ],
                    special2: [
                        "Summon Living Corpse",
                        "%move% - 1",
                        "%attack% + 2"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ]
                },
                {
                    level: 6,
                    health: "18xC",
                    move: 5,
                    attack: 5,
                    special1: [
                        "Summon Living Bones",
                        "%attack% - 1, Target all",
                        "adjacent enemies"
                    ],
                    special2: [
                        "Summon Living Corpse",
                        "%move% - 1",
                        "%attack% + 2"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ]
                },
                {
                    level: 7,
                    health: "22xC",
                    move: 5,
                    attack: 5,
                    special1: [
                        "Summon Living Bones",
                        "%attack% - 1, Target all",
                        "adjacent enemies"
                    ],
                    special2: [
                        "Summon Living Corpse",
                        "%move% - 1",
                        "%attack% + 2"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ]
                }
            ]
        },
        "Merciless Overseer": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "6xC",
                    move: 2,
                    attack: "V",
                    special1: [
                        "All Scouts act again"
                    ],
                    special2: [
                        "Summon Vermling Scout"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ],
                    notes: "V = Number of Scouts present"
                },
                {
                    level: 1,
                    health: "8xC",
                    move: 2,
                    attack: "V",
                    special1: [
                        "All Scouts act again"
                    ],
                    special2: [
                        "Summon Vermling Scout"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ],
                    notes: "V = Number of Scouts present"
                },
                {
                    level: 2,
                    health: "9xC",
                    move: 3,
                    attack: "V",
                    special1: [
                        "All Scouts act again"
                    ],
                    special2: [
                        "Summon Vermling Scout"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ],
                    notes: "V = Number of Scouts present"
                },
                {
                    level: 3,
                    health: "11xC",
                    move: 3,
                    attack: "V",
                    special1: [
                        "All Scouts act again"
                    ],
                    special2: [
                        "Summon Vermling Scout"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ],
                    notes: "V = Number of Scouts present"
                },
                {
                    level: 4,
                    health: "12xC",
                    move: 4,
                    attack: "V",
                    special1: [
                        "All Scouts act again"
                    ],
                    special2: [
                        "Summon Vermling Scout"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ],
                    notes: "V = Number of Scouts present"
                },
                {
                    level: 5,
                    health: "14xC",
                    move: 4,
                    attack: "V",
                    special1: [
                        "All Scouts act again"
                    ],
                    special2: [
                        "Summon Vermling Scout"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ],
                    notes: "V = Number of Scouts present"
                },
                {
                    level: 6,
                    health: "16xC",
                    move: 4,
                    attack: "V",
                    special1: [
                        "All Scouts act again"
                    ],
                    special2: [
                        "Summon Vermling Scout"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ],
                    notes: "V = Number of Scouts present"
                },
                {
                    level: 7,
                    health: "19xC",
                    move: 4,
                    attack: "V",
                    special1: [
                        "All Scouts act again"
                    ],
                    special2: [
                        "Summon Vermling Scout"
                    ],
                    immunities: [
                        "%disarm%",
                        "%wound%",
                        "%curse%",
                        "%stun%"
                    ],
                    notes: "V = Number of Scouts present"
                }
            ]
        },
        "Prime Demon": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "8xC",
                    move: 3,
                    attack: 4,
                    special1: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    special2: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 1,
                    health: "9xC",
                    move: 4,
                    attack: 4,
                    special1: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    special2: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 2,
                    health: "10xC",
                    move: 4,
                    attack: 5,
                    special1: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    special2: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 3,
                    health: "12xC",
                    move: 4,
                    attack: 6,
                    special1: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    special2: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 4,
                    health: "14xC",
                    move: 5,
                    attack: 6,
                    special1: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    special2: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 5,
                    health: "16xC",
                    move: 5,
                    attack: 7,
                    special1: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    special2: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 6,
                    health: "20xC",
                    move: 5,
                    attack: 7,
                    special1: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    special2: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%"
                    ]
                },
                {
                    level: 7,
                    health: "22xC",
                    move: 5,
                    attack: 8,
                    special1: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    special2: [
                        "Throne moves",
                        "Summon Demon",
                        "%move% + 2",
                        "%attack% - 1"
                    ],
                    immunities: [
                        "%wound%",
                        "%poison%",
                        "%disarm%",
                        "%immobilize%",
                        "%muddle%",
                        "%stun%"
                    ]
                }
            ]
        },
        "The Sightless Eye": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "7xC",
                    move: 0,
                    attack: 5,
                    range: 3,
                    special1: [
                        "Summon Deep Terror",
                        "%attack% - 3 %boss-aoe-sightless-eye-sp1%"
                    ],
                    special2: [
                        "Summon Deep Terror",
                        "%attack% - 2 %boss-aoe-sightless-eye-sp2%"
                    ],
                    immunities: [
                        "%stun%",
                        "%disarm%",
                        "%curse%",
                        "%muddle%"
                    ]
                },
                {
                    level: 1,
                    health: "8xC",
                    move: 0,
                    attack: 6,
                    range: 3,
                    special1: [
                        "Summon Deep Terror",
                        "%attack% - 3 %boss-aoe-sightless-eye-sp1%"
                    ],
                    special2: [
                        "Summon Deep Terror",
                        "%attack% - 2 %boss-aoe-sightless-eye-sp2%"
                    ],
                    immunities: [
                        "%stun%",
                        "%disarm%",
                        "%curse%",
                        "%muddle%"
                    ]
                },
                {
                    level: 2,
                    health: "10xC",
                    move: 0,
                    attack: 6,
                    range: 3,
                    special1: [
                        "Summon Deep Terror",
                        "%attack% - 3 %boss-aoe-sightless-eye-sp1%"
                    ],
                    special2: [
                        "Summon Deep Terror",
                        "%attack% - 2 %boss-aoe-sightless-eye-sp2%"
                    ],
                    immunities: [
                        "%stun%",
                        "%disarm%",
                        "%curse%",
                        "%muddle%"
                    ]
                },
                {
                    level: 3,
                    health: "11xC",
                    move: 0,
                    attack: 7,
                    range: 3,
                    special1: [
                        "Summon Deep Terror",
                        "%attack% - 3 %boss-aoe-sightless-eye-sp1%"
                    ],
                    special2: [
                        "Summon Deep Terror",
                        "%attack% - 2 %boss-aoe-sightless-eye-sp2%"
                    ],
                    immunities: [
                        "%stun%",
                        "%disarm%",
                        "%curse%",
                        "%muddle%"
                    ]
                },
                {
                    level: 4,
                    health: "14xC",
                    move: 0,
                    attack: 7,
                    range: 3,
                    special1: [
                        "Summon Deep Terror",
                        "%attack% - 3 %boss-aoe-sightless-eye-sp1%"
                    ],
                    special2: [
                        "Summon Deep Terror",
                        "%attack% - 2 %boss-aoe-sightless-eye-sp2%"
                    ],
                    immunities: [
                        "%stun%",
                        "%disarm%",
                        "%curse%",
                        "%muddle%"
                    ]
                },
                {
                    level: 5,
                    health: "15xC",
                    move: 0,
                    attack: 8,
                    range: 3,
                    special1: [
                        "Summon Deep Terror",
                        "%attack% - 3 %boss-aoe-sightless-eye-sp1%"
                    ],
                    special2: [
                        "Summon Deep Terror",
                        "%attack% - 2 %boss-aoe-sightless-eye-sp2%"
                    ],
                    immunities: [
                        "%stun%",
                        "%disarm%",
                        "%curse%",
                        "%muddle%"
                    ]
                },
                {
                    level: 6,
                    health: "18xC",
                    move: 0,
                    attack: 8,
                    range: 3,
                    special1: [
                        "Summon Deep Terror",
                        "%attack% - 3 %boss-aoe-sightless-eye-sp1%"
                    ],
                    special2: [
                        "Summon Deep Terror",
                        "%attack% - 2 %boss-aoe-sightless-eye-sp2%"
                    ],
                    immunities: [
                        "%stun%",
                        "%disarm%",
                        "%curse%",
                        "%muddle%"
                    ]
                },
                {
                    level: 7,
                    health: "20xC",
                    move: 0,
                    attack: 9,
                    range: 3,
                    special1: [
                        "Summon Deep Terror",
                        "%attack% - 3 %boss-aoe-sightless-eye-sp1%"
                    ],
                    special2: [
                        "Summon Deep Terror",
                        "%attack% - 2 %boss-aoe-sightless-eye-sp2%"
                    ],
                    immunities: [
                        "%stun%",
                        "%disarm%",
                        "%curse%",
                        "%muddle%"
                    ]
                }
            ]
        },
        "Winged Horror": {
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "6xC",
                    move: 3,
                    attack: 3,
                    special1: [
                        "%attack% - 1, Target all",
                        "adjacent enemies",
                        "%attack% + 0, %range% 3",
                        "Hatch eggs"
                    ],
                    special2: [
                        "%move% - 1",
                        "%attack% + 0",
                        "Summon C",
                        "eggs"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 1,
                    health: "7xC",
                    move: 4,
                    attack: 3,
                    special1: [
                        "%attack% - 1, Target all",
                        "adjacent enemies",
                        "%attack% + 0, %range% 3",
                        "Hatch eggs"
                    ],
                    special2: [
                        "%move% - 1",
                        "%attack% + 0",
                        "Summon C",
                        "eggs"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 2,
                    health: "8xC",
                    move: 4,
                    attack: 4,
                    special1: [
                        "%attack% - 1, Target all",
                        "adjacent enemies",
                        "%attack% + 0, %range% 3",
                        "Hatch eggs"
                    ],
                    special2: [
                        "%move% - 1",
                        "%attack% + 0",
                        "Summon C",
                        "eggs"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 3,
                    health: "10xC",
                    move: 4,
                    attack: 4,
                    special1: [
                        "%attack% - 1, Target all",
                        "adjacent enemies",
                        "%attack% + 0, %range% 3",
                        "Hatch eggs"
                    ],
                    special2: [
                        "%move% - 1",
                        "%attack% + 0",
                        "Summon C",
                        "eggs"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 4,
                    health: "12xC",
                    move: 5,
                    attack: 4,
                    special1: [
                        "%attack% - 1, Target all",
                        "adjacent enemies",
                        "%attack% + 0, %range% 3",
                        "Hatch eggs"
                    ],
                    special2: [
                        "%move% - 1",
                        "%attack% + 0",
                        "Summon C",
                        "eggs"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 5,
                    health: "14xC",
                    move: 5,
                    attack: 5,
                    special1: [
                        "%attack% - 1, Target all",
                        "adjacent enemies",
                        "%attack% + 0, %range% 3",
                        "Hatch eggs"
                    ],
                    special2: [
                        "%move% - 1",
                        "%attack% + 0",
                        "Summon C",
                        "eggs"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 6,
                    health: "17xC",
                    move: 5,
                    attack: 5,
                    special1: [
                        "%attack% - 1, Target all",
                        "adjacent enemies",
                        "%attack% + 0, %range% 3",
                        "Hatch eggs"
                    ],
                    special2: [
                        "%move% - 1",
                        "%attack% + 0",
                        "Summon C",
                        "eggs"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                },
                {
                    level: 7,
                    health: "20xC",
                    move: 5,
                    attack: 5,
                    special1: [
                        "%attack% - 1, Target all",
                        "adjacent enemies",
                        "%attack% + 0, %range% 3",
                        "Hatch eggs"
                    ],
                    special2: [
                        "%move% - 1",
                        "%attack% + 0",
                        "Summon C",
                        "eggs"
                    ],
                    immunities: [
                        "%disarm%",
                        "%poison%",
                        "%muddle%",
                        "%stun%",
                        "%curse%"
                    ]
                }
            ]
        },
        "Aesther Ashblade": {
            edition: "FC",
            deck: "Ashblade",
            count: 4,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 8, move: 3, attack: 2
                    },
                    elite: {
                        health: 12,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 9, move: 3, attack: 3
                    },
                    elite: {
                        health: 14,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 13, move: 3, attack: 3
                    },
                    elite: {
                        health: 16,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 15,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "Attackers gain disadvantage",
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 15,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "Attackers gain disadvantage",
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 18,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 25,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "Attackers gain disadvantage",
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 21,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 28,
                        move: 4,
                        attack: 6,
                        attributes: [
                            "Attackers gain disadvantage",
                            "%poison%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 24,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%poison%"
                        ]
                    },
                    elite: {
                        health: 32,
                        move: 5,
                        attack: 6,
                        attributes: [
                            "Attackers gain disadvantage",
                            "%poison%"
                        ]
                    }
                }
            ]
        },
        "Aesther Scout": {
            edition: "FC",
            deck: "Scout",
            count: 4,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 8, move: 3, attack: 2
                    },
                    elite: {
                        health: 13, move: 3, attack: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 9, move: 3, attack: 3
                    },
                    elite: {
                        health: 14,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%muddle%"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 12, move: 3, attack: 3
                    },
                    elite: {
                        health: 17,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%muddle%"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 14,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%muddle%"
                        ]
                    },
                    elite: {
                        health: 19,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%muddle%",
                            "%curse%"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 16,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%muddle%"
                        ]
                    },
                    elite: {
                        health: 23,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%muddle%",
                            "%curse%"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 18,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%muddle%",
                            "%curse%"
                        ]
                    },
                    elite: {
                        health: 26,
                        move: 4,
                        attack: 5,
                        attributes: [
                            "%muddle%",
                            "%curse%"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 21,
                        move: 4,
                        attack: 4,
                        attributes: [
                            "%muddle%",
                            "%curse%"
                        ]
                    },
                    elite: {
                        health: 29,
                        move: 5,
                        attack: 5,
                        attributes: [
                            "%muddle%",
                            "%curse%"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 24,
                        move: 5,
                        attack: 4,
                        attributes: [
                            "%muddle%",
                            "%curse%"
                        ]
                    },
                    elite: {
                        health: 33,
                        move: 5,
                        attack: 6,
                        attributes: [
                            "%muddle%",
                            "%curse%"
                        ]
                    }
                }
            ]
        },
        "Bear-Drake Abomination": {
            deck: "Bear-Drake Abomination",
            edition: "FC",
            count: 1,
            flying: true,
            hidden: true,
            levels: [
                {
                    level: 0, health: "11xC/2", move: 3, attack: 4,
                    immunities: [
                        "%immobilize%",
                        "%disarm%",
                        "%stun%"
                    ]
                },
                {
                    level: 1, health: "14xC/2", move: 3, attack: 4,
                    immunities: [
                        "%immobilize%",
                        "%disarm%",
                        "%stun%"
                    ],
                },
                {
                    level: 2, health: "17xC/2", move: 4, attack: 4,
                    immunities: [
                        "%immobilize%",
                        "%disarm%",
                        "%stun%"
                    ]
                },
                {
                    level: 3, health: "20xC/2", move: 4, attack: 5,
                    immunities: [
                        "%immobilize%",
                        "%disarm%",
                        "%stun%"
                    ]
                },
                {
                    level: 4,
                    health: "21xC/2",
                    move: 5,
                    attack: 5,
                    attributes: [
                        "%wound%"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%disarm%",
                        "%stun%"
                    ]
                },
                {
                    level: 5,
                    health: "24xC/2",
                    move: 5,
                    attack: 6,
                    attributes: [
                        "%wound%"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%disarm%",
                        "%stun%"
                    ]
                },
                {
                    level: 6,
                    health: "28xC/2",
                    move: 5,
                    attack: 7,
                    attributes: [
                        "%wound%"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%disarm%",
                        "%stun%"
                    ]
                },
                {
                    level: 7,
                    health: "33xC/2",
                    move: 5,
                    attack: 7,
                    attributes: [
                        "%wound%"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%disarm%",
                        "%stun%"
                    ]
                }
            ]
        },
        "Valrath Tracker": {
            edition: "FC",
            deck: "Tracker",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 5, move: 2, attack: 2, range: 2
                    },
                    elite: {
                        health: 9, move: 2, attack: 3, range: 4
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 6, move: 3, attack: 2, range: 2
                    },
                    elite: {
                        health: 11,
                        move: 2,
                        attack: 3,
                        range: 5,
                        attributes: [
                            "%pierce% 1"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 7, move: 3, attack: 3, range: 2
                    },
                    elite: {
                        health: 12,
                        move: 2,
                        attack: 4,
                        range: 5,
                        attributes: [
                            "%pierce% 1"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 9,
                        move: 3,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "Advantage"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 2,
                        attack: 4,
                        range: 6,
                        attributes: [
                            "%pierce% 1",
                            "%push% 1"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 10,
                        move: 4,
                        attack: 3,
                        range: 3,
                        attributes: [
                            "Advantage"
                        ]
                    },
                    elite: {
                        health: 16,
                        move: 3,
                        attack: 4,
                        range: 7,
                        attributes: [
                            "%pierce% 2",
                            "%push% 1"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 12,
                        move: 4,
                        attack: 4,
                        range: 3,
                        attributes: [
                            "Advantage"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 3,
                        attack: 5,
                        range: 7,
                        attributes: [
                            "%pierce% 2",
                            "%push% 1"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 14,
                        move: 4,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "Advantage"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 3,
                        attack: 5,
                        range: 8,
                        attributes: [
                            "%pierce% 2",
                            "%push% 2"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 17,
                        move: 5,
                        attack: 4,
                        range: 4,
                        attributes: [
                            "Advantage"
                        ]
                    },
                    elite: {
                        health: 24,
                        move: 3,
                        attack: 6,
                        range: 8,
                        attributes: [
                            "%pierce% 3",
                            "%push% 2"
                        ]
                    }
                }
            ]
        },
        "Valrath Savage": {
            edition: "FC",
            deck: "Savage",
            count: 6,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 6,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 10, move: 2, attack: 3
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 6,
                        move: 2,
                        attack: 2,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 12, move: 2, attack: 3
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 8,
                        move: 2,
                        attack: 3,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 14, move: 2, attack: 4
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 10,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%shield% 1"
                        ]
                    },
                    elite: {
                        health: 16,
                        move: 2,
                        attack: 4,
                        attributes: [
                            "*All adjacent",
                            "*allies add",
                            "*+1 %attack%",
                            "*to all",
                            "*attacks"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 10,
                        move: 3,
                        attack: 2,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 3,
                        attack: 4,
                        attributes: [
                            "*All adjacent",
                            "*allies add",
                            "*+1 %attack%",
                            "*to all",
                            "*attacks"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 11,
                        move: 3,
                        attack: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 21,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "*All adjacent",
                            "*allies add",
                            "*+2 %attack%",
                            "*to all",
                            "*attacks"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 12,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%shield% 2"
                        ]
                    },
                    elite: {
                        health: 24,
                        move: 3,
                        attack: 5,
                        attributes: [
                            "*All adjacent",
                            "*allies add",
                            "*+2 %attack%",
                            "*to all",
                            "*attacks"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 14,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%shield% 3"
                        ]
                    },
                    elite: {
                        health: 28,
                        move: 3,
                        attack: 6,
                        attributes: [
                            "*All adjacent",
                            "*allies add",
                            "*+2 %attack%",
                            "*to all",
                            "*attacks"
                        ]
                    }
                }
            ]
        },
        "Wolf-Viper Abomination": {
            edition: "FC",
            deck: "Wolf-Viper Abomination",
            count: 6,
            hidden: true,
            levels: [
                {
                    level: 0,
                    normal: {
                        health: 7, move: 3, attack: 2
                    },
                    elite: {
                        health: 9, move: 5, attack: 2
                    }
                },
                {
                    level: 1,
                    normal: {
                        health: 7,
                        move: 4,
                        attack: 2,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 9,
                        move: 5,
                        attack: 2,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 2,
                    normal: {
                        health: 9,
                        move: 4,
                        attack: 2,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 10,
                        move: 5,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 3,
                    normal: {
                        health: 11,
                        move: 4,
                        attack: 2,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 11,
                        move: 5,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 4,
                    normal: {
                        health: 11,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%retaliate% 1"
                        ]
                    },
                    elite: {
                        health: 14,
                        move: 5,
                        attack: 4,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    }
                },
                {
                    level: 5,
                    normal: {
                        health: 12,
                        move: 4,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 15,
                        move: 5,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 6,
                    normal: {
                        health: 14,
                        move: 5,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 6,
                        attack: 4,
                        attributes: [
                            "%retaliate% 3"
                        ]
                    }
                },
                {
                    level: 7,
                    normal: {
                        health: 18,
                        move: 5,
                        attack: 3,
                        attributes: [
                            "%retaliate% 2"
                        ]
                    },
                    elite: {
                        health: 18,
                        move: 6,
                        attack: 5,
                        attributes: [
                            "%retaliate% 4"
                        ]
                    }
                }
            ]
        },
        "Human Commander": {
            edition: "FC",
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "6xC",
                    move: 2,
                    attack: 4,
                    special1: [
                        "%move% + 0, %attack% + 0",
                        "Summon City Guard"
                    ],
                    special2: [
                        "Summon City Archer",
                        "%move% - 1, %shield% 1",
                        "Affect all adjacent allies"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%shield% 2"
                    ]
                },
                {
                    level: 1,
                    health: "8xC",
                    move: 3,
                    attack: 4,
                    special1: [
                        "%move% + 0, %attack% + 0",
                        "Summon City Guard"
                    ],
                    special2: [
                        "Summon City Archer",
                        "%move% - 1, %shield% 1",
                        "Affect all adjacent allies"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%shield% 2"
                    ]
                },
                {
                    level: 2,
                    health: "10xC",
                    move: 3,
                    attack: 5,
                    special1: [
                        "%move% + 0, %attack% + 0",
                        "Summon City Guard"
                    ],
                    special2: [
                        "Summon City Archer",
                        "%move% - 1, %shield% 1",
                        "Affect all adjacent allies"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%shield% 2"
                    ]
                },
                {
                    level: 3,
                    health: "11xC",
                    move: 4,
                    attack: 5,
                    special1: [
                        "%move% + 0, %attack% + 0",
                        "Summon City Guard"
                    ],
                    special2: [
                        "Summon City Archer",
                        "%move% - 1, %shield% 2",
                        "Affect all adjacent allies"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%shield% 3"
                    ]
                },
                {
                    level: 4,
                    health: "13xC",
                    move: 4,
                    attack: 6,
                    special1: [
                        "%move% + 0, %attack% + 0",
                        "Summon City Guard"
                    ],
                    special2: [
                        "Summon City Archer",
                        "%move% - 1, %shield% 2",
                        "Affect all adjacent allies"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%shield% 3"
                    ]
                },
                {
                    level: 5,
                    health: "14xC",
                    move: 4,
                    attack: 6,
                    special1: [
                        "%move% + 0, %attack% + 0",
                        "Summon City Guard"
                    ],
                    special2: [
                        "Summon City Archer",
                        "%move% - 1, %shield% 2",
                        "Affect all adjacent allies"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%shield% 4"
                    ]
                },
                {
                    level: 6,
                    health: "17xC",
                    move: 4,
                    attack: 7,
                    special1: [
                        "%move% + 0, %attack% + 0",
                        "Summon City Guard"
                    ],
                    special2: [
                        "Summon City Archer",
                        "%move% - 1, %shield% 2",
                        "Affect all adjacent allies"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%shield% 4"
                    ]
                },
                {
                    level: 7,
                    health: "20xC",
                    move: 5,
                    attack: 8,
                    special1: [
                        "%move% + 0, %attack% + 0",
                        "Summon City Guard"
                    ],
                    special2: [
                        "Summon City Archer",
                        "%move% - 1, %shield% 3",
                        "Affect all adjacent allies"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%poison%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%shield% 4"
                    ]
                }
            ]
        },
        "Valrath Commander": {
            edition: "FC",
            deck: "Boss",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "10xC",
                    move: 2,
                    attack: 3,
                    range: 3,
                    special1: [
                        "Summon Valrath Tracker",
                        "%move% - 1, %heal% 2",
                        "Affect all adjacent allies"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "Summon Valrath",
                        "Savage"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%wound%"
                    ]
                },
                {
                    level: 1,
                    health: "12xC",
                    move: 2,
                    attack: 4,
                    range: 3,
                    special1: [
                        "Summon Valrath Tracker",
                        "%move% - 1, %heal% 2",
                        "Affect all adjacent allies"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "Summon Valrath",
                        "Savage"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%wound%"
                    ]
                },
                {
                    level: 2,
                    health: "15xC",
                    move: 3,
                    attack: 4,
                    range: 3,
                    special1: [
                        "Summon Valrath Tracker",
                        "%move% - 1, %heal% 3",
                        "Affect all adjacent allies"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "Summon Valrath",
                        "Savage"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%wound%"
                    ]
                },
                {
                    level: 3,
                    health: "18xC",
                    move: 3,
                    attack: 5,
                    range: 3,
                    special1: [
                        "Summon Valrath Tracker",
                        "%move% - 1, %heal% 3",
                        "Affect all adjacent allies"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "Summon Valrath",
                        "Savage"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%wound%, %poison%"
                    ]
                },
                {
                    level: 4,
                    health: "21xC",
                    move: 3,
                    attack: 5,
                    range: 4,
                    special1: [
                        "Summon Valrath Tracker",
                        "%move% - 1, %heal% 4",
                        "Affect all adjacent allies"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "Summon Valrath",
                        "Savage"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%wound%, %poison%"
                    ]
                },
                {
                    level: 5,
                    health: "24xC",
                    move: 3,
                    attack: 6,
                    range: 4,
                    special1: [
                        "Summon Valrath Tracker",
                        "%move% - 1, %heal% 4",
                        "Affect all adjacent allies"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "Summon Valrath",
                        "Savage"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%wound%, %poison%"
                    ]
                },
                {
                    level: 6,
                    health: "28xC",
                    move: 4,
                    attack: 6,
                    range: 4,
                    special1: [
                        "Summon Valrath Tracker",
                        "%move% - 1, %heal% 4",
                        "Affect all adjacent allies"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "Summon Valrath",
                        "Savage"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%wound%, %poison%"
                    ]
                },
                {
                    level: 7,
                    health: "33xC",
                    move: 4,
                    attack: 7,
                    range: 5,
                    special1: [
                        "Summon Valrath Tracker",
                        "%move% - 1, %heal% 5",
                        "Affect all adjacent allies"
                    ],
                    special2: [
                        "%move% + 0",
                        "%attack% + 0",
                        "Summon Valrath",
                        "Savage"
                    ],
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%"
                    ],
                    attributes: [
                        "%wound%, %poison%"
                    ]
                }
            ]
        },
        "Manifestation of Corruption": {
            edition: "FC",
            deck: "Manifestation of Corruption",
            count: 1,
            levels: [
                {
                    level: 0,
                    health: "22xC",
                    move: 0,
                    attack: 5,
                    range: 3,
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%",
                        "%poison%"
                    ],
                    notes: "Play top two cards, using the first card as initiative. Perform the bottom action of the first card, then the top action of the second card."
                },
                {
                    level: 1,
                    health: "27xC",
                    move: 0,
                    attack: 5,
                    range: 4,
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%",
                        "%poison%"
                    ],
                    notes: "Play top two cards, using the first card as initiative. Perform the bottom action of the first card, then the top action of the second card."
                },
                {
                    level: 2,
                    health: "32xC",
                    move: 0,
                    attack: 6,
                    range: 4,
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%",
                        "%poison%"
                    ],
                    notes: "Play top two cards, using the first card as initiative. Perform the bottom action of the first card, then the top action of the second card."
                },
                {
                    level: 3,
                    health: "38xC",
                    move: 0,
                    attack: 6,
                    range: 5,
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%",
                        "%poison%"
                    ],
                    notes: "Play top two cards, using the first card as initiative. Perform the bottom action of the first card, then the top action of the second card."
                },
                {
                    level: 4,
                    health: "44xC",
                    move: 0,
                    attack: 7,
                    range: 5,
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%",
                        "%poison%"
                    ],
                    notes: "Play top two cards, using the first card as initiative. Perform the bottom action of the first card, then the top action of the second card."
                },
                {
                    level: 5,
                    health: "49xC",
                    move: 0,
                    attack: 7,
                    range: 6,
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%",
                        "%poison%"
                    ],
                    notes: "Play top two cards, using the first card as initiative. Perform the bottom action of the first card, then the top action of the second card."
                },
                {
                    level: 6,
                    health: "56xC",
                    move: 0,
                    attack: 8,
                    range: 6,
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%",
                        "%poison%"
                    ],
                    notes: "Play top two cards, using the first card as initiative. Perform the bottom action of the first card, then the top action of the second card."
                },
                {
                    level: 7,
                    health: "65xC",
                    move: 0,
                    attack: 8,
                    range: 7,
                    immunities: [
                        "%immobilize%",
                        "%muddle%",
                        "%disarm%",
                        "%curse%",
                        "%wound%",
                        "%stun%",
                        "%poison%"
                    ],
                    notes: "Play top two cards, using the first card as initiative. Perform the bottom action of the first card, then the top action of the second card."
                }
            ]
        }
    },
    scenarios: {
        "#1 Black Barrow": {
            monsters: [
                "Bandit Guard",
                "Bandit Archer",
                "Living Bones"
            ]
        },
        "#2 Barrow Lair": {
            monsters: [
                "Bandit Archer",
                "Bandit Commander",
                "Living Bones",
                "Living Corpse"
            ]
        },
        "#3 Inox Encampment": {
            monsters: [
                "Inox Guard",
                "Inox Archer",
                "Inox Shaman"
            ]
        },
        "#4 Crypt of the Damned": {
            monsters: [
                "Living Bones",
                "Bandit Archer",
                "Cultist",
                "Earth Demon",
                "Wind Demon"
            ]
        },
        "#5 Ruinous Crypt": {
            monsters: [
                "Cultist",
                "Living Bones",
                "Night Demon",
                "Flame Demon",
                "Frost Demon"
            ]
        },
        "#6 Decaying Crypt": {
            monsters: [
                "Living Bones",
                "Living Corpse",
                "Living Spirit"
            ]
        },
        "#7 Vibrant Grotto": {
            monsters: [
                "Forest Imp",
                "Cave Bear",
                "Inox Shaman",
                "Earth Demon"
            ]
        },
        "#8 Gloomhaven Warehouse": {
            monsters: [
                "Living Bones",
                "Living Corpse",
                "Inox Bodyguard"
            ]
        },
        "#9 Diamond Mine": {
            monsters: [
                "Hound",
                "Vermling Scout",
                "Merciless Overseer"
            ]
        },
        "#10 Plane of Elemental Power": {
            monsters: [
                "Flame Demon",
                "Earth Demon",
                "Sun Demon"
            ]
        },
        "#11 Gloomhaven Square A": {
            monsters: [
                "Living Bones",
                "Living Corpse",
                "City Guard",
                "City Archer",
                "Captain of the Guard"
            ]
        },
        "#12 Gloomhaven Square B": {
            monsters: [
                "Living Bones",
                "Living Corpse",
                "Cultist",
                "City Guard",
                "City Archer",
                "Jekserah"
            ]
        },
        "#13 Temple of the Seer": {
            monsters: [
                "Stone Golem",
                "Cave Bear",
                "Living Spirit",
                "Spitting Drake"
            ]
        },
        "#14 Frozen Hollow": {
            monsters: [
                "Hound",
                "Living Spirit",
                "Frost Demon"
            ]
        },
        "#15 Shrine of Strength": {
            monsters: [
                "Stone Golem",
                "Savvas Icestorm",
                "Frost Demon",
                "Wind Demon",
                "Harrower Infester"
            ]
        },
        "#16 Mountain Pass": {
            monsters: [
                "Earth Demon",
                "Wind Demon",
                "Inox Guard",
                "Inox Archer"
            ]
        },
        "#17 Lost Island": {
            monsters: [
                "Vermling Scout",
                "Vermling Shaman",
                "Cave Bear"
            ]
        },
        "#18 Abandoned Sewers": {
            monsters: [
                "Giant Viper",
                "Ooze",
                "Vermling Scout"
            ]
        },
        "#19 Forgotten Crypt": {
            monsters: [
                "Cultist",
                "Living Bones",
                "Living Spirit",
                "Living Corpse"
            ],
            special: [
                "Escort: Hail"
            ]
        },
        "#20 Necromancer's Sanctum": {
            monsters: [
                "Living Bones",
                "Cultist",
                "Night Demon",
                "Living Corpse",
                "Jekserah"
            ]
        },
        "#21 Infernal Throne": {
            monsters: [
                "Sun Demon",
                "Frost Demon",
                "Night Demon",
                "Wind Demon",
                "Earth Demon",
                "Flame Demon",
                "Prime Demon"
            ]
        },
        "#22 Temple of the Elements": {
            monsters: [
                "Living Bones",
                "Cultist",
                "Earth Demon",
                "Flame Demon",
                "Frost Demon",
                "Wind Demon"
            ]
        },
        "#23 Deep Ruins": {
            monsters: [
                "Stone Golem",
                "Ancient Artillery",
                "Living Bones",
                "Living Spirit"
            ]
        },
        "#24 Echo Chamber": {
            monsters: [
                "Rending Drake",
                "Ooze",
                "Living Spirit"
            ]
        },
        "#25 Icecrag Ascent": {
            monsters: [
                "Hound",
                "Rending Drake",
                "Spitting Drake"
            ]
        },
        "#26 Ancient Cistern": {
            monsters: [
                "Living Corpse",
                "Ooze",
                "Night Demon",
                "Black Imp"
            ]
        },
        "#27 Ruinous Rift": {
            monsters: [
                "Night Demon",
                "Wind Demon",
                "Frost Demon",
                "Sun Demon",
                "Earth Demon",
                "Flame Demon"
            ]
        },
        "#28 Outer Ritual Chamber": {
            monsters: [
                "Living Corpse",
                "Cultist",
                "Living Bones",
                "Night Demon",
                "Sun Demon"
            ],
            special: [
                "Living Corpse: +2 levels"
            ]
        },
        "#29 Sanctuary of Gloom": {
            monsters: [
                "Living Bones",
                "Living Corpse",
                "Living Spirit",
                "Black Imp"
            ]
        },
        "#30 Shrine of the Depths": {
            monsters: [
                "Ooze",
                "Lurker",
                "Deep Terror"
            ]
        },
        "#31 Plane of the Night": {
            monsters: [
                "Deep Terror",
                "Night Demon",
                "Black Imp"
            ]
        },
        "#32 Decrepit Wood": {
            monsters: [
                "Harrower Infester",
                "Giant Viper",
                "Deep Terror",
                "Black Imp"
            ]
        },
        "#33 Savvas Armory": {
            monsters: [
                "Savvas Icestorm",
                "Savvas Lavaflow",
                "Frost Demon",
                "Flame Demon",
                "Wind Demon",
                "Earth Demon"
            ]
        },
        "#34 Scorched Summit": {
            monsters: [
                "Rending Drake",
                "Spitting Drake",
                "Elder Drake"
            ]
        },
        "#35 Gloomhaven Battlements A": {
            monsters: [
                "Flame Demon",
                "Frost Demon",
                "Earth Demon",
                "Wind Demon",
                "City Archer",
                "City Guard",
                "Captain of the Guard"
            ]
        },
        "#36 Gloomhaven Battlements B": {
            monsters: [
                "Flame Demon",
                "Frost Demon",
                "Earth Demon",
                "Wind Demon",
                "City Archer",
                "Prime Demon"
            ]
        },
        "#37 Doom Trench": {
            monsters: [
                "Lurker",
                "Deep Terror",
                "Harrower Infester"
            ]
        },
        "#38 Slave Pens": {
            monsters: [
                "Inox Guard",
                "Inox Archer",
                "Inox Shaman",
                "Stone Golem"
            ]
        },
        "#39 Treacherous Divide": {
            monsters: [
                "Cave Bear",
                "Frost Demon",
                "Spitting Drake",
                "Cultist",
                "Living Bones"
            ]
        },
        "#40 Ancient Defense Network": {
            monsters: [
                "Living Corpse",
                "Flame Demon",
                "Cave Bear",
                "Stone Golem",
                "Forest Imp"
            ]
        },
        "#41 Timeworn Tomb": {
            monsters: [
                "Ancient Artillery",
                "Living Corpse",
                "Living Spirit",
                "Stone Golem"
            ]
        },
        "#42 Realm of the Voice": {
            monsters: [
                "Night Demon",
                "Wind Demon",
                "Living Spirit"
            ]
        },
        "#43 - Drake Nest": {
            monsters: [
                "Flame Demon",
                "Rending Drake",
                "Spitting Drake"
            ]
        },
        "#44 Tribal Assault": {
            monsters: [
                "Inox Guard",
                "Inox Archer",
                "Hound",
                "Inox Shaman"
            ]
        },
        "#45 Rebel Swamp": {
            monsters: [
                "City Guard",
                "City Archer",
                "Hound"
            ]
        },
        "#46 Nightmare Peak": {
            monsters: [
                "Night Demon",
                "Frost Demon",
                "Wind Demon",
                "Savvas Icestorm",
                "Winged Horror"
            ]
        },
        "#47 Lair of the Unseeing Eye": {
            monsters: [
                "Lurker",
                "Deep Terror",
                "Harrower Infester",
                "The Sightless Eye"
            ]
        },
        "#48 - Shadow Weald": {
            monsters: [
                "Forest Imp",
                "Earth Demon",
                "Harrower Infester",
                "Dark Rider"
            ]
        },
        "#49 Rebel's Stand": {
            monsters: [
                "Giant Viper",
                "City Archer",
                "City Guard",
                "Ancient Artillery"
            ],
            special: [
                "Ancient Artillery: Hx2"
            ]
        },
        "#50 Ghost Fortress": {
            monsters: [
                "Night Demon",
                "Sun Demon",
                "Earth Demon"
            ]
        },
        "#51 The Void": {
            monsters: [
                "The Gloom"
            ]
        },
        "#52 Noxious Cellar": {
            monsters: [
                "Spitting Drake",
                "Ooze",
                "Vermling Scout",
                "Living Corpse",
                "Vermling Shaman"
            ]
        },
        "#53 Crypt Basement": {
            monsters: [
                "Ooze",
                "Living Corpse",
                "Living Spirit",
                "Living Bones",
                "Giant Viper"
            ]
        },
        "#54 Palace of Ice": {
            monsters: [
                "Cave Bear",
                "Living Spirit",
                "Frost Demon",
                "Harrower Infester"
            ]
        },
        "#55 Foggy Thicket": {
            monsters: []
        },
        "#56 Bandit's Wood": {
            monsters: [
                "Hound",
                "Bandit Archer",
                "Rending Drake",
                "Bandit Guard"
            ]
        },
        "#57 Investigation": {
            monsters: [
                "City Guard",
                "City Archer",
                "Hound"
            ],
            special: [
                "Harrower Infester: +1 level"
            ]
        },
        "#58 Bloody Shack": {
            monsters: [
                "Earth Demon",
                "Harrower Infester",
                "Black Imp",
                "City Guard"
            ],
            special: [
                "City Guard: +1 level"
            ]
        },
        "#59 Forgotten Grove": {
            monsters: [
                "Cave Bear",
                "Hound",
                "Forest Imp"
            ]
        },
        "#60 Alchemy Lab": {
            monsters: [
                "Ooze",
                "Giant Viper",
                "Hound",
                "Rending Drake",
                "Spitting Drake"
            ]
        },
        "#61 Fading Lighthouse": {
            monsters: [
                "Ooze",
                "Giant Viper",
                "Frost Demon",
                "Flame Demon"
            ]
        },
        "#62 Pit of Souls": {
            monsters: [
                "Living Bones",
                "Living Spirit"
            ]
        },
        "#63 Magma Pit": {
            monsters: [
                "Vermling Scout",
                "Inox Guard",
                "Inox Archer",
                "Flame Demon"
            ]
        },
        "#64 Underwater Lagoon": {
            monsters: [
                "Ooze",
                "Forest Imp",
                "Rending Drake"
            ]
        },
        "#65 Sulfur Mine": {
            monsters: [
                "Vermling Scout",
                "Hound",
                "Inox Shaman"
            ]
        },
        "#66 Clockwork Cove": {
            monsters: [
                "Ooze",
                "Ancient Artillery",
                "Living Spirit",
                "Stone Golem"
            ]
        },
        "#67 Arcane Library": {
            monsters: [
                "Forest Imp",
                "Cave Bear",
                "Stone Golem"
            ],
            special: [
                "Elite Stone Golem: +1 level, HPxC"
            ]
        },
        "#68 Toxic Moor": {
            monsters: [
                "Rending Drake",
                "Black Imp",
                "Giant Viper",
                "Living Corpse"
            ]
        },
        "#69 Well of the Unfortunate": {
            monsters: [
                "Vermling Scout",
                "Vermling Shaman",
                "Forest Imp",
                "Stone Golem",
                "Living Spirit"
            ]
        },
        "#70 Chained Isle": {
            monsters: [
                "Night Demon",
                "Wind Demon",
                "Living Spirit"
            ]
        },
        "#71 Windswept Highlands": {
            monsters: [
                "Spitting Drake",
                "Wind Demon",
                "Sun Demon"
            ]
        },
        "#72 Oozing Grove": {
            monsters: [
                "Ooze",
                "Forest Imp",
                "Giant Viper"
            ]
        },
        "#73 Rockslide Ridge": {
            monsters: [
                "Hound",
                "Inox Archer",
                "Ancient Artillery",
                "Inox Guard",
                "Inox Shaman"
            ]
        },
        "#74 Merchant Ship": {
            monsters: [
                "Bandit Guard",
                "Bandit Archer",
                "Lurker",
                "Deep Terror"
            ]
        },
        "#75 Overgrown Graveyard": {
            monsters: [
                "Living Bones",
                "Living Corpse",
                "Living Spirit"
            ]
        },
        "#76 Harrower Hive": {
            monsters: [
                "Giant Viper",
                "Living Bones",
                "Night Demon",
                "Harrower Infester"
            ]
        },
        "#77 Vault of Secrets": {
            monsters: [
                "City Guard",
                "City Archer",
                "Stone Golem",
                "Hound"
            ]
        },
        "#78 Sacrifice Pit": {
            monsters: [
                "Bandit Guard",
                "Bandit Archer",
                "Cultist",
                "Living Bones",
                "Black Imp"
            ]
        },
        "#79 Lost Temple": {
            monsters: [
                "Stone Golem",
                "Giant Viper",
                "The Betrayer"
            ]
        },
        "#80 Vigil Keep": {
            monsters: [
                "City Guard",
                "City Archer",
                "Ancient Artillery",
                "Hound"
            ]
        },
        "#81 Temple of the Eclipse": {
            monsters: [
                "Night Demon",
                "Sun Demon",
                "Stone Golem",
                "Ancient Artillery",
                "The Colorless"
            ]
        },
        "#82 Burning Mountain": {
            monsters: [
                "Earth Demon",
                "Flame Demon",
                "Stone Golem"
            ]
        },
        "#83 Shadows Within": {
            monsters: [
                "Hound",
                "Cultist",
                "Living Bones",
                "Living Spirit",
                "Flame Demon"
            ]
        },
        "#84 Crystalline Cave": {
            monsters: [
                "Flame Demon",
                "Frost Demon",
                "Earth Demon"
            ]
        },
        "#85 Sun Temple": {
            monsters: [
                "Hound",
                "Black Imp",
                "Night Demon",
                "Sun Demon"
            ]
        },
        "#86 Harried Village": {
            monsters: [
                "Cave Bear",
                "Vermling Shaman",
                "Vermling Scout",
                "Lurker"
            ]
        },
        "#87 Corrupted Cove": {
            monsters: [
                "Lurker",
                "Deep Terror",
                "Ooze",
                "Black Imp"
            ]
        },
        "#88 Plane of Water": {
            monsters: [
                "Frost Demon",
                "Ooze",
                "Lurker"
            ]
        },
        "#89 Syndicate Hideout": {
            monsters: [
                "Bandit Archer",
                "Bandit Guard",
                "Cultist",
                "Giant Viper"
            ]
        },
        "#90 Demonic Rift": {
            monsters: [
                "Earth Demon",
                "Wind Demon",
                "Night Demon",
                "Living Spirit"
            ]
        },
        "#91 Wild Melee": {
            monsters: [
                "Cave Bear",
                "Hound",
                "Bandit Guard",
                "Bandit Archer",
                "Living Spirit"
            ]
        },
        "#92 Back Alley Brawl": {
            monsters: [
                "Bandit Guard",
                "City Guard",
                "Inox Guard",
                "Bandit Archer",
                "City Archer",
                "Savvas Icestorm",
                "Frost Demon",
                "Wind Demon"
            ]
        },
        "#93 Sunken Vessel": {
            monsters: [
                "Lurker",
                "Frost Demon",
                "Living Spirit"
            ]
        },
        "#94 Vermling Nest": {
            monsters: [
                "Hound",
                "Vermling Scout",
                "Vermling Shaman",
                "Cave Bear"
            ]
        },
        "#95 Payment Due": {
            monsters: [
                "Deep Terror",
                "Flame Demon",
                "Earth Demon",
                "Savvas Lavaflow"
            ]
        },
        "#96 Unexpected Visitors": {
            edition: "FC",
            monsters: [
                "Earth Demon",
                "Flame Demon",
                "Frost Demon",
                "Wind Demon"
            ]
        },
        "#97 Lore Untold": {
            edition: "FC",
            monsters: [
                "Black Imp",
                "Living Bones",
                "Living Corpse"
            ]
        },
        "#98 Past In Flames": {
            edition: "FC",
            monsters: [
                "Ancient Artillery",
                "Bandit Archer",
                "Bandit Guard",
                "Spitting Drake"
            ]
        },
        "#99 Aftershocks": {
            edition: "FC",
            monsters: [
                "Black Imp",
                "Cultist",
                "Deep Terror"
            ]
        },
        "#100 Shifting Gears": {
            edition: "FC",
            monsters: [
                "Stone Golem"
            ]
        },
        "#101 Shrouded Crypt": {
            edition: "FC",
            monsters: [
                "Rending Drake",
                "Spitting Drake"
            ]
        },
        "#102 Bazaar of Knowledge": {
            edition: "FC",
            monsters: []
        },
        "#103 Where It Is Needed": {
            edition: "FC",
            special: [
                "Escort: Caravan",
                "2x(C+L)+3"
            ]
        },
        "#104 A Gaping Wound": {
            edition: "FC",
            monsters: [
                "Harrower Infester",
                "Lurker",
                "Spitting Drake"
            ],
            special: [
                "Escort: Hail",
                "6+2xL"
            ]
        },
        "#105 Monstrosities of a Cult": {
            edition: "FC",
            monsters: [
                "Bandit Guard",
                "Valrath Tracker"
            ]
        },
        "#106 Intricate Work": {
            edition: "FC",
            monsters: [
                "Aesther Scout"
            ]
        },
        "#107 Mechanical Genius": {
            edition: "FC",
            monsters: []
        },
        "#108 Prologue to the End": {
            edition: "FC",
            monsters: [
                "City Archer",
                "City Guard",
                "Valrath Savage",
                "Valrath Tracker",
                "Human Commander",
                "Valrath Commander"
            ]
        },
        "#109 Epilogue of a War": {
            edition: "FC",
            monsters: [
                "City Archer",
                "City Guard",
                "Valrath Savage",
                "Valrath Tracker"
            ]
        },
        "#110 A Circular Solution": {
            edition: "FC",
            monsters: [
                "City Guard",
                "Earth Demon",
                "Flame Demon",
                "Savvas Lavaflow",
                "Valrath Tracker",
                "Vermling Shaman"
            ],
            special: [
                "Valrath Tracker: %target% C, %pierce% 10, Vermling Shaman: CxH/2, City Guard: CxH/2, Savvas Lavaflow: CxH/2"
            ]
        },
        "#111 The Shackles Loosen": {
            edition: "FC",
            monsters: [
                "Aesther Ashblade",
                "Aesther Scout",
                "Black Imp",
                "Night Demon"
            ],
            special: [
                "Aesther Ashblade: HxC"
            ]
        },
        "#112 The Bottom of It": {
            edition: "FC",
            monsters: [
                "Ancient Artillery",
                "Living Bones",
                "Stone Golem"
            ]
        },
        "#113 The Lost Thread": {
            edition: "FC",
            monsters: [
                "Stone Golem"
            ],
            special: [
                "Escort: Naaret",
                "4+2xL"
            ]
        },
        "#114 Ink Not Yet Dry": {
            edition: "FC",
            monsters: [
                "Aesther Ashblade",
                "Aesther Scout",
                "Wind Demon"
            ],
            special: [
                "Escort: Hail",
                "4+2xL"
            ]
        },
        "#115 Future Uncertain": {
            edition: "FC",
            monsters: [
                "Aesther Ashblade",
                "Aesther Scout",
                "Black Imp",
                "Valrath Savage",
                "Valrath Tracker",
                "Manifestation of Corruption"
            ],
            special: [
                "Manifestation of Corruption: Manual Deck"
            ]
        }
    },
    sections: {
        "#1 Volcanic Wasteland": {
            edition: "FC",
            monsters: [
                "Flame Demon"
            ],
            special: [
                "Objective: Altar of Wildfire",
                "C+L+1"
            ]
        },
        "#4 Barge Ablaze": {
            edition: "FC",
            monsters: [
                "Bandit Archer",
                "Bandit Guard",
                "Spitting Drake"
            ]
        },
        "#6 Kennel of Things": {
            edition: "FC",
            monsters: [
                "Bandit Guard",
                "Valrath Tracker",
                "Wolf-Viper Abomination"
            ]
        },
        "#8 A Life Taken, a Life Given": {
            edition: "FC",
            monsters: [
                "Valrath Savage"
            ]
        },
        "#13 Shrine of Ashtar": {
            edition: "FC",
            monsters: [
                "Ancient Artillery",
                "Earth Demon",
                "Flame Demon",
                "Savvas Lavaflow"
            ]
        },
        "#14 The Floor Moves": {
            edition: "FC",
            monsters: [
                "Living Spirit",
                "Stone Golem"
            ]
        },
        "#15 Trash Dump": {
            edition: "FC",
            monsters: [
                "Vermling Scout",
                "Vermling Shaman"
            ]
        },
        "#17 Escape is Not So Easy": {
            edition: "FC",
            monsters: [
                "Aesther Ashblade",
                "Aesther Scout",
                "Wind Demon"
            ]
        },
        "#22 A Rumbling Sound": {
            edition: "FC",
            monsters: [
                "Living Spirit"
            ]
        },
        "#23 Narrow Vault": {
            edition: "FC",
            monsters: [
                "Living Bones",
                "Living Corpse"
            ]
        },
        "#24 Withered Grove": {
            edition: "FC",
            monsters: [
                "Earth Demon"
            ],
            special: [
                "Objective: Altar of Rot",
                "Cx2+L+4"
            ]
        },
        "#26 Secret Library": {
            edition: "FC",
            monsters: [
                "Ancient Artillery"
            ]
        },
        "#28 A Bear of a Drake": {
            edition: "FC",
            monsters: [
                "Bandit Guard",
                "Valrath Tracker",
                "Bear-Drake Abomination"
            ]
        },
        "#29 Serene Path": {
            edition: "FC",
            monsters: [
                "Valrath Savage"
            ]
        },
        "#30 Seal of Attraction": {
            edition: "FC",
            monsters: [
                "Deep Terror",
                "Living Bones"
            ]
        },
        "#32 Flaming Caravel": {
            edition: "FC",
            monsters: [
                "Bandit Archer",
                "Bandit Guard",
                "Spitting Drake"
            ]
        },
        "#34 Frozen Cave": {
            edition: "FC",
            monsters: [
                "Frost Demon"
            ],
            special: [
                "Objective: Altar of Blizzards",
                "Cx2+L"
            ]
        },
        "#35 Shrine of Thelija": {
            edition: "FC",
            monsters: [
                "Ancient Artillery",
                "Frost Demon",
                "Savvas Icestorm",
                "Wind Demon"
            ]
        },
        "#37 Aiding Diamara": {
            edition: "FC",
            special: [
                "Bosses use the same deck"
            ]
        },
        "#39 Another Revolution": {
            edition: "FC",
            monsters: [
                "Ancient Artillery"
            ]
        },
        "#40 Venerated Tomb": {
            edition: "FC",
            monsters: [
                "Living Bones",
                "Living Corpse"
            ]
        },
        "#41 A Sphere of Nightmares": {
            edition: "FC",
            monsters: [
                "Living Spirit",
                "Night Demon"
            ],
            special: [
                "Objective: Altar",
                "20+L+2xC"
            ]
        },
        "#42 Collapsed Atrium": {
            edition: "FC",
            monsters: [
                "Living Spirit"
            ]
        },
        "#46 Quick Turn": {
            edition: "FC",
            monsters: [
                "Living Spirit"
            ]
        },
        "#47 Hall of Horrors": {
            edition: "FC",
            monsters: [
                "Black Imp",
                "Deep Terror",
                "Harrower Infester"
            ]
        },
        "#50 Slow Turn": {
            edition: "FC",
            monsters: [
                "Living Spirit"
            ]
        },
        "#60 Seal of Repulsion": {
            edition: "FC",
            monsters: [
                "Living Corpse",
                "Living Spirit"
            ]
        },
        "#64 Flooded Catacombs": {
            edition: "FC",
            monsters: [
                "Living Bones",
                "Living Corpse"
            ]
        },
        "#67 Branching Alleyway": {
            edition: "FC",
            monsters: [
                "Aesther Scout",
                "Black Imp",
                "Night Demon"
            ]
        },
        "#71 Quiet Rotation": {
            edition: "FC",
            monsters: [
                "Living Spirit",
                "Stone Golem"
            ]
        },
        "#72 Clinging Fog": {
            edition: "FC",
            monsters: [
                "Living Spirit",
                "Night Demon"
            ]
        },
        "#73 Reflecting Road": {
            edition: "FC",
            monsters: [
                "Valrath Savage"
            ]
        },
        "#81 Narrow Street": {
            edition: "FC",
            monsters: [
                "Aesther Scout",
                "Black Imp",
                "Night Demon"
            ]
        },
        "#84 Gateway to the Firmament": {
            edition: "FC",
            monsters: [
                "Aesther Ashblade",
                "Earth Demon",
                "Flame Demon",
                "Frost Demon",
                "Savvas Icestorm",
                "Savvas Lavaflow"
            ]
        },
        "#90 Misty Glade": {
            edition: "FC",
            monsters: [
                "Valrath Savage"
            ]
        },
        "#92 Nesting Grounds": {
            edition: "FC",
            monsters: [
                "Vermling Scout",
                "Vermling Shaman"
            ]
        },
        "#93 Rays of Sunlight": {
            edition: "FC",
            monsters: [
                "Living Spirit",
                "Night Demon"
            ],
            special: [
                "Objective: Altar",
                "5+L+2xC"
            ]
        },
        "#94 Seal of Reanimation": {
            edition: "FC",
            monsters: [
                "Living Corpse",
                "Living Spirit"
            ]
        },
        "#95 The Horde's Kitchen": {
            edition: "FC",
            monsters: [
                "Vermling Scout"
            ]
        },
        "#96 Haunted Treasury": {
            edition: "FC",
            monsters: [
                "Living Spirit"
            ]
        },
        "#100 Sekhem Fountain": {
            edition: "FC",
            monsters: [
                "Black Imp",
                "Cultist",
                "Deep Terror"
            ]
        },
        "#103 The Thorns of Hate": {
            edition: "FC",
            monsters: [
                "Earth Demon",
                "Forest Imp",
                "Wind Demon"
            ]
        },
        "#106 Strangler's Park": {
            edition: "FC",
            monsters: [
                "Harrower Infester",
                "Vermling Shaman"
            ]
        },
        "#108 Seal of Distortion": {
            edition: "FC",
            monsters: [
                "Deep Terror",
                "Living Bones"
            ]
        },
        "#112 Access Hall": {
            edition: "FC",
            monsters: [
                "Aesther Scout"
            ]
        },
        "#119 A Multitude of Tomes": {
            edition: "FC",
            monsters: [
                "Black Imp",
                "Deep Terror"
            ]
        },
        "#123 Lingering Darkness": {
            edition: "FC",
            monsters: [
                "Living Spirit",
                "Night Demon"
            ]
        },
        "#126 Training Maneuvers": {
            edition: "FC",
            monsters: [
                "Vermling Scout",
                "Vermling Shaman"
            ]
        },
        "#127 Guarded Nursery": {
            edition: "FC",
            monsters: [
                "Vermling Scout",
                "Vermling Shaman"
            ]
        },
        "#129 Fighting Dirty": {
            edition: "FC",
            monsters: [
                "Ooze"
            ]
        },
        "#132 Near the Gates": {
            edition: "FC",
            monsters: [
                "Aesther Scout",
                "Black Imp",
                "Night Demon"
            ]
        },
        "#133 A Secret Floor": {
            edition: "FC",
            monsters: [
                "Ancient Artillery"
            ]
        },
        "#134 Clawing at Victory": {
            edition: "FC",
            monsters: [
                "Lurker"
            ]
        }
    }
};