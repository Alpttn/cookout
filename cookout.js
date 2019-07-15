
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const uncookedFoods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

console.log(cookedFood)

    // Put the cooked food into the appropriate array
    // cookedFood.push(currentObject);

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// the following loops will work for iterating through the array
// uncookedFoods.forEach(grill)
// uncookedFoods.forEach(oneFoodItem => grill(oneFoodItem))

for(i=0; i < uncookedFoods.length; i++) {
    grill(uncookedFoods[i])
}







