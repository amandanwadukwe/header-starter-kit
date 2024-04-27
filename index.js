let primaryNavLinks = document.querySelectorAll(".primary-nav ul li a");
let primaryNav = document.getElementById("primary-nav");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    primaryNav.classList.toggle("hide");
})

primaryNavLinks.forEach(link => {
    link.addEventListener("click", () => {
        primaryNav.classList.add("hide");
    })
})
