// =============================
// AK GROUP OF TECHNOLOGIES
// public/js/app.js
// =============================

// Loading Animation
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Smooth Scrolling
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card, .project").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Button Hover Effect
document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-5px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0) scale(1)";
    });

});

// Contact Form
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}

// Typewriter Effect
const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {

    const text = heroTitle.textContent;

    heroTitle.textContent = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            heroTitle.textContent += text.charAt(i);

            i++;

            setTimeout(typeWriter, 40);

        }

    }

    typeWriter();

}

// Scroll to Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#00E5FF";
topButton.style.color = "#050816";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

console.log("AK GROUP OF TECHNOLOGIES Website Loaded Successfully");
