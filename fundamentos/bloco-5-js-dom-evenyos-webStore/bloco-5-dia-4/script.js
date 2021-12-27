//mudar o fundo do content e salvar no localStorage
let btnBackgroundColor = document.getElementById("background-color");
let listaFilhosBg = btnBackgroundColor.children;
console.log(listaFilhosBg);
for (let i = 1; i < listaFilhosBg.length; i += 1) {
  function mudarBg(event) {
    let content = document.querySelector(".content"); //o que vai pintar
    let color = event.target.innerText;
    content.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  }
  listaFilhosBg[i].addEventListener("click", mudarBg);
}
//event.target vai sinalizar qual o elemento precisa ser chamado. ele vai sinalizar o background-color. no background-color vai dizer qual a cor que vai ficar no (color)

//mudar a cor da fonte do paragrafo e salvar no localStorage

let btnColorParagrafo = document.querySelector("#font-color");
let filhoColorParagrafo = btnColorParagrafo.children;

  for (let i = 0; i < filhoColorParagrafo.length; i += 1) {
    function colorParagrafo(event){
      let paragrafo = document.querySelectorAll(".paragraph");
      for (let i = 0; i < paragrafo.length; i += 1) {
        let color = event.target.innerText;
        paragrafo[i].style.color = color;
        localStorage.setItem("color", color);
      }
  }
  filhoColorParagrafo[i].addEventListener('click', colorParagrafo)
}
//mudar o tamanho da fonte do paragrafo e salvar no localStorage
let tamanhoFonte = document.querySelector('#font-size');
let filhosTamanhoFonte = tamanhoFonte.children;

for (let i = 0; i < filhosTamanhoFonte.length; i += 1){
  function mudarTamanhoFonte (event){
    let paragrafo = document.querySelectorAll('.paragraph');
    for (let i = 0; i < paragrafo.length; i += 1){
      let fonte = event.target.innerText;
      paragrafo[i].style.fontSize = fonte;
      localStorage.setItem('fontSize', fonte);
    }
  }
filhosTamanhoFonte[i].addEventListener('click', mudarTamanhoFonte);
}
//mudar o espaçamento entre as linhas do paragrafo e salvar no localStorage

let espacamentoLinha = document.querySelector('#line-height');
let filhosEspacamento = espacamentoLinha.children;

for (let i = 0; i < filhosEspacamento.length; i += 1){
  function mudarEspacamento (event){
    let paragrafo = document.querySelectorAll('.paragraph');
    for (let i = 0; i < paragrafo.length; i += 1){
      let espacamento = event.target.innerText;
      paragrafo[i].style.lineHeight = espacamento;
      localStorage.setItem('lineHeight', espacamento);
    }
  }
  filhosEspacamento[i].addEventListener('click', mudarEspacamento);
}

//mudar o tipo de fonte do paragrafo e salvar no localStorage
let fonte = document.querySelector('#font-family');
let filhosFonte = fonte.children;

for (let i = 0; i < filhosEspacamento.length; i += 1){
  function mudarFonte (event){
    let paragrafo = document.querySelectorAll('.paragraph');
    for (let i = 0; i < paragrafo.length; i += 1){
      let fontFamily = event.target.innerText;
      paragrafo[i].style.fontFamily = fontFamily;
      localStorage.setItem('fontFamily', fontFamily);
    }
  }
  filhosFonte[i].addEventListener('click', mudarFonte);
}












