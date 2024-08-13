// script.js

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
    
        type();
});

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const numNodes = 50;  // Adjust this for more or fewer nodes
    const connectionDistance = 150;  // Maximum distance for connecting nodes

    // Node class
    class Node {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(147, 177, 166, 0.5)';  // Using your accent color
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Create nodes
    for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw nodes
        nodes.forEach(node => {
            node.update();
            node.draw();
        });

        // Draw connections
        ctx.strokeStyle = 'rgba(147, 177, 166, 0.15)';  // Using your accent color
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

    // Resize canvas when window is resized
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const indicator = document.getElementById('nav-indicator');

    function setIndicator(element) {
        indicator.style.width = `${element.offsetWidth}px`;
        indicator.style.left = `${element.offsetLeft}px`;
    }

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            navItems.forEach(i => i.classList.remove('active'));
            e.currentTarget.classList.add('active');
            setIndicator(e.currentTarget);
        });
    });

    // Set initial position
    setIndicator(navItems[0]);
});