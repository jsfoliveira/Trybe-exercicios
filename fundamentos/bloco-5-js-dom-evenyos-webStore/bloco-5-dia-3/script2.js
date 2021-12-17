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
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createDaysOfTheMonth() {
  let getDayList = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    let itemDia = document.createElement("li");
    // 24 holiday
    // 25 holiday friday
    //31 holiday
    //4 friday
    //11 friday
    //18 friday
    //todos tem day
    if ((dia === 24) | (dia === 31)) {
      itemDia.className = "day holiday";
      itemDia.innerText = dia;
      getDayList.appendChild(itemDia);
    } else if (dia === 25) {
      itemDia.className = "day holiday friday";
      itemDia.innerText = dia;
      getDayList.appendChild(itemDia);
    } else if ((dia === 4) | (dia === 11) | (dia === 18)) {
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
//NÃO CONSEGUI
//Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
//clicar no botao friday e acessar os days que tem a classe friday e mudar seu texto

// function mudarTextoFriday (){
//   let btnFriday = document.querySelector('#btn-friday');
//   let getDayList = document.querySelector("#days");
//   for (let i = 0; i < getDayList.length; i += 1) {
//     if (getDayList[i].className = friday){
//       getDayList[i].innerText = "Sextou!"
//     }
//   }
// }
// btnFriday.addEventListener('click', mudarTextoFriday);
//Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');
  tasksContainer.appendChild(taskName);
  taskName.innerHTML = task;
  
};

newTaskSpan('Projeto:');
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








