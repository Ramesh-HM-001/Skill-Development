const form = document.getElementById("loginForm");
const inputs = form.querySelectorAll("input");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

// Validate all fields
function validateFields() {
  let allValid = true;

  inputs.forEach(input => {
    const errorMsg = input.nextElementSibling;
    if (input.type !== "password") {
      if (!input.value.trim()) {
        errorMsg.textContent = `Please enter ${input.id}`;
        allValid = false;
      } else if (input.id === "phone" && !/^[0-9]{10}$/.test(input.value)) {
        errorMsg.textContent = "Phone must be 10 digits";
        allValid = false;
      } else if (input.id === "email" && !input.validity.valid) {
        errorMsg.textContent = "Invalid email";
        allValid = false;
      } else {
        errorMsg.textContent = "";
      }
    } else {
      if (!input.value.trim()) {
        errorMsg.textContent = "Please enter password";
        allValid = false;
      } else if (input.value.length < 6) {
        errorMsg.textContent = "Password min 6 chars";
        allValid = false;
      } else {
        errorMsg.textContent = "";
      }
    }
  });

  loginBtn.disabled = !allValid;
}

inputs.forEach(input => input.addEventListener("input", validateFields));

// Show/Hide password
togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    password.type = "password";
    togglePassword.textContent = "Show";
  }
});

// Form submit
form.addEventListener("submit", e => {
  e.preventDefault();
  message.style.color = "green";
  message.textContent = "Login Successful!";
});
