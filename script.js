const notes = [
  "You are my favorite part of every day.",
  "Your heart is beautiful, and I am grateful for your love.",
  "I appreciate your patience, your grace, and your strength.",
  "With you, even ordinary moments feel magical.",
  "Thank you for loving me and believing in me."
];

const noteElement = document.getElementById("loveNote");
const noteButton = document.getElementById("noteButton");
const heartsContainer = document.getElementById("floatingHearts");
const photoSlides = Array.from(document.querySelectorAll(".photo-card"));

let noteIndex = 0;
let slideIndex = 0;

function showNextNote() {
  noteIndex = (noteIndex + 1) % notes.length;

  noteElement.style.opacity = "0";
  setTimeout(() => {
    noteElement.textContent = notes[noteIndex];
    noteElement.style.opacity = "1";
  }, 180);
}

function spawnHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";

  const left = Math.random() * 100;
  const duration = 5000 + Math.random() * 4000;
  const size = 8 + Math.random() * 12;

  heart.style.left = `${left}%`;
  heart.style.bottom = "-20px";
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.animationDuration = `${duration}ms`;

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration);
}

function showSlide(index) {
  photoSlides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === index);
  });
}

function nextSlide() {
  if (photoSlides.length === 0) {
    return;
  }

  slideIndex = (slideIndex + 1) % photoSlides.length;
  showSlide(slideIndex);
}

noteButton.addEventListener("click", showNextNote);

if (photoSlides.length > 0) {
  showSlide(0);
  setInterval(nextSlide, 3200);
}

setInterval(spawnHeart, 420);
for (let i = 0; i < 12; i += 1) {
  setTimeout(spawnHeart, i * 130);
}
