let shoppingList=['fruits','belt','watch','books'];
console.log(shoppingList);
let a =prompt("enter the element");
let newshoppingList =[];
newshoppingList.push(a);
for(let i of shoppingList){
    newshoppingList.push(i);
}
console.log(newshoppingList);