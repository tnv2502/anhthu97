const form = document.querySelector("form");
const emailInput = form.querySelector(".email input");
const passwordInput = form.querySelector(".password input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  if (email === "han1306" && password === "adminhan") {
    window.location.href = "index.html";
  } else {
    alert("Incorrect email or password. Please try again.");
  }
});
