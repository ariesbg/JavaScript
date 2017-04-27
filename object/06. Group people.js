//masiv ot obekti
var people = [
    {firstName: 'Marti', lastName: 'Naidenova', age: 25},
    {firstName: 'Iva', lastName: 'Petrova', age: 39},
    {firstName: 'Marko', lastName: 'Wundership', age: 33},
    {firstName: 'Pepi', lastName: 'Pepov', age: 33},
    {firstName: 'Mimo', lastName: 'Mimov', age: 25},
    {firstName: 'Tabak', lastName: 'Genadiev', age: 80}
];
var sortedArr = people.sort((x, y) => x.age - y.age);
console.log(sortedArr);
console.log("'22': ");
console.log(sortedArr.filter(x => x.age == 25));

console.log("'33': ");
console.log(sortedArr.filter(x => x.age ==33));

console.log("'39': ");
console.log(sortedArr.filter(x => x.age ==39));

console.log("'80': ");
console.log(sortedArr.filter(x => x.age ==80));
