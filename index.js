let shoppingList2 = [];


// TASK 1 complete

function addItem(anyparam) {

    shoppingList2.push(anyparam);
    return shoppingList2;
   
}

console.log(addItem("ji"));
console.log(addItem("lo"));
console.log(shoppingList2);

function removeLastItem() {
    
    console.log("this is being called");
    //shoppingList.pop();
    return shoppingList2.pop();

}

function displayList() {
    console.log(shoppingList2);
}




//removeLastItem
console.log(removeLastItem);

// console.log(shoppingList.pop())
console.log(shoppingList2);