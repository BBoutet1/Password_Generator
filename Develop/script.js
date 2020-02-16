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
var numberOfChar = prompt("Please, enter the desired number of characters"); // password characters length
numberOfChar = Number(numberOfChar);

if (Number.isInteger(numberOfChar)==false || numberOfChar<0){ // If the length input is not a positive integer
  alert("Password length should be a positive integer. Please try again!")
  passwordText = document.querySelector("#password").innerHTML;// Password text reset
  return passwordText;
}

else if( numberOfChar==null) { // if no value is entered
  alert("You cancelled your secure password generation!")
  passwordText = document.querySelector("#password").innerHTML;// Password text reset
  return passwordText;
}
else if ((numberOfChar<8 || numberOfChar>128) && !(numberOfChar==null)){ // password length out of [8,26] range 
alert("Your password should contains 8 to 26 characters. Please try again!")
passwordText = document.querySelector("#password").innerHTML;// Password text reset in display field
return passwordText;
} 
else { //Password length in [8,26] range 
var alphaLower = []; // Lower case array
var alphaUpper = []; // Upper case array
var number = [0,1,2,3,4,5,6,7,8,9]; // digital characters array
var specialChar = ("!#$%&'()*+-/<=>?@[\]^_`{|}~").split(""); // Special characters array
for (var i=0; i<26; i++){ // filling alphaLower and lphaUpper with alphabet using unicode
 var j=i+97;
 var k=i+65;
alphaLower.push(String.fromCharCode(j));
alphaUpper.push(String.fromCharCode(k));
}


// Merging user selected array in one big array
alert("Select at least 3 types of caracters");
var totalChar = []; // merger array
var lowerChar = confirm("1-Lower case characters: a~z");
var upperChar = confirm("2-Upper case characters: A~Z ");
var numChar = confirm("3-Digital characters: 0~9"); 
var speChar = confirm("4-Special characters: !#$%&"); 


var numOftypes=0; // Number of types of characters selected

if (lowerChar===true) { 
  totalChar = totalChar.concat(alphaLower);// lower case characters added in the merger array Char if selected
  numOftypes++
}
if (upperChar===true) { 
  totalChar = totalChar.concat(alphaUpper);// upper case characters added in the merger array if selected
  numOftypes++
}
if (numChar===true) { 
  totalChar = totalChar.concat(number);// digital characters added in the merger array if selected
  numOftypes++
}

if (speChar===true) {
  totalChar =totalChar.concat(specialChar); // special characters added in the merger array if selected
  numOftypes++
}


//User should chose 3 types of characters at least to generate a secure password
if (numOftypes<3){ // if less than 3 types of characters have been selected
  alert("Your password must contains at least 3  types of characters. Please try again!")
  passwordText = document.querySelector("#password").innerHTML;// Password text reset in display field
  return passwordText;
}
else { // at least 3 types of characters selected password can be generated


var securePassword = "";

// While: the random password is recorded only if selected characters criteria are met
while(!(checkLower && checkUpper && checkNum && checkSpe)){  
for (j=0; j<numberOfChar; j++){
 
  var random = Math.floor(Math.random() * totalChar.length);
  securePassword = securePassword + totalChar[random];}
  /****************************************************************/
// This part checks if each secleted type has at least one character in the password
var passArray =securePassword.split(""); // converting the password strig in array 

//Checking if at least 1  lower case character when the type is selected
var checkLower=true;
if (lowerChar===true) {
  for (i=0; i<alphaLower.length; i++){
    for(j=0; j<passArray.length; j++){
        if(alphaLower[i]==passArray[j]){
          checkLower=true
          break;
        }
      }
      if(alphaLower[i]==passArray[j]){
        break;
      }
      else{
      checkLower=false
      }  
    }
  }

//Checking if at least 1  upper case character when the type is selected
var checkUpper=true; 
if (upperChar===true) {
  for (i=0; i<alphaUpper.length; i++){
    for(j=0; j<passArray.length; j++){
        if(alphaUpper[i]==passArray[j]){
          checkUpper=true
          break;
        }
      }
      if(alphaUpper[i]==passArray[j]){
        break;
      }
      else{
      checkUpper=false
      }  
    }
  } 

//Checking if at least 1  digital character when the type is selected
 var checkNum=true;
 if (numChar===true) {
   for (i=0; i<number.length; i++){
     for(j=0; j<passArray.length; j++){
         if(number[i]==passArray[j]){
           checkNum=true
           break;
         }
       }
       if(number[i]==passArray[j]){
         break;
       }
       else{
       checkNum=false
       }  
     }
   } 
//Checking if at least 1  special character when the type is selected
 var checkSpe=true;
 if (speChar===true) {
   for (i=0; i<specialChar.length; i++){
     for(j=0; j<passArray.length; j++){
         if(specialChar[i]==passArray[j]){
           checkSpe=true
           break;
         }
       }
       if(specialChar[i]==passArray[j]){
         break;
       }
       else{
       checkSpe=false
       }  
     }
   } 

console.log("Lower criteria met: "+ checkLower);
console.log("Upper criteria met: "+ checkUpper);
console.log("Digital criteria met: "+ checkNum);
console.log("Special criteria met: "+ checkSpe);
console.log(lowerChar +"/"+upperChar+"/"+numChar+"/"+speChar);

/*******************************************************************/
}

} // end While

return securePassword;
}
}



// Add event listener to generate button
generateBtn.addEventListener("click",function(){
  writePassword()
});






