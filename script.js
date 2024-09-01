// Dark mode toggle functionality
const toggleModeButton = document.getElementById("toggleMode");

// Load the user's preferred mode from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("theme");

  if (savedMode === "dark-mode") {
    document.body.classList.add("dark-mode");
    toggleModeButton.textContent = "🌞"; // Set light mode icon if dark mode is active
  } else {
    toggleModeButton.textContent = "🌙"; // Set dark mode icon if light mode is active
  }
});

// Toggle dark mode class on body
toggleModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text based on current mode
  if (document.body.classList.contains("dark-mode")) {
    toggleModeButton.textContent = "🌞"; // Light mode icon
    localStorage.setItem("theme", "dark-mode"); // Save dark mode preference
  } else {
    toggleModeButton.textContent = "🌙"; // Dark mode icon
    localStorage.setItem("theme", "light-mode"); // Save light mode preference
  }
});

function isValidEmail(email) {
  // Regular expression for basic email validation
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

// Variable to store the setTimeout timer
let errorTimeout;

// Event listener for form submission
document.querySelector("#openPopupBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("email").value.trim();
  var query = document.getElementById("message").value.trim();

  // Check if any field is empty
  if (firstName === "" || lastName === "" || email === "" || query === "") {
    showError("Please fill in all the details.");
    return;
  }

  // Validate email format if all fields are filled
  if (!isValidEmail(email)) {
    showError("Please enter a valid email address.");
    return;
  }

  // If all validations pass, show the popup
  document.querySelector("#popup").classList.add("active");
  document.querySelector("#popup-overlay").classList.add("active");
  document.querySelector("body").classList.add("popup-active");
  hideError(); // Hide error message if it's visible
});

// Function to show error message
function showError(message) {
  var formError = document.querySelector("#formError");
  formError.textContent = message;
  formError.style.visibility = "visible";

  // Clear existing timeout
  clearTimeout(errorTimeout);

  // Set new timeout to hide the error message after 5 seconds
  errorTimeout = setTimeout(function () {
    formError.style.visibility = "hidden";
  }, 3000);
}

// Function to hide error message
function hideError() {
  var formError = document.querySelector("#formError");
  formError.style.visibility = "hidden";
}

// Event listener for OKAY button in the popup
document.querySelector("#closePopupBtn").addEventListener("click", function () {
  document.querySelector("#popup").classList.remove("active");
  document.querySelector("#popup-overlay").classList.remove("active");
  document.querySelector("body").classList.remove("popup-active");
  document.querySelector("#form").reset();
});