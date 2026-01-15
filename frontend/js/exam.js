// ===============================
//          EXAM JS
// ===============================

const questions = [
    {
        id: 1,
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Stack", "LinkedList", "Tree"],
        answer: 1
    },
    {
        id: 2,
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        answer: 1
    }
];

let index = 0;
let selectedAnswers = {};
let tabSwitchCount = 0;

// TAB SWITCH DETECTION
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        tabSwitchCount++;
        if (tabSwitchCount >= 2) {
            alert("Multiple tab switches detected. Exam terminated.");
            window.location.href = "result.html?cheated=true";
        }
    }
});

// LOAD QUESTION
function loadQuestion() {
    let q = questions[index];
    document.getElementById("question-text").innerText = q.question;

    let optionsHTML = "";
    q.options.forEach((opt, i) => {
        optionsHTML += `
            <label class="option">
                <input type="radio" name="opt" value="${i}" 
                ${selectedAnswers[q.id] == i ? "checked" : ""}>
                ${opt}
            </label>
        `;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function nextQuestion() {
    saveAnswer();
    if (index < questions.length - 1) {
        index++;
        loadQuestion();
    }
}

function prevQuestion() {
    saveAnswer();
    if (index > 0) {
        index--;
        loadQuestion();
    }
}

function saveAnswer() {
    const selected = document.querySelector("input[name='opt']:checked");
    if (selected) {
        selectedAnswers[questions[index].id] = selected.value;
    }
}

// START TIMER
let timeLeft = 60; // 1 minute for demo
let timer = setInterval(() => {
    document.getElementById("timer").innerText = timeLeft + "s";
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);
        submitExam();
    }
}, 1000);

// SUBMIT
function submitExam() {
    saveAnswer();
    localStorage.setItem("answers", JSON.stringify(selectedAnswers));
    window.location.href = "result.html";
}

loadQuestion();
