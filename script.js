// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  // Basic CSS for mobile menu visibility if active
  if (navLinks.classList.contains("active")) {
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "70px";
    navLinks.style.left = "0";
    navLinks.style.width = "100%";
    navLinks.style.background = "#fff";
    navLinks.style.padding = "20px";
  } else {
    navLinks.style.display = "none";
  }
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Reveal animations on scroll (Simple)
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".service-card");
  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// LIGHTBOX SCRIPT
const images = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// SCROLL ANIMATION
const animatedItems = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

animatedItems.forEach((item) => observer.observe(item));

// WhatsApp Integration
function sendWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Empty validation
  if (!name || !email || !message) {
    alert("Please fill all fields");
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // WhatsApp message
  const whatsappMessage =
    `Hello Ganapati Events,%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Message: ${message}`;

  const phoneNumber = "919113303790";
  const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  window.open(url, "_blank");

  // Reset form
  document.getElementById("contactForm").reset();
}
