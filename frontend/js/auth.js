// ===============================
//        AUTHENTICATION JS
// ===============================

// Fake user database
const USERS = {
    "student123": "password123",
    "admin": "admin123"
};

// LOGIN FUNCTION
function loginUser() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorBox = document.getElementById("login-error");

    if (username === "" || password === "") {
        errorBox.innerText = "All fields are required.";
        return;
    }

    if (USERS[username] && USERS[username] === password) {
        localStorage.setItem("examUser", username);
        window.location.href = "instructions.html";
    } else {
        errorBox.innerText = "Invalid credentials. Try again.";
    }
}

// AUTO‑REDIRECT IF LOGGED IN
if (localStorage.getItem("examUser")) {
    if (window.location.pathname.includes("login")) {
        window.location.href = "instructions.html";
    }
}
