/**
 * Returns true if number is between (but not equal to) 25 and 71
 */
function isBetweenRange(a) {
    if (a>25 && a<71){return true} else {return false;}

}

console.log('isBetweenRange(26):', isBetweenRange(26)); // true
console.log('isBetweenRange(25):', isBetweenRange(25)); // false
console.log('isBetweenRange(71):', isBetweenRange(71)); // false
console.log('isBetweenRange(70):', isBetweenRange(70)); // true

console.log('\n===\n');


/**
 * Returns the area of a rectangle
 */
function getRectangleArea(width, height) {
    return width*height 

}

console.log('getRectangleArea(4, 2):', getRectangleArea(4, 2)); // 8
console.log('getRectangleArea(1, 1):', getRectangleArea(1, 1)); // 1
console.log('getRectangleArea(53, 21):', getRectangleArea(53, 21)); // 1113

console.log('\n===\n'); // Ignore this line, makes the program output more readable
