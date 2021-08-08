// Creates a global scope for criteria.case
var criteria = {
  length: "",
  case: "",
  numSpec: ""
}

var charset = {
  alpha: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
}

var getCriteria = function() {
  lengthPrompt();
}

var lengthPrompt = function() {
  criteria.length = window.prompt("Please enter the number of characters you wish to include. \n(A minimum of 8 characters is required.)");
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
  criteria.case = window.prompt("Please select from the following: \n\n'1' for only LOWERCASE, \n'2' for only UPPERCASE, \n'3' for BOTH upper & lowercase, or \n'4' for NO LETTERS at all.");
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
  criteria.numSpec = window.prompt("Which additional character types would you like to include? Select... \n\n'1' for NUMBERS, \n'2' for SPECIAL CHARACTERS, or \n'3' for BOTH numbers and special characters, or \n'4' for NEITHER; only letters");
  criteria.numSpec = parseInt(criteria.numSpec);

  while (criteria.case === 4 && criteria.numSpec === 4) {
    window.alert("Your password must contain at least one type of character.");
    criteria.case = "";
    criteria.numSpec = '';
    letterPrompt();
  }

  switch (criteria.numSpec) {
    case 1:
        var numeric = window.confirm("Your password will contain numbers, but no special characters. \nClick 'Cancel' to select a different option.");
        if (!numeric) {
          criteria.numSpec = "";
          nsPrompt();
        } else {
        break;
        }
    case 2:
      var specialCharacters = window.confirm("Your password will contain special characters, but no numbers. \nClick 'Cancel' to select a different option.");
      if (!specialCharacters) {
        criteria.numSpec = "";
        nsPrompt();
      } else {
      break;
      }
    case 3:
      var bothNumSpec = window.confirm("Your password will contain both numbers and special characters. \nClick 'Cancel' to select a different option.");
      if (!bothNumSpec) {
        criteria.numSpec = "";
        nsPrompt();
      } else {
      break;
      }
    case 4:
      var noNumSpec = window.confirm("Your password will not contain any numbers or special characters. \nClick 'Cancel' to select a different option.");
      if (!noNumSpec) {
        criteria.numSpec = "";
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
