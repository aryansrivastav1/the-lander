// Dark mode toggle functionality
const toggleModeButton = document.getElementById("toggleMode");

// Load the user's preferred mode from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("theme");

  if (savedMode === "dark-mode") {
    document.body.classList.add("dark-mode");
    toggleModeButton.textContent = "🌞"; // Set light mode icon if dark mode is active
  } else {
    toggleModeButton.textContent = "🌚"; // Set dark mode icon if light mode is active
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
    toggleModeButton.textContent = "🌚"; // Dark mode icon
    localStorage.setItem("theme", "light-mode"); // Save light mode preference
  }
});

function isValidEmail(email) {
  // Regular expression for basic email validation
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

// Hamburger Menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("navigation");
  const body = document.body;

  hamburgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    body.classList.toggle("menu-active");
  });

  // Close the menu when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !hamburgerMenu.contains(event.target) &&
      !navLinks.contains(event.target)
    ) {
      navLinks.classList.remove("active");
      body.classList.remove("menu-active");
    }
  });
});