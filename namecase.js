// Namecases
var personName = "Ameer Hamza Shah";
// for lowercase
console.log(personName.toLowerCase());
//for uppercase
console.log(personName.toUpperCase());
//for titlecase 
var firstLetter = (personName.charAt(0).toUpperCase)();
var restLetters = (personName.slice(1).toLowerCase)();
var titleCase = firstLetter + restLetters;
console.log(titleCase);
