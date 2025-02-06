// 1. Animated Typing Effect
document.addEventListener("DOMContentLoaded", () => {
    const text = "Your ultimate futuristic assistant for Discord!";
    let index = 0;
    const subtitle = document.querySelector("header p");

    function typeEffect() {
        if (index < text.length) {
            subtitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // speed = 100ms per character
        }
    }

    subtitle.innerHTML = ""; 
    typeEffect();
});

// 2. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// 3. Testimonial Rotator
const testimonials = [
    "HazelNut has completely changed how we manage our Discord server. The trivia and games are so much fun!",
    "The Pokedex feature is a game-changer for Pokémon fans. Highly recommend it!",
    "I love how interactive and engaging HazelNut is! Definitely a must-have bot.",
];

let currentTestimonial = 0;
function rotateTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    document.getElementById("testimonial").textContent = testimonials[currentTestimonial];
}

setInterval(rotateTestimonial, 5000);

// 4. FAQ Accordion (Expandable Answers)
document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("faq-answer");
        q.nextElementSibling.style.display = (q.nextElementSibling.style.display === "block") ? "none" : "block";
    });
});

// 5. Particles.js Background
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: { enable: true, value_area: 800 }
        },
        color: { value: '#e0aaff' },
        shape: {
            type: 'circle'
        },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            }
        },
        modes: {
            repulse: {
                distance: 100
            }
        }
    }
});

