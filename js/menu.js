const menu_visivilite = document.querySelector(".menu-navegacion");

function visible_nav(){
    menu_visivilite.classList.toggle("nav-visible");
}
function ocult_nav(){
    menu_visivilite.classList.remove("nav-visible");
}