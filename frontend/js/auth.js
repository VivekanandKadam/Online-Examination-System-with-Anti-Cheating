// INITIAL USERS (sirf first time ke liye)
if (!localStorage.getItem("users")) {
    const users = {
        "ADMIN001": { role: "admin", password: "admin123", active: true },
        "TCH101":   { role: "teacher", password: "teach123", active: true },
        "STD201":   { role: "student", password: "stud123", active: true }
    };

    localStorage.setItem("users", JSON.stringify(users));
}



const SUPER_ADMINS = ["ROOT_ADMIN_01"];

let users = JSON.parse(localStorage.getItem("users")) || {
    "ADMIN001": { role: "admin", password: "admin123", active: true },
    "TCH101": { role: "teacher", password: "teach123", active: true },
    "STD201": { role: "student", password: "stud123", active: true }
};

localStorage.setItem("users", JSON.stringify(users));

function login() {
    const id = userId.value.trim();
    const pwd = password.value.trim();
    const role = document.getElementById("role").value;
    const error = document.getElementById("error");

    if (!id || !pwd || !role) {
        error.innerText = "All fields required";
        return;
    }

    if (SUPER_ADMINS.includes(id)) {
        localStorage.setItem("session", JSON.stringify({ id, role: "superadmin" }));
        location.href = "admin.html";
        return;
    }

    if (!users[id] || users[id].password !== pwd || users[id].role !== role || !users[id].active) {
        error.innerText = "Invalid credentials";
        return;
    }

    localStorage.setItem("session", JSON.stringify({ id, role }));

    if (role === "admin") location.href = "admin.html";
    if (role === "teacher") location.href = "teacher.html";
    if (role === "student") location.href = "student-dashboard.html";
}

function forgotPassword() {
    const id = prompt("Enter your User ID");
    let users = JSON.parse(localStorage.getItem("users"));

    if (!users[id]) return alert("User not found");

    alert("Password reset request sent to Admin (demo)");
}
