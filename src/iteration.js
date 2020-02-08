/**
 * Separate all "numbers" from 5 upwards into "bigNumbers"
 * All other "numbers" should go in "smallNumbers"
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
 * @see https://javascript.info/ifelse#the-if-statement
 */

let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let bigNumbers = value => value >5 ;
let smallNumbers = value => value < 5;

allNumbers.forEach(function (a) {
  // This function runs for each value in the `allNumbers` array
});

console.log('bigNumbers:', allNumbers.filter(bigNumbers)); // [5, 6, 7, 8, 9]
console.log('smallNumbers:', allNumbers.filter(smallNumbers)); // [1, 2, 3, 4]


/**
 * Calculate the sum of "numbers" greater than 7 using a forEach loop
 */
let unfilteredNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let filteredSum=0;


unfilteredNumbers.forEach(function (unfilteredNumbers) {
  if (unfilteredNumbers > 7) {
    filteredSum = filteredSum + unfilteredNumbers
  } 
});
console.log('filteredSum:', filteredSum) // 17
