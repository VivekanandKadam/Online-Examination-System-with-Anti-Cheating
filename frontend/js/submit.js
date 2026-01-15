// ===============================
//        SUBMIT / RESULT JS
// ===============================

const urlParams = new URLSearchParams(window.location.search);

// If cheating happened
if (urlParams.get("cheated") === "true") {
    document.getElementById("result-text").innerHTML = `
        ❌ Exam Failed (Cheating Detected)
    `;
} else {
    const answers = JSON.parse(localStorage.getItem("answers") || "{}");
    let score = 0;

    questions.forEach(q => {
        if (answers[q.id] == q.answer) score++;
    });

    document.getElementById("result-text").innerHTML = `
        ✅ Your Score: <strong>${score}/${questions.length}</strong>
    `;
}

// CLEAR SESSION
localStorage.removeItem("examUser");
