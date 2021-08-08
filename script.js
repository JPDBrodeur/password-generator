// Assignment code here
var getCriteria = function() {
  promptLength();
  promptCharacters();
}

var promptLength = function() {
  var length = window.prompt("Please enter the number of characters you wish to include. \nA minimum of 8 characters is required.");

  if (length < 8) {
    window.alert("Your password must be a minimum of 8 characters.");
    promptLength();
  }

  if (length > 128) {
    window.alert("Your password may be no more than 128 characters.");
    promptLength();
  }
}

var promptCharacters = function() {
  var casePrompt = window.prompt("Please type one of the following to specify case: \n'1' for only lowercase, \n'2' for only uppercase, or \n'3' for both upper & lowercase letters");
  casePrompt = parseInt(casePrompt);
    if (casePrompt === 1 || casePrompt === 2 || casePrompt === 3) {
      // continue to numeric & special characters prompt
    } else {
      window.alert("Please provide a valid response.");
      promptCharacters();
    }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
