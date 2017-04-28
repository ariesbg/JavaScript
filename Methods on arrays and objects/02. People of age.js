// People of age
//  Write a function that checks if an array of person contains only people of age (with age 18 or greater)
// Use only array methods and no regular loops (for, while)

function arrayEvery(arr, func, msg){
  console.log('All members in [ ' + arr + ']' + msg + arr.every(func));
}

function isGreater18(num){
  var i = arguments[1],
  arr = arguments[2];
  return num > 18;
}

arrayEvery([12, 34, 89, 65, 34, 22, 11, 9], isGreater18, ' are greater than 18! ');
arrayEvery([21, 34, 22, 76, 25, 90, 61, 19], isGreater18, ' are greater than 18! ');

