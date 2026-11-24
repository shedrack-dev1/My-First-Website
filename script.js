let joinButton = document.getElementById("join-button");

joinButton.addEventListener("click", function() {
    alert("Welcome to Shedrack Football Academy! Registration is coming soon.");
});

let playersButton = document.getElementById("players-button");

playersButton.addEventListener("click", function() {
    alert("Welcome to Shedrack Football Academy! Meet our players.");
});

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let age = Number(document.getElementById("player-age").value);
    if (age >= 18 && age <= 35) {
    alert("Age accepted!");
} else {
    alert("Age not accepted!");
}
});
let registrationMessage = document.getElementById("registration-message");
registrationMessage.textContent = "Welcome to Shedrack Football Academy!";

