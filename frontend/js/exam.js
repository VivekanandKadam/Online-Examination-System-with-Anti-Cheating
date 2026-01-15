let warnings = 0;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    warnings++;
    alert("Warning " + warnings + ": Tab switch detected!");

    if (warnings >= 3) {
      alert("Exam auto submitted due to cheating!");
      submitExam();
    }
  }
});

function submitExam() {
  let score = 0;
  let q1 = document.querySelector('input[name="q1"]:checked');

  if (q1 && q1.value === "correct") {
    score++;
  }

  localStorage.setItem("score", score);
  window.location.href = "result.html";
}
