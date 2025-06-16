document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(link.hash);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 60;

    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (
            section &&
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});

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
window.addEventListener("load", handleScroll);

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});