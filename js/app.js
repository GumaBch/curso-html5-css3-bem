var chaveador = document.querySelector(".js-botao-chaveador");

chaveador.onclick = function() {
    var menu = document.querySelector(".js-menu");
    menu.classList.toggle('menu--opened');
}