let timeInSeconds = 60;
let countdown;

function startCountdown() {
    const timerElement = document.getElementById("timer");

    countdown = setInterval(function () {
        let minutes = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerElement.textContent = minutes + ":" + seconds;

        if (timeInSeconds <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
        } else {
            timeInSeconds--;
        }
    }, 1000);
}

document.getElementById("startButton").addEventListener("click", function() {
    startCountdown();
    this.disabled = true; 
});