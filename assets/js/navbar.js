/**
 * Modular Navbar Component
 * Renders the navigation bar and handles all related logic.
 */

(function () {
  const navbarContainer = document.getElementById("navbar-container");
  if (!navbarContainer) return;

  // 1. Define the Navbar HTML Structure
  const navbarHTML = `
    <nav
      id="navbar"
      class="sticky w-full z-50 border-b border-white/5 backdrop-blur-md transition-all duration-300 top-0"
    >
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-3 relative z-50 group">
          <img src="assets/logo.png" alt="ICRAME Logo" class="h-10 w-auto" />
          <div class="flex items-center font-display font-semibold text-2xl md:text-3xl text-white">
            <span class="tracking-tight">ICRAME</span>
            <span class="ml-2 text-primary opacity-90">2026</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden xl:flex items-center gap-4">
          <a href="index.html" class="nav-link text-sm font-medium transition-colors">Home</a>
          <a href="about.html" class="nav-link text-sm font-medium transition-colors">About</a>
          <a href="tracks.html" class="nav-link text-sm font-medium transition-colors">Tracks</a>
          <a href="download.html" class="nav-link text-sm font-medium transition-colors">Download</a>
          <a href="speakers.html" class="nav-link text-sm font-medium transition-colors">Speakers</a>
          <a href="committee.html" class="nav-link text-sm font-medium transition-colors">Committee</a>
          <a href="venue.html" class="nav-link text-sm font-medium transition-colors">Venue</a>

          <!-- More Dropdown -->
          <div class="relative group">
            <button
              id="more-dropdown-btn"
              class="text-sm font-medium text-textMuted hover:text-white transition-colors flex items-center gap-1"
            >
              More
              <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-hover:rotate-180"></i>
            </button>
            <div
              class="absolute top-full left-0 mt-2 w-48 py-2 bg-surface border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            >
              <a href="review.html" class="nav-link block px-4 py-2.5 text-sm hover:text-white hover:bg-white/5 transition-colors">Review Process</a>
              <a href="ethics.html" class="nav-link block px-4 py-2.5 text-sm hover:text-white hover:bg-white/5 transition-colors">Ethics & Policies</a>
              <a href="guidelines.html" class="nav-link block px-4 py-2.5 text-sm hover:text-white hover:bg-white/5 transition-colors">Guidelines</a>
              <a href="contact.html" class="nav-link block px-4 py-2.5 text-sm hover:text-white hover:bg-white/5 transition-colors">Contact</a>
              <a href="sponsorship.html" class="nav-link block px-4 py-2.5 text-sm hover:text-white hover:bg-white/5 transition-colors">Sponsorship</a>
              <div class="border-t border-border my-2"></div>
              <a href="CMT-Acknowledgement.html" class="nav-link block px-4 py-2.5 text-sm hover:text-white hover:bg-white/5 transition-colors">CMT Acknowledgement</a>
            </div>
          </div>
        </div>

        <!-- Desktop Actions -->
        <div class="hidden xl:flex items-center gap-4">
          <a
            href="https://cmt3.research.microsoft.com/ICRAME2026/Submission/Manage"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-primary text-white hover:bg-blue-600 text-sm font-medium px-5 py-2.5 rounded-full transition-colors whitespace-nowrap"
          >
            Submit Paper
          </a>
          <a
            href="registration.html"
            class="bg-white text-black hover:bg-slate-200 text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            Register
          </a>

          <!-- Theme Toggle Button (Desktop) -->
          <button id="theme-toggle" class="theme-toggle" aria-label="Toggle Theme">
            <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
            <i data-lucide="moon" class="w-5 h-5 block dark:hidden"></i>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          id="mobile-btn"
          class="xl:hidden text-white relative z-50 p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
        >
          <i data-lucide="menu" stroke-width="1.5" class="w-6 h-6"></i>
        </button>
      </div>

      <!-- Mobile Modal Navigation -->
      <div id="mobile-menu" class="mobile-menu-overlay">
        <div class="mobile-menu-container">
          <!-- Close Button -->
          <button
            id="mobile-close-btn"
            class="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-lg transition-all hover:rotate-90 duration-300"
            aria-label="Close menu"
          >
            <i data-lucide="x" stroke-width="1.5" class="w-6 h-6"></i>
          </button>

          <!-- Mobile Menu Content -->
          <div class="mobile-menu-content">
            <nav class="mobile-nav-links">
              <a href="index.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Home</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="about.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">About</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="tracks.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Tracks</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="speakers.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Speakers</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="committee.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Committee</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="download.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Download</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="venue.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Venue</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="review.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Review Process</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="ethics.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Ethics & Policies</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="guidelines.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Guidelines</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="contact.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Contact</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="sponsorship.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">Sponsorship</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
              <a href="CMT-Acknowledgement.html" class="mobile-nav-link" data-mobile-link>
                <span class="mobile-nav-link-text">CMT Acknowledgement</span>
                <i data-lucide="arrow-right" class="w-5 h-5 mobile-nav-arrow"></i>
              </a>
            </nav>

            <!-- Mobile CTA & Theme Toggle -->
            <div class="mobile-menu-footer space-y-3">
              <a
                href="https://cmt3.research.microsoft.com/ICRAME2026/Submission/Manage"
                target="_blank"
                rel="noopener noreferrer"
                class="mobile-cta-btn !bg-primary !text-white !bg-none border-none"
                data-mobile-link
              >
                <span>Submit Paper</span>
                <i data-lucide="external-link" class="w-5 h-5"></i>
              </a>
              <a href="registration.html" class="mobile-cta-btn" data-mobile-link>
                <span>Register Now</span>
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
              </a>

              <!-- Theme Toggle (Mobile) -->
              <button
                id="theme-toggle-mobile"
                class="mobile-theme-toggle"
                aria-label="Toggle Theme"
              >
                <i data-lucide="sun" class="w-5 h-5"></i>
                <span class="mobile-theme-text">Toggle Theme</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;

  // 2. Inject HTML
  navbarContainer.innerHTML = navbarHTML;

  // 3. Highlight Active Link
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("text-white");
      link.classList.remove("text-textMuted");

      // If link is inside dropdown, also highlight the main "More" button if desired,
      // or just keep the link active inside the dropdown.
      // For now, let's also check if we should highlight "More" button
      if (link.closest(".group")) {
        const dropdownBtn = document.getElementById("more-dropdown-btn");
        if (dropdownBtn) {
          dropdownBtn.classList.add("text-white");
          dropdownBtn.classList.remove("text-textMuted");
        }
      }
    } else {
      link.classList.add("text-textMuted");
      link.classList.remove("text-white");
    }
  });

  // 4. Initialize Logic (Ported from main.js)

  // Initialize Lucide Icons for the new HTML
  if (window.lucide) {
    lucide.createIcons();
  }

  // Navbar Scroll Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("bg-background/80", "shadow-lg");
      navbar.classList.remove("border-transparent");
    } else {
      navbar.classList.remove("bg-background/80", "shadow-lg");
      // Only make transparent if at top, but consistent with main.js logic
      navbar.classList.add("border-transparent");
    }
  });

  // Mobile Menu Logic
  const btn = document.getElementById("mobile-btn");
  const closeBtn = document.getElementById("mobile-close-btn");
  const menu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll("[data-mobile-link]");
  let isMenuOpen = false;

  function openMobileMenu() {
    isMenuOpen = true;
    menu.classList.add("active");
    document.body.classList.add("menu-open");
    btn.innerHTML =
      '<i data-lucide="x" stroke-width="1.5" class="w-6 h-6"></i>';

    // Hide top banner if present
    const topBanner = document.getElementById("top-banner");
    if (topBanner) {
      topBanner.style.display = "none";
    }

    if (window.lucide) lucide.createIcons();
  }

  function closeMobileMenu() {
    isMenuOpen = false;
    menu.classList.remove("active");
    document.body.classList.remove("menu-open");
    btn.innerHTML =
      '<i data-lucide="menu" stroke-width="1.5" class="w-6 h-6"></i>';

    const topBanner = document.getElementById("top-banner");
    if (topBanner) {
      topBanner.style.display = "";
    }

    if (window.lucide) lucide.createIcons();
  }

  if (btn) {
    btn.addEventListener("click", () => {
      isMenuOpen ? closeMobileMenu() : openMobileMenu();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeMobileMenu);
  }

  // ...removed code that closed mobile menu when clicking a link...

  if (menu) {
    menu.addEventListener("click", (e) => {
      if (e.target === menu) closeMobileMenu();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) closeMobileMenu();
  });

  // Theme Toggle Logic
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleMobileBtn = document.getElementById("theme-toggle-mobile");
  const htmlElement = document.documentElement;

  // Initialize theme based on localStorage or existing class
  function updateToggleIcon(isLight) {
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = isLight
        ? '<i data-lucide="moon" class="w-5 h-5"></i>'
        : '<i data-lucide="sun" class="w-5 h-5"></i>';
    }
    if (themeToggleMobileBtn) {
      themeToggleMobileBtn.innerHTML = isLight
        ? '<i data-lucide="moon" class="w-5 h-5"></i><span class="mobile-theme-text">Toggle Theme</span>'
        : '<i data-lucide="sun" class="w-5 h-5"></i><span class="mobile-theme-text">Toggle Theme</span>';
    }
    if (window.lucide) lucide.createIcons();
  }

  function toggleTheme() {
    htmlElement.classList.toggle("light-mode");
    const isLight = htmlElement.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    updateToggleIcon(isLight);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
  if (themeToggleMobileBtn)
    themeToggleMobileBtn.addEventListener("click", toggleTheme);

  // Sync initial state
  const savedTheme = localStorage.getItem("theme");
  const isLight =
    savedTheme === "light" ||
    (!savedTheme && htmlElement.classList.contains("light-mode"));

  if (isLight) {
    htmlElement.classList.add("light-mode");
  } else {
    htmlElement.classList.remove("light-mode");
  }
  updateToggleIcon(isLight);
})();
