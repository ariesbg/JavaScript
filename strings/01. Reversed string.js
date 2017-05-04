//Write a JavaScript function that reverses a string.
//Input
//The input will consist of an array containing one string
let arr = ['bibo'];
let str = arr.toString();
console.log(str);
let char ='';

	for (var i = str.length - 1; i >= 0; i--)
{
	char += str.substr(i,1);//ot i indeks s daljina 1 niz
}
	console.log(char);	

