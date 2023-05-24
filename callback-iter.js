// calculator takes in inputs `a` and `b`,
// and calls `op` (callback) with `a` and `b`
// at the same parameter order.
function calculator(
  a, // input 1
  b, // input 2
  op, // cb for operation
) {
  return op(a, b);
}

calculator(10, 20, (x, y) => x * y); // 200
calculator(20, 30, (x, y) => x - y); // -10

// Basic iterator implementations:
// 1. forEach
// 2. map
// 3. filter

// forEach iterates over `inputs` and calls `cb` on each item
// in the iteration. It does not care about the return values.
function forEach(inputs, cb) {
  for (let i = 0; i < inputs.length; i++) {
    cb(inputs[i]);
  }
}

// map maps `inputs` into a result array **of equal length**.
// Each item in `inputs` is fed to `cb`, and the return value
// is assigned to the element of result array at the same index.
function map(inputs, cb) {
  const results = new Array(inputs.length);

  inputs.forEach((item, i) => {
    // Note: item is inputs[i]
    results[i] = cb(item);
  });

  return results;
}

// filter checks each element with `cb`,
// and if `cb` returns true, pushes the item
// into `results`.
//
// `cb` must always return a boolean value.
function filter(inputs, cb) {
  const results = [];

  for (let i = 0; i < inputs.length; i++) {
    const item = inputs[i];
    console.log(`item #${i + 1}: ${item}`);

    if (cb(item)) {
      console.log(`pushing ${item}`);
      results.push(item);
    }
  }

  return results;
}

// Stupid one-off callback
function isNeg(n) {
  return n < 0;
}

// Stupid one-off callback
function isPos(n) {
  return n >= 0;
}

// identical to:
// [1, 2, -3, -4].forEach((x) => {
//   console.log(`item at index ${i} is ${x}`);
// })
//
forEach([1, 2, -3, -4], (x, i) => {
  console.log(`item at index ${i} is ${x}`);
});

map([1, 2, -3, -4], isPos); // [true, true, false, false]
// The same as above, but with annonymous function
map([1, 2, -3, -4], (x) => x >= 0); // [true, true, false, false]
map([1, 2, -3, -4], (x) => x + 10); // [11, 12, 7, 6]
map([1, 2, -3, -4], (x) => (x + 10).toString()); // ["11", "12", "6", "7"]
map([1, 2, -3, -4], (x) => x.toString() + 10); // ["110", "210", "-310", "-410"]

filter([1, 2, -3, -4], isPos); // [1, 2]
// The same as above, but with annonymous function
filter([1, 2, -3, -4], (x) => x >= 0); // [1, 2]
filter([1, 2, -3, -4], isNeg); // [-3, -4]
filter([1, 2, -3, -4], (x) => x < 0); // [-3, -4]
