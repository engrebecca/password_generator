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

// VARIABLES
var pwdNeed = true;
var charLower = false;
var charUpper = false;
var charNum = false;
var charSpec = false;

// FUNCTIONS
function randLower(){
  lowerLett = "abcdefghijklmnopqrstuvwxyz";
  return lowerLett[Math.floor(Math.random() * lowerLett.length)];
}
console.log(randLower());

function randUpper(){
  upperLett = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperLett[Math.floor(Math.random() * upperLett.length)];
}
console.log(randUpper());

function randNum(){
  nums = "1234567890";
  return nums[Math.floor(Math.random() * nums.length)];
}
console.log(randNum());

function randSpec(){
  specChar = "!@#$%^&*(){}[]=<>,.";
  return specChar[Math.floor(Math.random() * specChar.length)];
}
console.log(randSpec());


// While loop
// while (pwdNeed = true){
//   // Prompt user to enter desired password length
//   charLen = prompt("Enter desired password length. Choose between 8-128 characters.");
//   console.log(charLen);

//   // If letter is between 8-128 run the following
//   if (charLen > 8 && charLen < 128){
//     // Run all the other prompts
//     pwdNeed = false;
//     // Run all the other character prompts
//     // Prompt: character types (lower, upper, numeric, and/or special)
//     var charLower = confirm("Click OK to include lowercase letters.");
//     console.log(charLower);

//     var charUpper = confirm("Click OK to include uppercase letters.");
//     console.log(charUpper);

//     var charNum = confirm("Click OK to include numbers.");
//     console.log(charNum);

//     var charSpec = confirm("Click OK to include special characters.");
//     console.log(charSpec);

// // Validate so at least one character type selected

// // Generate password with for loop and function

// // Display generated password in box
//   } 
//   // Else run the following error message and redirect to choose valid length
//   else {
//     prompt("Please select a length between 8-128 characters.");
//     pwdNeed = true;
//   }
// }



// Need user validation to ensure at least one criteria chosen
