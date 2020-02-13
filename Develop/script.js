// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// 1 array for each of the 4 types of character
var alphaLower = []; // Lower case array
var alphaUpper = []; // Upper case array
var number = [0,1,2,3,4,5,6,7,8,9]; // digit array
var specialChar = ("!#$%&'()*+-/<=>?@[\]^_`{|}~").split(""); // Special character array
var i;
for (i=0; i<26; i++){ // filling alphaLower and lphaUpper using unicode
 var j=i+97;
 var k=i+65;
alphaLower.push(String.fromCharCode(j)); //
alphaUpper.push(String.fromCharCode(k));

}


// Merging all the 4 arrays in one big array
var totalChar = alphaLower.concat(alphaUpper, number,specialChar);
console.log(totalChar);

// 








function generatePassword(){


}

// Add event listener to generate button
generateBtn.addEventListener("click",function(){

  writePassword()

});






