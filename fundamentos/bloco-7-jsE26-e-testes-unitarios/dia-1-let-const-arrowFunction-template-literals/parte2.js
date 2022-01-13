// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator



// 2.Crie uma função que receba uma frase e retorne qual a maior palavra.
//Novamente o split, mas dessa fez é efetuado um for simples
//String que será avaliada
let string = "Bom dia a todos!";
//split vai tranasformar nisso: [ 'Bom', 'dia', 'a', 'todos!' ]
let palavras = string.split(" ");
//Declaro a maior string vazia
let bigFor = "";
//vai percorrer cada índice (word) da string criada (palavras)
for (word of palavras) {
    //trim remove os espaços em branco
  if (word.trim().length > bigFor.length) {
    bigFor = word.trim();
  }
}
console.log(bigFor);


// 3.Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
let contador = document.querySelector('.badge');
let btn = document.querySelector('button');

//A propriedade textContent da interface Node representa o conteúdo de texto de um nó e dos seus descendentes.
//parseInt() analisa uma string e retorna o primeiro inteiro
function contadorBtn(){
    
    let clickCount = parseInt(contador.textContent) + 1;
    contador.textContent = clickCount;
    }
btn.addEventListener('click', contadorBtn);





// 4. Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".