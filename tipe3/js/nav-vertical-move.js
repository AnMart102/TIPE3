document.getElementById("menu_icono").addEventListener("click",open_close_menu);  
var menu_side = document.getElementById("menu_side");
var menu_icono = document.getElementById("menu_icono");

function open_close_menu(){
    menu_side.classList.toggle("nav_side");
}