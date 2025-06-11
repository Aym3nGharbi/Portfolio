// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Toggle active class on navbar links
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 60;

    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

// Scroll reveal animation (simple fade-in effect)
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const reveals = document.querySelectorAll(".reveal");

function handleScroll() {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementBottom = el.getBoundingClientRect().bottom;

        const isVisible = elementTop < windowHeight && elementBottom > 0;

        if (isVisible) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", handleScroll);


// === Bouton "Retour en haut" ===
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});