// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789".split("");
var lcLetter = "abcdefghijklmnopqrstuvwxyz".split("");
var ucLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var spLetter = "!@#$%^&*()_-+=`~[]{}".split("");
var ansArray = [];
var finArray =[];

function generatePassword(){
  var passwordLength = 0;
  
  while (passwordLength < 8 || passwordLength > 128) {
    
    var passwordLength = prompt("Choose a password length between 8 and 128 characters");
    
    if (passwordLength < 8 || passwordLength > 128) {
      
      var passwordLength = prompt("Password is too short or too long. Please choose between 8 and 128 characters");
   
    }else if (passwordLength === "" || Number.isNaN(passwordLength)){
      
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

   ansArray.push(wantNumber[i])
  }
} else  if (wantLc) {
  for(var i = 0; i < lcLetter.length; i++){

   ansArray.push(wantLc[i])
  }
}else if (wantUc) {
  for(var i = 0; i < ucLetter.length; i++){

    ansArray.push(wantUc[i])
  }
}else if (wantSp){
  for(var i = 0; i < spLetter.length; i++){

    ansArray.push(wantSp[i])
  }
}};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
