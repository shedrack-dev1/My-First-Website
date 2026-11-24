
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
});

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let age = Number(document.getElementById("player-age").value);

    if (age >= 18 && age <= 35) {
        alert("Age accepted!");
        registrationMessage.textContent = "Congratulations! Your age meets our registration requirements.";
    } else {
        alert("Age not accepted!");
        registrationMessage.textContent = "Sorry, you do not meet our age requirements.";
    }
});
