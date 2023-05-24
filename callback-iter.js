function isNeg(n) {
  return n < 0;
}

function isPos(n) {
  return n >= 0;
}

function calculator(
  a, // input 1
  b, // input 2
  op, // cb for operation
) {
  return op(a, b);
}

calculator(10, 20, (x, y) => x * y);
calculator(20, 30, (x, y) => x - y);

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

function map(inputs, cb) {
  const results = new Array(inputs.length);

  inputs.forEach((item, i) => {
    // Note: item is inputs[i]
    results[i] = cb(item);
  });

  return results;
}

function forEach(inputs, cb) {
  for (let i = 0; i < inputs.length; i++) {
    cb(inputs[i]);
  }
}
