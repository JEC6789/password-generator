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

  var lowercase = window.confirm("Would you like your password to include lowercase letters?");
  if (lowercase) {
    characterSet += "qwertyuiopasdfghjklzxcvbnm";
  }

  var uppercase = window.confirm("Would you like your password to include uppercase letters?");
  if (uppercase) {
    characterSet += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }

  var numbers = window.confirm("Would you like your password to include numbers?");
  if (numbers) {
    characterSet += "1234567890";
  }

  var special = window.confirm("Would you like your password to include other special characaters?");
  if (special) {
    characterSet += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return generatedPassword;
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
