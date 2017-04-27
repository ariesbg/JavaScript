var people = [
    {firstName: 'Marti', lastName: 'Naidenova', age: 25},
    {firstName: 'Iva', lastName: 'Petrova', age: 39},
    {firstName: 'Marko', lastName: 'Wundership', age: 33},
    {firstName: 'Pepi', lastName: 'Pepov', age: 33},
    {firstName: 'Mimo', lastName: 'Mimov', age: 25},
    {firstName: 'Tabak', lastName: 'Genadiev', age: 80}
];
//First
//console.log(people);
//console.log("'25': ");
//console.log(people.filter(x => x.age == 25));

//console.log("'33': ");
//console.log(people.filter(x => x.age == 33));

//console.log("'39': ");
//console.log(people.filter(x => x.age == 39));

//console.log("'80': ");
//console.log(people.filter(x => x.age == 80));

//Second
var sortedArr = people.sort((x, y) => x.age - y.age);

console.log(sortedArr);

var minAge = sortedArr[0].age;
console.log('"' + minAge + '" :');
console.log(people.filter(x => x.age == minAge));

var minAgePlus2 = sortedArr[2].age;
console.log('"' + minAgePlus2 + '" :');
console.log(people.filter(x => x.age == minAgePlus2));

var minAgePlus4 = sortedArr[4].age;
console.log('"' + minAgePlus4 + '" :');
console.log(people.filter(x => x.age == minAgePlus4));

var minAgePlus5 = sortedArr[5].age;
console.log('"' + minAgePlus5 + '" :');
console.log(people.filter(x => x.age == minAgePlus5));
