
let joinButton = document.getElementById("join-button");

joinButton.addEventListener("click", function() {
    alert("Welcome to Shedrack Football Academy! Registration is coming soon.");
});

let playersButton = document.getElementById("players-button");

playersButton.addEventListener("click", function() {
    alert("Welcome to Shedrack Football Academy! Meet our players.");
});

let registrationMessage = document.getElementById("registration-message");

document.getElementById("player-name").addEventListener("input", function() {
    registrationMessage.textContent = "";
    registrationMessage.classList.remove("success-message");
    registrationMessage.classList.remove("error-message");
});

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let age = Number(document.getElementById("player-age").value);

    registrationMessage.classList.remove("success-message");
    registrationMessage.classList.remove("error-message");

    if (age >= 18 && age <= 35) {
        registrationMessage.textContent = "Congratulations! Your age meets our registration requirements.";

        registrationMessage.classList.add("success-message");

    } else {
        registrationMessage.textContent = "Sorry, you do not meet our age requirements.";

        registrationMessage.classList.add("error-message");
    }

    document.getElementById("registration-form").reset();
});
let menuToggle = document.getElementById("menu-toggle");
let navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("show");

    let isExpanded = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isExpanded);
});
