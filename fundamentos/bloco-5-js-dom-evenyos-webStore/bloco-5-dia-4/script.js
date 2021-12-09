//mudar o fundo do content
let btnBackgroundColor = document.getElementById("background-color");
let listaDeFilhos = btnBackgroundColor.children;
console.log(listaDeFilhos);
for (let i = 1; i < listaDeFilhos.length; i += 1) {
  listaDeFilhos[i].addEventListener("click", function (event) {
    let content = document.querySelector(".content");
    let color = event.target.innerText;
    content.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  });
}

// window.onload = function () {};
//event.target vai sinalizar qual o elemento precisa ser chamado. ele vai sinalizar o background-color. no background-color vai dizer qual a cor que vai ficar no (color)
