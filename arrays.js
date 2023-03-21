//ex 1
const names = ['n1', 'n2', 'n3'];
console.log(names[1]);

const newNames = names.concat('n4');

console.log(newNames);

//ex 2
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = 0
array.forEach((number) => {
  sum = sum + number
})

//challenge
const addToBatch = (array, num) => {
  if(array.length >= 5 ) {
    return array;
  } else {
    return array.concat(num);
  }
}

module.exports = addToBatch;