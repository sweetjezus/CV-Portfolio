function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const collaps = document.querySelectorAll(".collapsible");

collaps.forEach(collapsible => {
    collapsible.addEventListener("click", () => {
        collapsible.classList.toggle("active");
    });
});