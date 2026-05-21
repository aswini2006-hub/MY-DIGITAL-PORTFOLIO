function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

/* TYPING EFFECT */
const typingText = document.querySelector(".typing");

const words = [
  "Frontend Developer",
  "Web Designer",
  "BCA Graduate",
  "JavaScript Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (!deleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 55 : 95);
}

typeEffect();

/* SCROLL REVEAL */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* SCROLL TO TOP */
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollTop.style.display = window.scrollY > 350 ? "block" : "none";
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* CURSOR GLOW — fixed with requestAnimationFrame, no lag */
const cursorGlow = document.querySelector(".cursor-glow");
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", event => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function animateCursor() {
  cursorGlow.style.left = mouseX + "px";
  cursorGlow.style.top  = mouseY + "px";
  requestAnimationFrame(animateCursor);
}

animateCursor();

/* CLICK SPARKLES */
document.addEventListener("click", event => {
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");

    const randomX = Math.random() * 50 - 25;
    const randomY = Math.random() * 50 - 25;

    sparkle.style.left = event.clientX + randomX + "px";
    sparkle.style.top  = event.clientY + randomY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 700);
  }
});

/* RESOURCE SEARCH */
const resourceSearch = document.getElementById("resourceSearch");
const resourceCards  = document.querySelectorAll(".resource-card");

resourceSearch.addEventListener("input", () => {
  const searchValue = resourceSearch.value.toLowerCase();

  resourceCards.forEach(card => {
    const cardData = card.dataset.name.toLowerCase();
    const cardText = card.innerText.toLowerCase();

    card.style.display =
      (cardData.includes(searchValue) || cardText.includes(searchValue))
        ? "flex"
        : "none";
  });
});

/* FOOTER YEAR */
const footerCopy = document.querySelector(".footer-copy");
if (footerCopy) {
  footerCopy.innerHTML = `© ${new Date().getFullYear()} Aswini A. All Rights Reserved.`;
}
