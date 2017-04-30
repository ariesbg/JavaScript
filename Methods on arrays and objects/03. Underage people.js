// Write a function that prints all underaged persons of an array of person
//     Use Array#filter and Array#forEach
//     Use only array methods and no regular loops (for, while)

persons([4, 5, 8, 18, 30, 34, 41], isUnderAge, ' are under 18 ');

function persons(arr, func, msg){
 console.log('The persons under 18 years are: ' + arr.filter(func));
}

function isUnderAge(age){
  var i = arguments[1];
  arr = arguments[2];
  return age < 18; 
}