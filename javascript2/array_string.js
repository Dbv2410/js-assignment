let text = " Welcome to a javascript. ";
let text2 = "It is very easy to learn.";
console.log(text.length);
console.log(text.charAt(0));
var res = text.concat(text2);
console.log(res);
console.log(text.endsWith("javascript."));
console.log(text2.includes("is"));
console.log(text.indexOf("m"));
console.log(text2.match(/to/));
console.log(text2.replace(/very/,"not"));
console.log(text.slice(3,8));
console.log(text2.split(""));
console.log(text.trim(""));

//Array Methods:

let fruits = ["apple","mango","orange"];
console.log(fruits);
//console.log(fruits.copyWithin(0,1));
console.log(fruits.indexOf("apple"));
let numbers = [4,9,16,25];
console.log(numbers.map(Math.sqrt));
console.log(fruits.pop(""));
console.log(fruits.push("kiwi"));
console.log(fruits.reverse());
console.log(fruits.shift());
console.log(fruits.sort());


