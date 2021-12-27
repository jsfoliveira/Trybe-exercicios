// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// NÃO ENTENDI 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let container = document.querySelector('.container');
let filhosContainer = container.children;
for (let i = 0; i < filhosContainer.length; i += 1){
  function adicionarTech() {
    if (filhosContainer[i].className == 'tech'){
      filhosContainer[i].classList.remove ('tech');
      // filhosContainer[i].classList.add('tech');
    } else {
      filhosContainer[i].classList.add('tech');
    }
}
filhosContainer[i].addEventListener('click', adicionarTech);
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';

function alterarTexto (event){
  const firstElement = document.querySelector("#first-li");
  firstElement.innerText = event.target.value;

};
input.addEventListener("input", alterarTexto);
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;

let top3Spotrybefy = document.getElementById("my-spotrybefy");

top3Spotrybefy.addEventListener("dblclick", function click2Vezes() {
  window.location.replace("https://blog.betrybe.com/");
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

let titulo = document.querySelector('h1');
titulo.addEventListener("mouseover", function passarMouseEmCima(event) {
  event.target.style.backgroundColor = "red";
});



// Segue abaixo um exemplo do uso de event.target:

// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = "Opção reiniciada";
//   event.target.style.backgroundColor = "black";
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
// }

// firstLi.addEventListener("dblclick", resetText);

