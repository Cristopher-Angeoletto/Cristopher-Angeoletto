const menuItems = document.querySelectorAll(".menu-desktop a");
menuItems.forEach(item => {
    item.addEventListener("click", scrollToSection);
});

function scrollToSection(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        window.scroll({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });
    }
}

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener("click", ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener("click", ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener("click", ()=>{
    menu.classList.remove('abrir-menu')
})