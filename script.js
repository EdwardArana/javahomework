// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789".split("");
var lcLetter = "abcdefghijklmnopqrstuvwxyz".split("");
var ucLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var spLetter = "!@#$%^&*()_-+=`~[]{}".split("");
var passwordLength = prompt("Specify a password length betweeen 8 and 128 ");
var wantNumber = confirm("Would you like numbers?");
var wantLc = confirm("Would you like lower case letters?");
var wantUc = confirm("Would you like upper case letters?");
var wantSp = confirm("Would you like special characters?");
var ansArray = []
var finArray =[]

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
}else (wantSp) {
  for(var i = 0; i < spLetter.length; i++){

    ansArray.push(wantSp[i])
  }
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


