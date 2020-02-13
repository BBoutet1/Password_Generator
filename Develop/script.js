// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Generation of alphabet arrays (upper and lower)
var alphaLower = []; // Lower case array
var alphaUpper = []; // Upeer case
var number = [0,1,2,3,4,5,6,7,8,9]; // digit array
var specialChar = ("!#$%&'()*+-/<=>?@[\]^_`{|}~").split(""); // Special character array



var i;

for (i=0; i<26; i++){
 var j=i+97;
 var k=i+65;
alphaLower.push(String.fromCharCode(j)); // String.fromCharCode(String.fromCharCode(j))
alphaUpper.push(String.fromCharCode(k));

}


console.log("["+alphaLower+ "]");
console.log("["+ alphaUpper+ "]");
console.log("["+ number+ "]");
console.log("["+ specialChar+"]");


function generatePassword(){


}

// Add event listener to generate button
generateBtn.addEventListener("click",function(){

  writePassword()

});






