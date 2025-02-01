document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is loaded!");

    document.getElementById("yesButton").addEventListener("click", function() {
        console.log("Yes button clicked");
        document.getElementById("countdownContainer").classList.remove("hidden");
        startCountdown();
    });

    document.getElementById("noButton").addEventListener("click", function() {
        console.log("No button clicked");
        window.location.href = "error.html";
    });

    function startCountdown() {
        const targetDate = new Date(new Date().getFullYear(), 1, 14); // February 14
        const countdownElement = document.getElementById("countdown");

        function updateCountdown() {
            const now = new Date();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                document.body.innerHTML = `<div class="valentine-screen">Happy Valentine's Day! ❤️</div>`;
            } else {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                countdownElement.innerHTML = `Countdown to Valentine's Day: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});
