const menu = document.querySelector(".menu");
const burgerButton = document.querySelector(".menu-burger");
const menuList = document.querySelector(".menu-list")
const menuLink = document.querySelectorAll(".menu .menu-link");


burgerButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    burgerButton.classList.toggle("active");
    menuList.classList.toggle("active");
    menuLink.forEach(element => {
        element.classList.toggle("active");
    });
    
    const isOpen = burgerButton.classList.contains("active");

    burgerButton.setAttribute("aria-expanded", isOpen);
    burgerButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    document.body.style.overflow = isOpen ? "hidden" : "";
})