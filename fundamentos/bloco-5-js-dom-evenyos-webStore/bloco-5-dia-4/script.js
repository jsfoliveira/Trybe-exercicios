//mudar o fundo do content
let btnBackgroundColor = document.getElementById("background-color");
function mudarCorFundo(event) {
  let content = document.querySelector(".content");
  event.target.content.style.backgroundColor = color;
  localStorage.setItem("backgroundColor", color);
}

btnBackgroundColor.addEventListener("click", oi);

window.onload = function () {};
//event.target vai sinalizar qual o elemento precisa ser chamado. ele vai sinalizar o background-color. no background-color vai dizer qual a cor que vai ficar no (color)
