const arr = ['a', 'b', 'c'];

// const iterator = arr.entries();

// console.log(iterator.next().value); // Output: [0, 'a']
// console.log(iterator.next().value); // Output: [1, 'b']
// console.log(iterator.next().value); // Output: [2, 'c']
// console.log(iterator.next().value); // Output: undefined


const res = arr.entries();
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next().value);