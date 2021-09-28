export function getRandomElement<T>(items: T[]): T{
    return items[Math.floor(Math.random()*items.length)];
}

export function getNextElement<T>(items: T[], i:number): T{
    return items[i++];
}