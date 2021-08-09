// Create global variables
var criteria = {
  length: "",
  case: "",
  numSym: ""
}

// User begins by specifying password length
function lengthPrompt() {
  criteria.length = prompt("Please enter the number of characters you wish to include. \n(A minimum of 8 characters is required.)");
  criteria.length = parseInt(criteria.length);

  if (criteria.length < 8) {
    window.alert("Your password must be a minimum of 8 characters.");
    lengthPrompt();
  }

  if (criteria.length > 128) {
    window.alert("Your password may be no more than 128 characters.");
    lengthPrompt();
  }

  if (isNaN(criteria.length)) {
    window.alert("Please provide a valid response.");
    lengthPrompt();
  }
  // Proceed to next prompt
  letterPrompt();
}

var letterPrompt = function() {
  criteria.case = prompt("Please select from the following: \n\n'1' for only LOWERCASE, \n'2' for only UPPERCASE, \n'3' for BOTH upper & lowercase, or \n'4' for NO LETTERS at all.");
  criteria.case = parseInt(criteria.case);
  switch (criteria.case) {
    case 1:
        var lowercaseOnly = window.confirm("Your password will only contain lowercase letters. \nClick 'Cancel' to select a different option.");
        if (!lowercaseOnly) {
          criteria.case = "";
          letterPrompt();
        } else {
        break;
        }
    case 2:
      var uppercaseOnly = window.confirm("Your password will only contain uppercase letters. \nClick 'Cancel' to select a different option.");
      if (!uppercaseOnly) {
        criteria.case = "";
        letterPrompt();
      } else {
      break;
      }
    case 3:
      var bothCases = window.confirm("Your password will contain both upper and lowercase letters. \nClick 'Cancel' to select a different option.");
      if (!bothCases) {
        criteria.case = "";
        letterPrompt();
      } else {
      break;
      }
    case 4:
      var noLetters = window.confirm("Your password will not contain any letters. \nClick 'Cancel' to select a different option.");
      if (!noLetters) {
        criteria.case = "";
        letterPrompt();
      } else {
      break;
      }
    default:
      window.alert("Please provide a valid response.");
      letterPrompt();
      break;
  }
  // Proceed to next prompt
  nsPrompt();
}

var nsPrompt = function() {
  criteria.numSym = prompt("Which additional character types would you like to include? Select... \n\n'1' for NUMBERS, \n'2' for SPECIAL CHARACTERS, or \n'3' for BOTH numbers and special characters, or \n'4' for NEITHER; only letters");
  criteria.numSym = parseInt(criteria.numSym);

  if (criteria.case === 4 && criteria.numSym === 4) {
    window.alert("Your password must contain at least one type of character.");
    criteria.case = "";
    criteria.numSym = '';
    letterPrompt();
  } else {
    switch (criteria.numSym) {
      case 1:
          var numeric = window.confirm("Your password may contain numbers, but no special characters. \nClick 'Cancel' to select a different option.");
          if (!numeric) {
            criteria.numSym = "";
            nsPrompt();
          } else {
          break;
          }
      case 2:
        var specialCharacters = window.confirm("Your password may contain special characters, but no numbers. \nClick 'Cancel' to select a different option.");
        if (!specialCharacters) {
          criteria.numSym = "";
          nsPrompt();
        } else {
        break;
        }
      case 3:
        var bothNumSym = window.confirm("Your password may contain both numbers and special characters. \nClick 'Cancel' to select a different option.");
        if (!bothNumSym) {
          criteria.numSym = "";
          nsPrompt();
        } else {
        break;
        }
      case 4:
        var noNumSym = window.confirm("Your password will not contain any numbers or special characters. \nClick 'Cancel' to select a different option.");
        if (!noNumSym) {
          criteria.numSym = "";
          nsPrompt();
        } else {
        break;
        }
      default:
        window.alert("Please provide a valid response.");
        nsPrompt();
        break;
    }
  }
  generatePassword();
}

function getRandomChar(charString) {
  // Choose a random whole number between 1 and the selected string length
  var getIndex = Math.floor((Math.random() * charString.length) + 1);
  console.log("getIndex = " + getIndex)
  return charString.charAt(getIndex);
}

// Character strings
var alpha = "abcdefghijklmnopqrstuvwxyz"; // 26 characters
var caps = alpha.toUpperCase(); // 26 characters
var capsAlpha = caps + alpha; // 52 characters
var numeric = "0123456789"; // 10 characters
var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" // 30 characters
var numSym = numeric + symbols; // 40 characters
var alphaNumeric = alpha + numeric; // 36 characters
var alphaSymbols = alpha + symbols; // 56 characters
var alphaNumSym = alphaNumeric + symbols; // 66 characters
var capsNumeric = caps + numeric; // 36 characters
var capsSymbols = caps + symbols; // 56 characters
var capsNumSym = caps + numSym; // 66 characters
var capsAlphaNumeric = capsAlpha + numeric; // 62 characters
var capsAlphaSymbols = capsAlpha + symbols; // 82 characters
var capsAlphaNumSym = capsAlpha + numSym; // 92 characters

function generatePassword() {
  // Reset password string
  password = "";
  // Repeat this step as many times as the chosen password length
  for (var i = 0; i < criteria.length; i++) {
    function passwordLog() {
      console.log("Password: " + password);
    }
    if (criteria.case === 1 && criteria.numSym === 1) {
      // Add a character to the password from the chosen character string
      password += getRandomChar(alphaNumeric);
      passwordLog();
    }
    if (criteria.case === 1 && criteria.numSym === 2) {
      password += getRandomChar(alphaSymbols);
      passwordLog();
    }
    if (criteria.case === 1 && criteria.numSym === 3) {
      password += getRandomChar(alphaNumSym);
      passwordLog();
    }
    if (criteria.case === 1 && criteria.numSym === 4) {
      password += getRandomChar(alpha);
      passwordLog();
    }
    if (criteria.case === 2 && criteria.numSym === 1) {
      password += getRandomChar(capsNumeric);
      passwordLog();
    }
    if (criteria.case === 2 && criteria.numSym === 2) {
      password += getRandomChar(capsSymbols);
      passwordLog();
    }
    if (criteria.case === 2 && criteria.numSym === 3) {
      password += getRandomChar(capsNumSym);
      passwordLog();
    }
    if (criteria.case === 2 && criteria.numSym === 4) {
      password += getRandomChar(caps);
      passwordLog();
    }
    if (criteria.case === 3 && criteria.numSym === 1) {
      password += getRandomChar(capsAlphaNumeric);
      passwordLog();
    }
    if (criteria.case === 3 && criteria.numSym === 2) {
      password += getRandomChar(capsAlphaSymbols);
      passwordLog();
    }
    if (criteria.case === 3 && criteria.numSym === 3) {
      password += getRandomChar(capsAlphaNumSym);
      passwordLog();
    }
    if (criteria.case === 3 && criteria.numSym === 4) {
      password += getRandomChar(capsAlpha);
      passwordLog();
    }
    if (criteria.case === 4 && criteria.numSym === 1) {
      password += getRandomChar(numeric);
      passwordLog();
    }
    if (criteria.case === 4 && criteria.numSym === 2) {
      password += getRandomChar(symbols);
      passwordLog();
    }
    if (criteria.case === 4 && criteria.numSym === 3) {
      password += getRandomChar(numSym);
      passwordLog();
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
