const menu = document.querySelector(".menu");
const burgerButton = document.querySelector(".menu-burger");
const menuList = document.querySelector(".menu-list")
const menuLink = document.querySelectorAll(".menu-link")


burgerButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    burgerButton.classList.toggle("active");
    menuList.classList.toggle("active");
    menuLink.forEach(element => {
        element.classList.toggle("active");
    });
    
})