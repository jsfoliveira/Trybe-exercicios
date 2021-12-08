// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// NÃO ENTENDI 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const segundoLi = document.getElementsById("second-li");
function mudarLi(event) {
  const techElement = document.querySelector(".tech");
}
adicionarTech.addEventListener("", function () {});

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener("input", function (event) {
  const techElement = document.querySelector(".tech");
  techElement.innerText = event.target.value;
});
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
//cria a variavel de onde o elemento que vai ser acionado está
//cria a função: function dáumnome (){
// o evento que quer que faça
//}
//cria o addEventListener: variavel.addEventListener ("evento", puxa a função pra cá)
let top3Spotrybefy = document.getElementById("my-spotrybefy");

top3Spotrybefy.addEventListener("dblclick", function click2Vezes() {
  window.location.replace("https://blog.betrybe.com/");
});

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;

top3Spotrybefy.addEventListener("mouseover", function passarMouseEmCima(event) {
  event.target.style.backgroundColor = "red";
});
// Segue abaixo um exemplo do uso de event.target:

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  event.target.style.backgroundColor = "black";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener("dblclick", resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
