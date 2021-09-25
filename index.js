let cats = ["Milo","Otis","Garfield"];
const destructivelyAppendCat= (name)=>{
    cats.push(name);
    return cats;
}
const destructivelyPrependCat= (name)=>{
    cats.unshift(name);
    return cats;
}
const destructivelyRemoveLastCat=(name)=>{
    cats.pop(name);
    return cats;
}
const destructivelyRemoveFirstCat=(name)=>{
    cats.shift(name);
    return cats;
}
const appendCat=(name)=>{
    let Coolcats =[...cats];
    Coolcats.push(name);
    return Coolcats;
}
const prependCat=(name)=>{
    let Coolcats2=[...cats];
    Coolcats2.unshift(name);
    return Coolcats2;
}
const removeLastCat=(name)=>{
    let Coolcats3=[...cats];
    Coolcats3.pop(name);
    return Coolcats3
}
const removeFirstCat=(name)=>{
    let Coolcats4=[...cats];
    Coolcats4.shift(name);
    return Coolcats4;
}
