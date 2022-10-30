// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//this fuction will be the generate password function
function generatePassword() {
  // var lowercaseAnswer = window.confirm("Do you want lowercase?");
  // var uppercaseAnswer = window.confirm("Do you want uppercase?");
  // var numericAnswer = window.confirm("Do you want numbers?");
  // var specialCharAnswer = window.confirm("Do you want special characters? For example: !, #, $, @");

  // if (lowercaseAnswer === false && uppercaseAnswer === false && numericAnswer === false && specialCharAnswer === false){
  //   window.alert("You must select at least one password criteria. Please try again.");
  //   return "";
  // }

  var pwLength = window.prompt("Specify how long you want your password. Please type in a number from 8 to 128.");
  console.log("pwLength:", pwLength);

  var pwLengthNumber = parseInt(pwLength);
  console.log("pwLengthNumber:", pwLengthNumber);

  if (isNaN(pwLengthNumber)) {
    window.alert("You must ONLY type in a nunber from 8 to 128. Please try again.");
    return "";
  }
  if(pwLengthNumber >= 8 && pwLengthNumber <= 128) {
    //generate password woop woop
    console.log("woop woop");
  }
  else {
    window.alert("You must ONLY type in a nunber from 8 to 128. Please try again.");
    return "";

  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
