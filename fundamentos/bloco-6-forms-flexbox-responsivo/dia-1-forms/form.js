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

//Antes de tudo, precisa interromper o fluxo padrão do requered nos campos (qd nao digita nada no input, aparece uma alerta). Precisa interromper com o preventDefault para que consiga tratar os dados antes.

window.onload = function (){
    createStateOptions();
    const btnEnviar = document.querySelector('#btn-enviar');
    function submit(event){
       
        event.preventDefault();

        //validar dado de cada input
        //validando o name
        let nome = document.querySelector('[name=name]');
        if (nome.value.length > 40 || nome.value.length === 0){
          alert('Nome inválido!')
        }
    }
    btnEnviar.addEventListener('click', submit);

    //Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
    let btnLimpar = document.querySelector('#btn-limpar');
    function limparTudo (){
      let nome = document.querySelector('[name=name]');
      nome.value = '';
      let email = document.querySelector('[name=email]');
      email.value = '';
      let cpf = document.querySelector('[name=cpf]');
      cpf.value = '';
      let endereco = document.querySelector('[name=endereco]');
      endereco.value = '';
      let cidade = document.querySelector('[name=cidade]');
      cidade.value = '';
      let estado = document.querySelector('[name=state]');
      estado.value = '';
      let cargo = document.querySelector('[name=cargo]');
      cargo.value = '';
      let descricao = document.querySelector('[name=descricao]');
      descricao.value = '';
      let textArea = document.querySelector('textarea');
      textArea.value = '';
      console.log(textArea)
}
btnLimpar.addEventListener('click', limparTudo);
}

// O dia deve ser > 0 e <= 31.
// O mês deve ser > 0 e <= 12.
// O ano não pode ser negativo.
// Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.





