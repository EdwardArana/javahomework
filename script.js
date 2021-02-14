// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength = 0;
  var numbers = "0123456789".split("");
  var lcLetter = "abcdefghijklmnopqrstuvwxyz".split("");
  var ucLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var spLetter = "!@#$%^&*()_-+=`~[]{}".split("");
  var ansArray = [];
  var finArray =[];
  var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 || passwordLength === "") {
    
    
    if (passwordLength < 8 || passwordLength > 128) {
      
      var passwordLength = prompt("Password is too short or too long. Please choose between 8 and 128 characters");
   
    }else if (passwordLength === "" || isNaN(passwordLength)){
      
      var passwordLength = prompt("Enter a valid value");
    }
    console.log(passwordLength)
  }
  var wantNumber = confirm("Do you want numbers in your password?");
  var wantLc = confirm("Do you want  lower case letters in your password?");
  var wantUc = confirm("Do you want upper case letters in your password?");
  var wantSp = confirm("Do you want special characters in your password?");


if (wantNumber) {
  
  for(var i = 0; i < numbers.length; i++){
    console.log("wwww1");
   ansArray.push(numbers[i])
  
  }
  console.log(ansArray);
}

if (wantLc) {
 
  for(var i = 0; i < lcLetter.length; i++){
    console.log("wwww2");
   ansArray.push(lcLetter[i])
  
  }
  console.log(ansArray);
}

if (wantUc) {
  
  for(var i = 0; i < ucLetter.length; i++){
    console.log("wwww3");
    ansArray.push(ucLetter[i])
  
  }
  console.log(ansArray);
}

if (wantSp) {
  
  for(var i = 0; i < spLetter.length; i++){
    console.log("wwww4");
    ansArray.push(spLetter[i])
    
}
console.log(ansArray);
}};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
