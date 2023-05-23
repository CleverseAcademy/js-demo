// for(let i = 1; i <= 3; i++) {
//   console.log("hello, world")
// }

// i = i - 1
// for(let i = 3; i >= 0; i--) {
//   console.log(i)
// }


// * Loop through array
const tripLocation = ["London", "Bali", "Amsterdam", "Paris"]

// console.log(tripLocation.length)

// for(let i = 0; i < tripLocation.length; i++) {
//   console.log(tripLocation[i])
// }

// * Break keyword
// for(let i = 0; i < tripLocation.length; i++) {
//   console.log(tripLocation[i])
  
//   if(tripLocation[i] === 'Amsterdam') {
//     console.log("Found Amsterdam!")
//     break
//   }
// }


// * While loop
// let i = 1
// while(i <= 3) {
//   console.log("hello, wolrd")
//   i++
// }

// let count = 1
// while(count < 100){
//   count = count + 2
// }
// console.log(count)


for(let i = 0; i < 3; i++) {
  console.log("i", i)
  for(let j = 0; j < 3; j++){
    console.log("j", j)
  }
}

// > i 0
// > j 0
// > j 1
// > j 2
// > i 1
// > j 0
// > j 1
// > j 2
// > i 2
// > j 0
// > j 1
// > j 2


// ? Exercise: 
// ? Write a code that will loop from 0 to 15. For each loop, it will check if the current index number is odd or even, and display a message to the console.

// Example Output:
// > 0 is even
// > 1 is odd
// > 2 is even