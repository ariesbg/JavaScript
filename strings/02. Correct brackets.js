// Correct brackets
// Write a JavaScript function to check if in a given expression the brackets are put correctly.
// Input
//     The input will consist of an array containing a string
// Output
//     The output should be consisted of one line
//         Correct or Incorrect

var str = ')a+(b/5-d';
console.log(str);

//check if the begining and the end are correct
if(str[0] == ')' || str[0] == ']'){
    console.log('Incorrect');
} else if(str[str.length] == '(' || str[str.length] == '['){
    console.log('Incorrect');
}

//check how many are the brackets
var i;
var count1 = 0,
    count2 = 0;

for (i = 0; i <= str.length; i++){
    
    if ((str[i] == '(')){
        count1++;
    } else if (( str[i] == ')')){
        count2++;
    }
}
console.log(count1);
console.log(count2);

if (count1 == count2) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

