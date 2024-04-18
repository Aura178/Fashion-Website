document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const ageInput = document.getElementById('age');
    const countryInput = document.getElementById('country');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateInputs()) {
        errorMessage.textContent = '';
      } else {
        errorMessage.textContent = 'Please fill in all fields.';
      }
    });
  
    function validateInputs() {
      return (
        validateInput(fullNameInput) &&
        validateInput(emailInput) &&
        validateInput(phoneInput) &&
        validateInput(ageInput) &&
        validateInput(countryInput) &&
        validateInput(usernameInput) &&
        validateInput(passwordInput)
      );
    }
  
    function validateInput(input) {
      return input.value.trim() !== '';
    }
  });