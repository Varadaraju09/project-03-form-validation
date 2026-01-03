const form = document.getElementById("signupForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Input values
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  let isValid = true;

  // Clear previous messages
  document.querySelectorAll(".error").forEach(el => el.innerText = "");
  successMsg.innerText = "";

  // Name validation
  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  // Email validation
  if (!email.value.includes("@") || !email.value.includes(".")) {
    showError(email, "Enter a valid email");
    isValid = false;
  }

  // Password validation
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  // Confirm password
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  // Success
  if (isValid) {
    successMsg.innerText = "Signup successful!";
    form.reset();
  }
});

function showError(input, message) {
  input.nextElementSibling.innerText = message;
}
