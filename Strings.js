
//String --> Group of characters
let stringType1="Hello, this is ";
let stringType2="Prathibaa B";

//length property -->to find numbers of characters in the string
console.log(stringType1.length);
console.log(stringType2.length);

//joining of string using '+' and concat method
console.log(stringType1+stringType2);
console.log(stringType1.concat(stringType2));

//String partitioning
let stringType3="Helloo";

//1.slice(start,end) -->end is not included
console.log(stringType3.slice(0,6));
console.log(stringType3.slice(-3));

//2.substring(start,end) -->end is not included
console.log(stringType3.substring(0,6));
console.log(stringType3.substring(-3));

//3.substr(start,length) -->length represents the number of characters
console.log(stringType3.substr(3,5));

//4.replace -->replace only at first time and replaceAll -->replaces all the same.
let stringType4="Hi Hi Hi";
console.log(stringType4.replace("Hi","Bye"));
console.log(stringType4.replaceAll("Hi","Bye"));

//5.toUpperCase method -->converts all alphabets to uppercase and toLowerCase method -->converts all alphabets to lowercase
console.log(stringType3.toUpperCase());
console.log(stringType3.toLowerCase());

//6.trim method -->removes extra spaces
let stringType5=" Sample ";
console.log(stringType5.trim());
//trimStart method--> removes extra space in start  and trimEnd method -->removes extra space in end
console.log(stringType5.trimStart());
console.log(stringType5.trimEnd());

//7.charAt() -->finding characters , indexOf()-->finding index and includes() -->checks whether the word is present or not
console.log(stringType3.charAt(5));
console.log(stringType3.charCodeAt(5));
console.log(stringType3.indexOf('e'));
console.log(stringType3.lastIndexOf('l'));
console.log(stringType3.includes('Helloo'));
console.log(stringType3.startsWith('H'));
console.log(stringType3.endsWith('o'));
