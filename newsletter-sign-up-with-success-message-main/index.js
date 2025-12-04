document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const emailInput = document.getElementById("email");
  const emailError = document.querySelector(".email-error");
  const signupView = document.querySelector(".newsletter-signup");
  const successView = document.querySelector(".success-message");
  const userEmailDisplay = document.querySelector(".user-email-display");
  const dismissButton = document.querySelector(".dismiss-button");

  const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorMessage = "Valid email required";

  // --- Helper Functions --- //
  function toggleErrorState(isValid) {
    if (isValid) {
      emailInput.classList.remove("invalid");
      emailError.textContent = "";
    } else {
      emailInput.classList.add("invalid");
      emailError.textContent = errorMessage;
    }
  }

  function transitionToSuccess(email) {
    userEmailDisplay.textContent = email;

    signupView.classList.add("hidden");
    successView.classList.remove("hidden");
  }

  function handleSubmission(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const isValid = validEmailRegex.test(email);

    if (isValid) {
      toggleErrorState(true);
      transitionToSuccess(email);
    } else {
      toggleErrorState(false);
    }
  }

  function handleDismiss() {
    emailInput.value = "";
    userEmailDisplay.textContent = "";

    successView.classList.add("hidden");
    signupView.classList.remove("hidden");
  }

  // --- Event Listeners --- //
  signupForm.addEventListener("submit", handleSubmission);

  dismissButton.addEventListener("click", handleDismiss);

  emailInput.addEventListener("input", () => {
    if (
      emailInput.classList.contains("invalid") &&
      validEmailRegex.test(emailInput.value.trim())
    ) {
      toggleErrorState(true);
    }
  });
});
