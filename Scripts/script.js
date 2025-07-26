// script.js

// Sidebar logic (Note: may not be used in index.html)
const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
const main = document.getElementById('mainpage');

if (sidebar && sidebarClose && main) {
    sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));
    main.addEventListener("click", () => sidebar.classList.add('close'));
}

if (menu && menuItems.length > 0 && subMenuTitles.length > 0) {
    menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            menu.classList.add("submenu-active");
            item.classList.add("show-submenu");
            menuItems.forEach((item2, index2) => {
                if (index !== index2) {
                    item2.classList.remove("show-submenu");
                }
            });
        });
    });

    subMenuTitles.forEach((title) => {
        title.addEventListener("click", () => {
            menu.classList.remove("submenu-active");
        });
    });
}

// Main DOMContentLoaded listener
document.addEventListener('DOMContentLoaded', () => {
    // Cursor effect
    const cursorEffect = document.getElementById('cursor-effect');
    if (cursorEffect) {
        let mouseX = 0, mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animate() {
            const effectWidth = 500;
            const effectHeight = 500;
            const minX = 0;
            const minY = 0;
            const maxX = window.innerWidth - effectWidth;
            const maxY = window.innerHeight - effectHeight;
            let x = mouseX - effectWidth / 2;
            let y = mouseY - effectHeight / 2;
            x = Math.max(minX, Math.min(x, maxX));
            y = Math.max(minY, Math.min(y, maxY));
            cursorEffect.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(animate);
        }

        animate();
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.boxShadow = 'none';
            }
        }
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('checkbox');
    const body = document.body;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.removeAttribute('data-theme');
            themeToggle.checked = false;
        } else {
            body.setAttribute('data-theme', 'light');
            themeToggle.checked = true;
        }
    };
    // Load saved theme from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        applyTheme(currentTheme);
    } else {
        applyTheme('dark'); // Default theme
    }

    themeToggle.addEventListener('change', function () {
        const newTheme = this.checked ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });


    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    /*
    // Typing effect (commented out as in original)
    const aboutTextElement = document.getElementById('about-text');
    if (aboutTextElement) {
        const aboutText = `
    My name is Ahmed Sayedahmed, but you can call me Ahmed Son.
    I am a computer engineer with a passion for:
      - AWS servers
      - Cybersecurity
      - Computer automation
      - General coding
    My goal is to use my skills to solve complex problems
    and create innovative solutions :).
        `;
        let index = 0;
    
        function type() {
            if (index < aboutText.length) {
                aboutTextElement.innerHTML += aboutText.charAt(index);
                index++;
                setTimeout(type, 90); // Adjust the typing speed here
            }
        }
    
        type();
    }
    */
});