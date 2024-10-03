function countResults() {
  let totalQuestions = document.querySelectorAll(".question").length;
  let rightAnswers = 0;
  let wrongAnswers = 0;

  // Loop through each question and check the selected answer
  for (let i = 1; i <= totalQuestions; i++) {
    let selectedValue = document.querySelector(
      `input[name=q${i}]:checked`
    ).value;

    // Check if the selected answer is correct or wrong
    if (selectedValue === "correct") {
      rightAnswers++;
    } else if (selectedValue === "wrong") {
      wrongAnswers++;
    }
  }

  // Display the results
  let resultElement = document.getElementById("result");
  resultElement.textContent = `Right Answers: ${rightAnswers} | Wrong Answers: ${wrongAnswers}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("mode-toggle");
  const body = document.body;

  modeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
  });
});
