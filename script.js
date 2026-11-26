
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

    if (isExpanded) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});
let navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});
let sections = document.querySelectorAll(
    "#home, #about, #mission-vision, #registration, #contact"
);

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        let sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
let backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
