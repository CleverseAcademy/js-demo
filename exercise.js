// draw(n) takes in a number n, and prints the stars (*) into the console in this pattern:
// draw(5);
// *****
// *****
// *****
// *****
// *****

function _draw(n) {
  let s = ""
  for (let i = 0; i < n; i++) {
    s += "*"
  }

  for (let i = 0; i < n; i++) {
    console.log(s)
  }
}

// i = 0
function draw(n) {
  for (let i = 0; i < n; i++) {
    let s = ""

    for (let j = 0; j < i + 1; j++) {
      s += "*"
    }
    console.log(s)
  }
}

draw(5)[(-1, -2, -3)]
function filterGtNeg(val, arr) {
  // our box
  const results = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < val) {
      if (true) {
        if (true) {
          results.push(arr[i])
        }
      }
    }
  }

  return results
}

filterGtNeg(-20, [-1, -2, 2, 3, -100]) // [-1, -2]

// ["Mr Prem", "Mister Men", "Ms Prem", "Master Prem"]
function filterMale(arr) {
  // our box
  const results = []

  for (let i = 0; i < arr.length; i++) {
    const person = arr[i]
    if (person.startsWith("Mr")) {
      results.push(person)
    }
  }

  return results
}

filterGt(20, [10, 20, 30, 40]) // [30, 40]
console.log(filterMale(["Mr Prem", "Mr Bobo", "Ms Mimi"]))

// * 3
// * 5
// * 6
// * 12
// * 13
// * 28 (advanced)
// * 29 (advanced)
