const session = JSON.parse(localStorage.getItem("session"));
if (!session || (session.role !== "admin" && session.role !== "superadmin")) {
    location.href = "login.html";
}

function createUser() {
    let users = JSON.parse(localStorage.getItem("users")) || {};
    users[uid.value] = {
        role: urole.value,
        password: upass.value,
        active: true
    };
    localStorage.setItem("users", JSON.stringify(users));
    alert("User saved");
}

function deactivateUser() {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users[uid.value]) {
        users[uid.value].active = false;
        localStorage.setItem("users", JSON.stringify(users));
        alert("User deactivated");
    }
}

function viewQuestions() {
    qview.innerText = JSON.stringify(
        JSON.parse(localStorage.getItem("paper")) || [],
        null,
        2
    );
}

function viewResults() {
    rview.innerText = JSON.stringify(
        JSON.parse(localStorage.getItem("results")) || [],
        null,
        2
    );
}
