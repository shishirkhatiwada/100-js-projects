

function validateForm() {
    var email = document.getElementById("email");
    var username = document.getElementById("username");
    var phoneNumber = document.getElementById("phoneNumber");
    var termsAccepted = document.getElementById("termsAccepted");
  
    var emailError = document.getElementById("emailError");
    var usernameError = document.getElementById("usernameError");
    var phoneNumberError = document.getElementById("phoneNumberError");
    var termsError = document.getElementById("termsError");
  
    emailError.textContent = "";
    usernameError.textContent = "";
    phoneNumberError.textContent = "";
    termsError.textContent = "";
  
    var isValid = true;
  
    if (!email.validity.valid) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    if (username.value.length !== 6) {
      usernameError.textContent = "Username must be 6 characters long.";
      isValid = false;
    }
  
    if (!phoneNumber.validity.valid) {
      phoneNumberError.textContent = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }
  
    if (!termsAccepted.checked) {
      termsError.textContent = "Please accept the terms and conditions.";
      isValid = false;
    }
  
    return isValid;
  }