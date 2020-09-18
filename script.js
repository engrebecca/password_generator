// Generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// When user clicks button, present prompts for password criteria

// Prompt: length (8-128 characters) "How many characters would you like?"
// Need user validation to ensure between 8-128 char (error message)
var charLen = prompt("How many characters would you like your password to contain?");
console.log(charLen);

// Click OK to confirm including...
// Need user validation to ensure at least one criteria chosen
// Prompt: character types (lower, upper, numeric, and/or special)
var charLower = confirm("Click confirm to include lowercase letters.");
console.log(charLower);

var charUpper = confirm("Click confirm to include uppercase letters.");
console.log(charUpper);

var charNum = confirm("Click confirm to include numbers.");
console.log(charNum);

var charSpec = confirm("Click confirm to include special characters.");
console.log(charSpec);

// Validate so at least one character type selected

// Generate password with for loop and function

// Display generated password in box