// DEMO

const arr = ["Men", 22]

console.log(arr[0])
console.log(arr[1])

console.log(arr[10])

arr.push("Wed")
arr.push(2000)

console.log(arr)

const newArr = arr.slice(1, 3)

console.log('newArr', newArr)

console.log(arr.indexOf(22))



// * Exercise
// ? Create an array that contain 4 foods that you like. Then complete these following tasks.

// ? 1. Locate your most favorite food in the array. Print its array index to the console.
// ? 2. Add your 3 favorite desserts or fruits into that array. Print the result to the console.

// ? CHALLENGES: Look at the Array methods slide. Pick one method to check if your most favorite food is existed in the array or not? (hint: return as boolean)

const myFavFood = ["TomYum", "SomTum", "Salmon", "Pasta"]

console.log(myFavFood.indexOf("Salmon"))

console.log(myFavFood.indexOf("Salmon"))

myFavFood.push("Ice-cream", "Yogurt", "Orange")
console.log(myFavFood)

console.log(myFavFood.includes("Salmon"))