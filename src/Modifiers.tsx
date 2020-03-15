import {GloomyData} from "./config/GloomyData";
import React, {useState} from "react";
import {ModifierCard} from "./config/GloomyCompanion/modifiers";

export function ModifierDrawer({data}: { data: GloomyData }) {
    const monsterModifierDeck = data.modifierDeckPrototype;
    const [drawnModifiers, setDrawnModifiers] = useState<Array<ModifierCard>>([]);

    const drawables = monsterModifierDeck.filter(card => !drawnModifiers.includes(card));
    const drawModifier = drawables.length && (() => {
        let rng = Math.random();
        let rngInteger = Math.floor(rng * drawables.length);
        const drawn = drawables[rngInteger];
        setDrawnModifiers([drawn, ...drawnModifiers])
    });

    const shouldShuffle = drawnModifiers.some(modifier => modifier.shuffle);
    const shuffle = () => setDrawnModifiers([]);

    return <div>
        <button disabled={!drawModifier} onClick={drawModifier || undefined}>Draw Modifier</button>
        {shouldShuffle && <button onClick={shuffle}>Shuffle</button>}
        {drawnModifiers.length > 0 && <div>{drawnModifiers[0].type}</div>}
        {drawnModifiers.length > 1 && <div>{drawnModifiers[1].type}</div>}
    </div>;
}