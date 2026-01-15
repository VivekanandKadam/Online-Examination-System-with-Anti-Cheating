/* =========================================
   FULLSCREEN + ANTI-CHEATING HANDLER
========================================= */

// Only students should trigger fullscreen exam mode
const session = JSON.parse(localStorage.getItem("session"));

if (!session || session.role !== "student") {
    // Non-students should not be here
    alert("Unauthorized access");
    window.location.href = "login.html";
}

// Request fullscreen when exam starts
function enableFullScreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(); // Safari
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen(); // IE11
    }
}

// Detect fullscreen exit (cheating attempt)
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        handleCheating("Exited fullscreen mode");
    }
});

// Detect tab switch / window blur
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        handleCheating("Switched tab or minimized window");
    }
});

// Central cheating handler
function handleCheating(reason) {
    alert("Cheating detected: " + reason + ". Exam will be submitted.");

    // Optional: store cheating reason
    localStorage.setItem("cheating", reason);

    // Redirect to result page
    window.location.href = "result.html";
}
