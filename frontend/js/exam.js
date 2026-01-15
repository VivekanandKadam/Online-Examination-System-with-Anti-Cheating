const session = JSON.parse(localStorage.getItem("session"));
if (!session || session.role !== "student") location.href = "login.html";

const paper = JSON.parse(localStorage.getItem("paper")) || [];
let i = 0, score = 0;

function next() {
    score++; // demo scoring
    i++;
    if (i >= paper.length) {
        let results = JSON.parse(localStorage.getItem("results")) || [];
        results.push({ student: session.id, score });
        localStorage.setItem("results", JSON.stringify(results));
        location.href = "result.html";
    }
}
