// Smooth scroll
        document.querySelectorAll('.scroll-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Active nav link
        const navLinks = document.querySelectorAll("nav ul li a");
        window.addEventListener("scroll", () => {
            const fromTop = window.scrollY + 80;
            navLinks.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        });

        // Reveal on scroll
        const reveals = document.querySelectorAll(".reveal");
        function handleScroll() {
            reveals.forEach(el => {
                const top = el.getBoundingClientRect().top;
                const bottom = el.getBoundingClientRect().bottom;
                if (top < window.innerHeight && bottom > 0) {
                    el.classList.add("active");
                }
            });
        }
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("load", handleScroll);

        // Scroll to top
        const scrollBtn = document.getElementById("scrollToTop");
        window.addEventListener("scroll", () => {
            scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });
        scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

        // Hamburger menu
        const hamburger = document.getElementById('hamburger');
        const navUl = document.querySelector('nav ul');
        hamburger.addEventListener('click', () => {
            navUl.classList.toggle('open');
            hamburger.classList.toggle('active');
        });
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navUl.classList.remove('open');
                hamburger.classList.remove('active');
            });
        });

        // Typing effect for greeting
        const greetingEl = document.querySelector('.greeting .mono');
        const text = '> Hello, World.';
        greetingEl.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                greetingEl.textContent += text[i++];
                setTimeout(type, 60);
            }
        }
        window.addEventListener('load', () => setTimeout(type, 400));