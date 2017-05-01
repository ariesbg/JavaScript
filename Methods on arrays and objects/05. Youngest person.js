//Write a function that finds the youngest male person in a given array of people and prints his full name
//Use only array methods and no regular loops (for, while)

//sazdavame masiv ot hora, koito se izvikvat ot f-q person();
var people = [
  person('Peter', 'Petrov', 34, false),
  person('Mia', "Ivanova", 18, true),
  person('Andi', 'Naidenov', 54, false),
  person('Mimo', 'Kazachok', 34, false),
  person('John', "Whale", 22, true),
  person('Dan', 'Myri', 54, false),
  person('Piter', 'Coil', 37, false),
  person('Conon', "Doyl", 34, true),
  person('Mari', 'Marinov', 33, false),
];

//sazdavame f-q person(), koqto vra6ta m-v ot horata
function person(name, secondName, age, gender){
    return {
        name: name,
        secondName: secondName,
        age: age,
        gender: gender
    }
};

//sortirame horata po vazrast
people.sort(function(p1, p2){
   return p1.age > p2.age;
});

console.log(people);
console.log('The youngest person in this array is: ');
console.log(people[0].name + ' ' + people[0].age + ' years old');

