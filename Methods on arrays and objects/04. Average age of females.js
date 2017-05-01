//Write a function that calculates the average age of all females, extracted from an array of persons
// Use Array#filter
// Use only array methods and no regular loops (for, while)

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
    return person;
}

//filtrirame po pol i vavejdame nova promenliva, v koqto shte zapisvame rezultata sled prilagane na filter f-ta
var result;
 result = people.filter(function(item){
     return item.gender;
 });
console.log('Females: \n');

 //prilagame forEach v-u rezultata ot filtera da izvede vs jeni s godinite im v string
 //prilagame f-q s dve promenlivi
 result.forEach(function(item, i){
    var gend, str;

    if(result[i].gender){ // <=> (result[i].gender) == true)
        gend = 'female';
    } else {
        gend = 'male';
    }

    str = (i + 1 ) + '. ' + result[i].name + ' ' + result[i].secondName +
' is ' + gend + ' and is ' + result[i].age + ' years old.';

console.log(str);
 });

 // izchislqvane na srednata st-st na vazrastta, reduce tr da ima dve promenlivi
 // pyrvata e f-ta i vtorata e 0lata
 var averageAge;
 averageAge = result.reduce(function(s, item){
     return s + item.age;
 }, 0) / result.length;

 console.log('\nAverage age of females is : ' + averageAge + ' years!\n');
