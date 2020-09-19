// Generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordFinal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// VARIABLES
var pwdNeed = true;
// console.log(pwdNeed)
var passwordArr = []


// FUNCTIONS
function randLower(){
  lowerLett = "abcdefghijklmnopqrstuvwxyz";
  return lowerLett[Math.floor(Math.random() * lowerLett.length)];
}
// console.log(randLower());

function randUpper(){
  upperLett = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperLett[Math.floor(Math.random() * upperLett.length)];
}
// console.log(randUpper());

function randNum(){
  nums = "1234567890";
  return nums[Math.floor(Math.random() * nums.length)];
}
// console.log(randNum());

function randSpec(){
  specChar = "!@#$%^&*(){}[]+-=<>.?~";
  return specChar[Math.floor(Math.random() * specChar.length)];
}
// console.log(randSpec());

function generatePassword (){
// WHILE LOOP FOR PROMPTS AND GENERATING PASSWORD
  while (pwdNeed == true){
    // Prompt user to enter desired password length
    var charLen = prompt("Enter desired password length. Choose between 8-128 characters.");
    // console.log(charLen);

    // If letter is between 8-128 run the following
    if (charLen >= 8 && charLen <= 128){
      pwdNeed = false;
      // Prompt what character types needed (lower, upper, numeric, and/or special)
      var charLower = confirm("Click OK to include lowercase letters.");
      // console.log(charLower);

      var charUpper = confirm("Click OK to include uppercase letters.");
      // console.log(charUpper);

      var charNum = confirm("Click OK to include numbers.");
      // console.log(charNum);

      var charSpec = confirm("Click OK to include special characters.");
      // console.log(charSpec);

      // Validate at least one character type selected
      if (charLower == false && charUpper == false && charNum == false && charSpec == false){
        alert("Cannot create password. Please select at least one character type.");
      } 
      // Generate password based on criteria
      else {
        // Array representing T/F for character types selected
        var typesArr = [charLower, charUpper, charNum, charSpec];
        // console.log("types array: " + typesArr);

        // Function to filter out only true values from array
        function charTrue (input){
          return input == true;
        }

        // Filter array to show only true character types requested
        trueCharArr = typesArr.filter(charTrue);
        // console.log("true char array: " + trueCharArr);

        // Determine number of true character types requested
        numTrueChar = trueCharArr.length;
        // console.log("Number characters requested: " + numTrueChar)

        // Generate password
        for (var i = 0; i < parseInt(charLen); i += numTrueChar){
          if (charLower == true){
            genLower = randLower();
            passwordArr.push(genLower);
          }
          if (charUpper == true){
            genUpper = randUpper();
            passwordArr.push(genUpper);
          }
          if (charNum == true){
            genNum = randNum();
            passwordArr.push(genNum);
          }
          if (charSpec == true){
            genSpec = randSpec();
            passwordArr.push(genSpec);
          }
        }
        // Convert password from array to string with no commas at correct length
        // console.log(passwordArr);
        passwordString = passwordArr.join();
        // console.log("Password string: " + passwordString);
        // console.log(typeof(passwordString));

        passwordFiltered = passwordString.replace(/,/g, "");
        // console.log("Filtered password: " + passwordFiltered);

        passwordFinal = passwordFiltered.slice(0,charLen);
        // console.log("Final password: " + passwordFinal);
      }
    } 
    // Validate password length between 8-128 characters
    else {
      prompt("Please select a length between 8-128 characters.");
    }
  }
}