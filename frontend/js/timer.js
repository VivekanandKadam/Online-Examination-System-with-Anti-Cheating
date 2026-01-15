let time = 60; // 1 minute

function startExam() {
  document.documentElement.requestFullscreen();
  startTimer();
}

function startTimer() {
  let interval = setInterval(() => {
    document.getElementById("timer").innerText =
      "Time Left: " + time + " seconds";
    time--;

    if (time < 0) {
      clearInterval(interval);
      alert("Time up! Exam auto submitted.");
      submitExam();
    }
  }, 1000);
}
