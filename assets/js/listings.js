document.addEventListener("DOMContentLoaded", () =>{
    const navToggle = document.querySelector("#nav-toggle");
    const navMenu = document.querySelector("#nav-menu");
    const modeToggle = document.querySelector('.mode__toggle');
    const body = document.body;
    const advancedSearchBtn = document.getElementById("advanced-search-btn");
    const advancedSearchContent = document.getElementById("advanced-search-content");
    const icon = advancedSearchBtn.querySelector(".ri-arrow-drop-down-line");

    const savedTheme = localStorage.getItem('theme');

    if(savedTheme == 'dark') {
        body.classList.add('dark-mode');
        modeToggle.classList.remove('ri-sun-line');
        modeToggle.classList.add('ri-moon-line');
    }else {
        modeToggle.classList.remove('ri-moon-line');
        modeToggle.classList.add('ri-sun-line');
    }

    modeToggle.addEventListener('click', () =>{
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            modeToggle.classList.remove('ri-sun-line');
            modeToggle.classList.add('ri-moon-line');
            localStorage.setItem('theme', 'dark');
        }else {
            modeToggle.classList.remove('ri-moon-line');
            modeToggle.classList.add('ri-sun-line');
            localStorage.setItem('theme', 'light');
        }
    });

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () =>{
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

    advancedSearchBtn.addEventListener('click', () =>{
        advancedSearchContent.classList.toggle('active');

        if (advancedSearchContent.classList.contains('active')) {
            icon.classList.remove('ri-arrow-drop-down-line');
            icon.classList.add('ri-arrow-drop-up-line');
        }else {
            icon.classList.remove('ri-arrow-drop-up-line');
            icon.classList.add('ri-arrow-drop-down-line');
        }
    });
});