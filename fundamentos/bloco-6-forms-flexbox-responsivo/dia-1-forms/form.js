// Utilize estruturas de repetição via JavaScript para gerar os <option>
function createStateOptions() {
    let states = document.getElementById('state');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
    for (let index = 0; index < stateOptions.length; index += 1) {
      let option = document.createElement('option');
      option.innerText = stateOptions[index];
      option.value = stateOptions[index];
      states.appendChild(option);
    }
  }
  createStateOptions();


// O dia deve ser > 0 e <= 31.
// O mês deve ser > 0 e <= 12.
// O ano não pode ser negativo.
// Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.

//Antes de tudo, precisa interromper o fluxo padrão do requered nos campos (qd nao digita nada no input, aparece uma alerta). Precisa interromper com o preventDefault para que consiga tratar os dados antes.

const data = document.querySelector('#data');
window.onload = function (){
    createStateOptions();
    const btnEnviar = document.querySelector('#btn-enviar');
    function submit(event){
       
        event.preventDefault();

    }
    btnEnviar.addEventListener('click', submit);
//     //validar dado de cada input
//     let nome = document.querySelector('[name=name]');
//     if (nome.value.length)





//     let clearButton = document.querySelector('#btn-limpar');
//     clearButton.addEventListener('click', clearFields)
// }

// function limiteData (){
//     let valorData = data.value;
    // if (valorData)
}


