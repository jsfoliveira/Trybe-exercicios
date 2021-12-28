function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  '', '', '', '', '', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createDaysOfTheMonth() {
  let getDayList = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    let itemDia = document.createElement("li");

    
   // 30 holiday
   //1 holiday friday
    // 8 friday
    // 15 friday
    // 22 friday
    // 29 friday
    // todos tem day

    if ((dia === 2) | (dia === 2)) {
      itemDia.className = "day holiday";
      itemDia.innerText = dia;
      getDayList.appendChild(itemDia);
    } else if (dia === 1) {
      itemDia.className = "day holiday friday";
      itemDia.innerText = dia;
      getDayList.appendChild(itemDia);
    } else if ((dia === 8) | (dia === 15) | (dia === 22) | (dia === 29)) {
      getDayList.appendChild(itemDia);
      itemDia.className = "day friday";
      itemDia.innerText = dia;
    } else {
      getDayList.appendChild(itemDia);
      itemDia.className = "day";
      itemDia.innerText = dia;
    }
  }
}
createDaysOfTheMonth();

//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function criarBtn(feriados) {
  let botao = document.createElement("button");
  let containerButtons = document.querySelector(".buttons-container");
  botao.id = "btn-holiday";
  botao.innerText = "Feriados";
  containerButtons.appendChild(botao);
}
criarBtn("feriados");

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

let botao = document.querySelector("#btn-holiday");
let holiday = document.querySelectorAll(".holiday");
let backgroundColor = "rgb(238,238,238)";
let setNewColor = "white";
function mudarCorHoliday() {
  for (let i = 0; i < holiday.length; i += 1) {
    if (holiday[i].style.backgroundColor === setNewColor) {
      holiday[i].style.backgroundColor = backgroundColor;
    } else {
      holiday[i].style.backgroundColor = setNewColor;
    }
  }
}
botao.addEventListener("click", mudarCorHoliday);

mudarCorHoliday();
//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

function criarBtnFriday (buttonName){
  let buttonsContainer = document.querySelector('.buttons-container');
  let btnFriday = document.createElement('button');
  buttonsContainer.appendChild(btnFriday);
  btnFriday.id = "btn-friday";
  btnFriday.innerText = buttonName;
}
criarBtnFriday('Sexta-feira');

//Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//clicar no botao friday e acessar os days que tem a classe friday e mudar seu texto

let btnFriday = document.querySelector('#btn-friday');
let friday = document.querySelectorAll('.friday');
function mudarTextoFriday (){
  for (let i = 0; i < friday.length; i += 1){
    friday[i].innerText = 'SEXTOU!';
  }
}
btnFriday.addEventListener('click', mudarTextoFriday);
//Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.


let day = document.getElementsByClassName('day');
for (let i = 0; i < day.length; i += 1){
  day[i].addEventListener('click', pintarDia);
  day[i].addEventListener('dblclick', pintarDia2);
}

function pintarDia(event){
  event.target.style.backgroundColor = getComputedStyle(
    document.querySelector('.selected')
  ).backgroundColor;
}

function pintarDia2(event){
  event.target.style.backgroundColor = getComputedStyle(
    document.querySelector('.selected2')
  ).backgroundColor;
}


// day[i].addEventListener('click', function pintarDia (){
//   alert('oi')
// })
// let day = document.querySelectorAll('.day');
// for (let i = 0; i < day.length; i += 1){
//   function zoomTexto (){
//     if (day[i].style.fontSize == '20px'){
//       day[i].style.fontSize = '30px';
//     } else if (day[i].style.fontSize = '30px'){
//       day[i].style.fontSize = '20px';
//     }
//   }
//   day[i].addEventListener('mouseover', zoomTexto);
// }
//Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('blue');

function corTaskAula (){

}

//Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.

let task = document.querySelector('.task');
function clicarCorTask (event){
    if (task.className == "task"){
      event.target.className = "task selected";
    } else if (task.className == "task selected"){
      event.target.className = "task";
    }
}
task.addEventListener('click', clicarCorTask);

let outroTask = document.querySelector('.outro-tasks');
function clicarCorTask2 (event){
  if (outroTask.className == "outro-tasks"){
    event.target.className = "outro-tasks selected2";
  } else if (outroTask.className == "outro-tasks selected2"){
    event.target.className = "outro-tasks";
  }
}
outroTask.addEventListener('click', clicarCorTask2);

//Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.


//   {
   
//     let oldColor = "#eee";
//     if (day[i].style.color == oldColor){
//       day[i].style.color = newColor;
//     }
//   });
// }

// pegarCor();

//Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');
  tasksContainer.appendChild(taskName);
  taskName.innerHTML = task;
  
};

newTaskSpan('Dia de projeto');

//BÔNUS Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
let digitarInput = document.querySelector('#task-input');
let btnAdd = document.querySelector('#btn-add');
let apareceLista = document.querySelector('.task-list');
function clicarBtn() {
  if (digitarInput.value.length > 0){
    let novoLi = document.createElement('li');
    apareceLista.appendChild(novoLi);
    novoLi.innerHTML = digitarInput.value;
    digitarInput.value = '';
  } else {
    alert('Error: Digite ao menos 1 caractere.');
  }
}

btnAdd.addEventListener('click', clicarBtn);
clicarBtn();








