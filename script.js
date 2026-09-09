const tips = [
  "Pick one important task and work on it for 25 uninterrupted minutes.",
  "Turn off nonessential notifications while you work on your top priority.",
  "Break a large task into one small next step you can finish today.",
  "Write tomorrow's most important task down before you end your day.",
  "Take a five-minute break after a focused work session to reset your attention."
];

const tipButton = document.getElementById("tip-button");
const tipText = document.getElementById("tip-text");
const signupForm = document.getElementById("signup-form");
const formMessage = document.getElementById("form-message");

function showNewTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipText.textContent = tips[randomIndex];
}

tipButton.addEventListener("click", showNewTip);

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const userName = nameInput.value.trim();

  formMessage.textContent = `Thanks, ${userName}! You're on the FocusFlow list.`;
  signupForm.reset();
});
