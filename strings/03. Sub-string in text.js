// Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
// Input
//     The input will consist of an array containing one string
// Output
//     The output should be consisted of one line - the number of matches

var input = '/in/g'; //search global for 'in'
var str = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
var location = eval(input);
var result = str.match(location);
for (var index = 0; index <= result.length; index++) {
    index++;
}   
console.log(index - 1);