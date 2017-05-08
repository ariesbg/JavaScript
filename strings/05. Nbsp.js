//nbsp
// Write a function that replaces non breaking white-spaces in a text with &nbsp.
// Input
// The input will consist of an array containing one string
// Output
// The output should be consisted of one line

var string = 'kukuvica kuka na zelena buka';
var newString = string.split(' '); //array
console.log(newString.join('&npsp;'));
