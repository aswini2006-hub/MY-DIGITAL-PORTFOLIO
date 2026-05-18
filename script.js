function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

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

const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollTop.style.display = window.scrollY > 350 ? "block" : "none";
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", event => {
  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";
});

document.addEventListener("click", event => {
  for (let i = 0; i < 8; i++) {
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");

    const randomX = Math.random() * 50 - 25;
    const randomY = Math.random() * 50 - 25;

    sparkle.style.left = event.clientX + randomX + "px";
    sparkle.style.top = event.clientY + randomY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 700);
  }
});

const resourceSearch = document.getElementById("resourceSearch");
const resourceCards = document.querySelectorAll(".resource-card");

resourceSearch.addEventListener("input", () => {
  const searchValue = resourceSearch.value.toLowerCase();

  resourceCards.forEach(card => {
    const cardData = card.dataset.name.toLowerCase();
    const cardText = card.innerText.toLowerCase();

    if (cardData.includes(searchValue) || cardText.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

const footerCopy = document.querySelector(".footer-copy");

if (footerCopy) {
  const currentYear = new Date().getFullYear();
  footerCopy.innerHTML = `© ${currentYear} Aswini A. All Rights Reserved.`;
}