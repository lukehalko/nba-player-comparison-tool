export function getRandomElement<T>(items: T[]): T{
    return items[Math.floor(Math.random()*items.length)];
}

export function handleSubmit<HTMLFormElement>(x:HTMLFormElement):boolean{
    alert(x)
    try{
        console.log(x)
    }
    catch(e){
        console.log(e)
    }
    return true
}