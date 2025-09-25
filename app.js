const shoppingList = [];

// TASK 1 complete

function addItem(anyparam) {
	if (!shoppingList.includes(anyparam)) shoppingList.push(anyparam);
	return shoppingList;
}

console.log(addItem("ji"));
console.log(addItem("lo"));
console.log(shoppingList);

function removeLastItem() {
	console.log("this is being called");
	//shoppingList.pop();
	return shoppingList / pop();
}
//removeLastItem
//console.log(removeLastItem);

// console.log(shoppingList.pop())
console.log(shoppingList);

function displayList() {
	console.log(shoppingList);
}

function filterItems(searchTerm) {
	//terrible way to do this
	// return a new aaray that has the searchTerm
	const newarray = shoppingList.filter((searchT) => searchT === searchTerm);
	//just return the elements in the array
	return newarray.forEach((element) => console.log(element));
}
