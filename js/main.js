let btn = document.getElementById("nav-toggle"),
    menu = document.getElementById("nav-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

//remove nan menu
let navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});
// active section while scrolling
const sections = document.querySelectorAll("section[id]"),
    nav = document.querySelectorAll("nav .nav__link");
function activeScrolling(section, nav) {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");
    if (top >= offset && top < offset + height) {
        nav.forEach((link) => {
            link.classList.remove("active");
            document
                .querySelector(".nav__menu a[href *=" + id + "]")
                .classList.add("active");
        });
    }
}
window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        activeScrolling(section, nav);
    });
});

// change nav background
function changeHeaderBackground() {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", changeHeaderBackground);
// scroll top arrow
function scrollUp() {
    const arrow = document.getElementById("scrollUp");
    if (this.scrollY > 560) {
        arrow.style.bottom = "3rem";
    } else {
        arrow.style.bottom = "-20%";
    }
}
window.addEventListener("scroll", scrollUp);

// Dark theme
const themeButton = document.querySelector(".change-theme"),
    darkMode = localStorage.getItem("darkMode"),
    changeIcone = localStorage.getItem("change-icon");
const enableDarkMode = () => {
    document.body.classList.add("dark-theme");
    localStorage.setItem("darkMode", "enabled");
    //toggle icon
    themeButton.classList.remove("fa-toggle-off");
    themeButton.classList.add("fa-toggle-on");
    localStorage.setItem("changeIcone", "fa-toggle-on");
};
const disableDarkMode = () => {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("darkMode", null);
    //toggle icon
    themeButton.classList.remove("fa-toggle-on");
    themeButton.classList.add("fa-toggle-off");
    localStorage.setItem("changeIcone", "fa-toggle-off");
};
if (darkMode == "enabled") {
    enableDarkMode();
}
themeButton.addEventListener("click", () => {
    if (!document.body.classList.contains("dark-theme")) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
