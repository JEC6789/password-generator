var characterList = "";
var generatePassword = function() {
  var generatedPassword = "";
  var characterSet = "";
  var passwordLength = window.prompt("How long do you want your password to be? The minimum length is 8 characters and the maximum is 128 characters.");
  passwordLength = Math.floor(parseInt(passwordLength));
  if (passwordLength > 128) {
    alert("Your password cannot be more than 128 characters long. Please enter a smaller number.");
    generatePassword();
  }
  else if (passwordLength < 8) {
    alert("Your password cannot be less than 8 characters long. Please enter a larger number.");
    generatePassword();
  }
  else if (isNaN(passwordLength)) {
    alert("The length of your password cannot be a non-numerical value. Please enter a numerical value.");
    generatePassword();
  }

  var characterSet = characterTypes();

  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return generatedPassword;
}

var characterTypes = function() {
  
  var lowercaseSet = window.confirm("Would you like your password to include lowercase letters?");
  if (lowercaseSet) {
    characterList += "qwertyuiopasdfghjklzxcvbnm";
  }

  var uppercaseSet = window.confirm("Would you like your password to include uppercase letters?");
  if (uppercaseSet) {
    characterList += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }

  var numberSet = window.confirm("Would you like your password to include numbers?");
  if (numberSet) {
    characterList += "1234567890";
  }

  var specialSet = window.confirm("Would you like your password to include other special characters?");
  if (specialSet) {
    characterList += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  if (characterList === "") {
    alert("You didn't select any character types to include in your password. Let's go through each one again.");
    characterTypes();
  }

  return characterList;
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
