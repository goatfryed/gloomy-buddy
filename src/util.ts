export function isDefined<T>(v: T | undefined): v is T {
    return !!v;
}

export function selectRandom<T>(input: Array<T>) {
    let rng = Math.random();
    let rngInteger = Math.floor(rng * input.length);
    return input[rngInteger];
}