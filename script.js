// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword("@password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Enter how many characters you would like in your password? Must be between 8 and 128 characters");
  if (passwordLength <8 || passwordLength >128) {
    alert("Character amount invalid");
  } else {var hasUppercase = confirm("Do you want Uppercase characters in your password?");
var hasLowercase = confirm("Do you want Lowercase characters in your password?");
var hasSpecChars = confirm("Do you want Special Characters in your password?");
var hasNumbers = confirm("Do you want Special characters in your password");
}
}
