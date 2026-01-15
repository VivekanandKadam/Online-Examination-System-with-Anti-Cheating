const session = JSON.parse(localStorage.getItem("session"));
if (!session || session.role !== "teacher") location.href = "login.html";

function addQuestion() {
    let paper = JSON.parse(localStorage.getItem("paper")) || [];
    paper.push({
        q: q.value,
        options: [a.value, b.value, c.value, d.value],
        ans: ans.value
    });
    localStorage.setItem("paper", JSON.stringify(paper));
    alert("Question added");
}
