// ===============================
//       FULLSCREEN HANDLER
// ===============================

// Request fullscreen
function startFullScreenMode() {
    let docElm = document.documentElement;

    if (docElm.requestFullscreen) docElm.requestFullscreen();
    else if (docElm.mozRequestFullScreen) docElm.mozRequestFullScreen();
    else if (docElm.webkitRequestFullscreen) docElm.webkitRequestFullscreen();
    else if (docElm.msRequestFullscreen) docElm.msRequestFullscreen();
}

// Detect exit fullscreen = cheating attempt
document.addEventListener("fullscreenchange", function () {
    if (!document.fullscreenElement) {
        alert("You exited fullscreen! Cheating attempt detected.");
        window.location.href = "result.html?cheated=true";
    }
});
