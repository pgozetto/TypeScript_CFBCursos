let [a, b, c, d] = ["a", "b", "c", "d"];
let [e, f, ...rest] = ["e", "f", "g", "h", "i"];


const text: string = "Pedro Oliveira Gozetto";
const [...tArr] = text.split(" ");

console.log(a, b, c, d);
console.log(tArr);
