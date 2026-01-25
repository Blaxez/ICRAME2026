// Initialize Lucide Icons
lucide.createIcons();

// Reveal Animation on Scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Tab Switching Logic for About Page
const tabConference = document.getElementById("tab-conference");
const tabUniversity = document.getElementById("tab-university");
const contentConference = document.getElementById("content-conference");
const contentUniversity = document.getElementById("content-university");

function switchToConference() {
  if (
    tabConference &&
    tabUniversity &&
    contentConference &&
    contentUniversity
  ) {
    // Update tab buttons
    tabConference.classList.add("active", "bg-primary", "text-white");
    tabConference.classList.remove(
      "bg-transparent",
      "text-textMuted",
      "border",
      "border-border",
    );

    tabUniversity.classList.remove("active", "bg-primary", "text-white");
    tabUniversity.classList.add(
      "bg-transparent",
      "text-textMuted",
      "border",
      "border-border",
    );

    // Update content visibility
    contentConference.classList.remove("hidden");
    contentUniversity.classList.add("hidden");
  }
}

function switchToUniversity() {
  if (
    tabConference &&
    tabUniversity &&
    contentConference &&
    contentUniversity
  ) {
    // Update tab buttons
    tabUniversity.classList.add("active", "bg-primary", "text-white");
    tabUniversity.classList.remove(
      "bg-transparent",
      "text-textMuted",
      "border",
      "border-border",
    );

    tabConference.classList.remove("active", "bg-primary", "text-white");
    tabConference.classList.add(
      "bg-transparent",
      "text-textMuted",
      "border",
      "border-border",
    );

    // Update content visibility
    contentUniversity.classList.remove("hidden");
    contentConference.classList.add("hidden");
  }
}

// Add event listeners
if (tabConference) {
  tabConference.addEventListener("click", switchToConference);
}

if (tabUniversity) {
  tabUniversity.addEventListener("click", switchToUniversity);
}

// Countdown Timer
function updateCountdown() {
  const targetDate = new Date("April 01, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerText = days.toString().padStart(2, "0");
    if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, "0");
    if (minutesEl) minutesEl.innerText = minutes.toString().padStart(2, "0");
    if (secondsEl) secondsEl.innerText = seconds.toString().padStart(2, "0");
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
