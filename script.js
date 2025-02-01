document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is loaded!");

    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const countdownContainer = document.getElementById("countdownContainer");
    const countdownElement = document.getElementById("countdown");
    const messageContainer = document.getElementById("countdownContainer"); // Referring to message container

    if (yesButton && noButton) {
        yesButton.addEventListener("click", function() {
            console.log("Yes button clicked");

            // Show the "Poprawna odpowiedź" message
            messageContainer.classList.remove("hidden");
            
            // Start the countdown after showing the message
            startCountdown();
        });

        noButton.addEventListener("click", function() {
            console.log("No button clicked");
            // This will redirect to error.html
            window.location.href = "error.html";
        });
    } else {
        console.error("Buttons not found! Check your HTML.");
    }

    function startCountdown() {
        const targetDate = new Date(new Date().getFullYear(), 1, 14); // February 14

        function updateCountdown() {
            const now = new Date();
            const timeLeft = targetDate - now;

            if (timeLeft <= 0) {
                // Check if it's February 14th
                if (now.getMonth() === 1 && now.getDate() === 14) {
                    window.location.href = "walentynki.html"; // Redirect to the walentynki.html page
                } else {
                    document.body.innerHTML = `<div class="valentine-screen">Happy Valentine's Day! ❤️</div>`;
                }
            } else {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                countdownElement.innerHTML = `Walentynki za: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            }
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // Check if today's date is February 14th
    const now = new Date();
    if (now.getMonth() === 1 && now.getDate() === 14) {
        // Redirect to the walentynki.html page
        window.location.href = "walentynki.html";
    }
});
