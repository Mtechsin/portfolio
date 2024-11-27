// script.js
const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
const main = document.getElementById('mainpage');


sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));
main.addEventListener("click", () => sidebar.classList.add('close'));

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

console.log(menuItems, subMenuTitles);

document.addEventListener('DOMContentLoaded', () => {
    const cursorEffect = document.getElementById('cursor-effect');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        // Effect dimensions
        const effectWidth = 500;
        const effectHeight = 500;

        // Calculate the position, keeping the effect within the viewport
        const minX = 0;
        const minY = 0;
        const maxX = window.innerWidth - effectWidth;
        const maxY = window.innerHeight - effectHeight;

        // Center the effect on the cursor
        let x = mouseX - effectWidth / 2;
        let y = mouseY - effectHeight / 2;

        // Constrain the effect within the viewport
        x = Math.max(minX, Math.min(x, maxX));
        y = Math.max(minY, Math.min(y, maxY));

        cursorEffect.style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(animate);
    }
    
    animate();

    /*
    // Resize event listener to adjust maxX and maxY if needed
        // Typing effect
        const aboutTextElement = document.getElementById('about-text');
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
    
        type();*/
});
