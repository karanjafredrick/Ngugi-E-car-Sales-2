document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector("#nav-menu");
    const modeToggle = document.querySelector('.mode__toggle');
    const body = document.body;

    // --- Dark Mode Logic with Local Storage ---
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.classList.remove('ri-sun-line');
        modeToggle.classList.add('ri-moon-line');
    } else {
        // Ensure sun icon is default if no theme or light theme is saved
        modeToggle.classList.remove('ri-moon-line'); // Ensure moon isn't there initially
        modeToggle.classList.add('ri-sun-line');
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            modeToggle.classList.remove('ri-sun-line');
            modeToggle.classList.add('ri-moon-line');
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            modeToggle.classList.remove('ri-moon-line');
            modeToggle.classList.add('ri-sun-line');
            localStorage.setItem('theme', 'light'); // Save preference
        }
    });
    // --- End Dark Mode Logic ---

    // --- Nav Toggle Logic (existing) ---
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav__menu--active");

            if (navMenu.classList.contains("nav__menu--active")) {
                navToggle.classList.remove("ri-menu-line");
                navToggle.classList.add("ri-close-line");
            } else {
                navToggle.classList.remove("ri-close-line");
                navToggle.classList.add("ri-menu-line");
            }
        });
    }
});

