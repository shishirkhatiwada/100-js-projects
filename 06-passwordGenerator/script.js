function generatePassword(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    return password;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copyButton');
  
    copyButton.addEventListener('click', function() {
      const generatedPassword = document.getElementById('generatedPassword');
      
      generatedPassword.select();
      document.execCommand('copy');
  
      alert('Password copied to clipboard!');
    });
  
    document.getElementById('generateButton').addEventListener('click', function() {
      const length = document.getElementById('passwordLength').value;
      const generatedPassword = generatePassword(length);
      document.getElementById('generatedPassword').value = generatedPassword;
    });
  });
  