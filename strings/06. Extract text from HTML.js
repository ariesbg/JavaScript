// Extract text from HTML
// Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags.
// Input
//     The input will consist of an array of strings
// Output
//     The output should be consisted of one line - text inside tags
var input = "<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";
var str = '';
var i;
var startIndex;
var endIndex;
for(i = 0; i < input.length; i++){
    startIndex = input.indexOf('<', i);
    endIndex = input.indexOf('>', i + 1);
    str += input.substring(i, startIndex);
    i = endIndex;
}
console.log(str);