document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("mode-toggle");
  const body = document.body;

  // Event listener to the Dark/Light Mode
  modeToggle.addEventListener("click", () => {
    // Switch between light and dark modes
    body.classList.toggle("light-mode");
  });
});
