//masiv ot obekti
var people = [
    {firstName: 'Marti', lastName: 'Naidenova', age: 25},
    {firstName: 'Iva', lastName: 'Petrova', age: 39},
    {firstName: 'Marko', lastName: 'Wundership', age: 33}
];
console.log(people);

var min = Math.min(people[0].age, people[1].age, people[2].age);
if(min == people[0].age)
{
     console.log(people[0].firstName +' ' + people[0].lastName);
} else if(min == people[1].age)
{
     console.log(people[1].firstName +' ' + people[1].lastName);
} else 
{
     console.log(people[2].firstName +' ' + people[2].lastName);
}
