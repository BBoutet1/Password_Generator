// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
   passwordText.value = password;

}

// This function generate a secured password following characters criteria
function generatePassword(){

// Password length should be between 8 and 26 characters
var numberOfChar = prompt("Please, enter the desired number of characters");
if( numberOfChar==null) { // if no value is entered
  alert("Number of characters: no input value")
  passwordText = document.querySelector("#password").innerHTML;// Password text reset
  return passwordText;
  console.log(numberOfChar);
}
else if ((numberOfChar<8 || numberOfChar>28) && !(numberOfChar==null)){ // password length out of [8,26]  range 
alert("Your password should contains 8 to 26 characters. Please try again!")
passwordText = document.querySelector("#password").innerHTML;// Password text reset in display field
return passwordText;
} 
else { //Password length in [8,26] range 
var alphaLower = []; // Lower case array
var alphaUpper = []; // Upper case array
var number = [0,1,2,3,4,5,6,7,8,9]; // digital characters array
var specialChar = ("!#$%&'()*+-/<=>?@[\]^_`{|}~").split(""); // Special characters array
var i;
for (i=0; i<26; i++){ // filling alphaLower and lphaUpper with alphabet using unicode
 var j=i+97;
 var k=i+65;
alphaLower.push(String.fromCharCode(j));
alphaUpper.push(String.fromCharCode(k));
}

// Merging user selected array in one big array
alert("Select at least 3 types of caracters");
var totalChar = []; // merger array
var lowerChar = confirm("Lower case characters: "+alphaLower);
var upperChar = confirm("Upper case characters: "+alphaUpper);
var numChar = confirm("Digital characters: "+number); 
var speChar = confirm("Special characters: "+specialChar); 


var numOftypes=0; // Number of selected type of caracter

if (lowerChar===true) { // lower case characters added in the merger array Char if selected
  totalChar = totalChar.concat(alphaLower);
  numOftypes++
}
if (upperChar===true) { // upper case characters added in the merger array if selected
  totalChar = totalChar.concat(alphaUpper);
  numOftypes++
}
if (numChar===true) { // digital characters added in the merger array if selected
  totalChar = totalChar.concat(number);
  numOftypes++
}

if (speChar===true) {totalChar =totalChar.concat(specialChar); // special characters added in the merger array if selected
  numOftypes++
}


//User should chose 3 types of characters at least to generate a secure password
if (numOftypes<3){ // if less than 3 types of characters have been selected
  alert("Your password must contains at least 3  types of characters. Please try again!")
  passwordText = document.querySelector("#password").innerHTML;// Password text reset in display field
  return passwordText;
}
else { // at least 3 types of characters selected

// randomly generating password
var securedPassword = "";
for (j=0; j<numberOfChar; j++){
 
  var random = Math.floor(Math.random() * totalChar.length);
  securedPassword = securedPassword + totalChar[random];}
}
return securedPassword;
}
}


// Add event listener to generate button
generateBtn.addEventListener("click",function(){
  writePassword()
});






