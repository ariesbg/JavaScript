
    // Write a function for creating persons.
    // Each person must have firstname, lastname, age and gender (true is female, false is male)
    // Generate an array with ten person with different names, ages and genders

function person(firstName, lastName, age, gender){
return {
  firstName: firstName,
  lastName: lastName,
  age: age,
  gender: gender,
  introduce: function (){
    console.log("My name is: " + this.firstName + ' ' + this.lastName + " and I'm " +' ' + this.age + ' ' + this.gender);
  }  
}
}

var  people = [
  person('Peter', 'Petrov', 34, false),
  person('Mia', "Ivanova", 22, true),
  person('Andi', 'Naidenov', 54, false),
  person('Mimo', 'Kazachok', 34, false),
  person('John', "Whale", 22, true),
  person('Dan', 'Myri', 54, false),
  person('Piter', 'Coil', 37, false),
  person('Conon', "Doyl", 34, false),
  person('Mari', 'Marinov', 33, false),
];
people.forEach(function(person){
  person.introduce();
})
