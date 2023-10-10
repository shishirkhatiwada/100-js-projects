document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var birthDate = document.getElementById("birthDate").value;
    var age = calculateAge(birthDate);
    var result = document.getElementById("result");
    result.textContent = "Your age is: " + age;
  });
  
  function calculateAge(birthDate) {
    var today = new Date();
    var birthDate = new Date(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Check if the birth month is ahead of the current month
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }