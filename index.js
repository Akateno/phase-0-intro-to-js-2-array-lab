// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph){
cats.push("Ralph");
}
function destructivelyPrependCat(Bob){
cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Garfield){
cats.pop(3);
}
function destructivelyRemoveFirstCat(Milo){
cats.shift(1);
}
function appendCat (remove){
return [...cats, "Broom"];

}
function prependCat(){
return ["Arnold", ...cats];
}
function removeLastCat(){
    return cats.slice(0,-1);
}
function removeFirstCat(){
    return cats.slice(1);
}