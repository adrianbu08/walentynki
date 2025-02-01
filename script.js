document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is loaded!");

    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const countdownContainer = document.getElementById("countdownContainer");
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.createElement("p");  // Create a message element dynamically

    // Check if redirection has already occurred in the current session
    if (sessionStorage.getItem("hasRedirected") === "true") {
        // If already redirected, skip the countdown and redirect logic
        return;
    }

    if (yesButton && noButton) {
        yesButton.addEventListener("click", function() {
            console.log("Yes button clicked");

            // Show the "Poprawna odpowiedź" message
            countdownContainer.classList.remove("hidden");
            countdownContainer.appendChild(messageElement);  // Append the message

            // Start the countdown after the message is shown
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
                // Only redirect if it's the correct date and hasn't been redirected yet
                if (now.getMonth() === 1 && now.getDate() === 14) {
                    sessionStorage.setItem("hasRedirected", "true");  // Store the redirection state
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

    // Check if today's date is February 14th only once when the page loads
    const now = new Date();
    if (now.getMonth() === 1 && now.getDate() === 14 && sessionStorage.getItem("hasRedirected") !== "true") {
        // Redirect to the walentynki.html page only once and store the state in sessionStorage
        sessionStorage.setItem("hasRedirected", "true");
        window.location.href = "walentynki.html";
    }
});
