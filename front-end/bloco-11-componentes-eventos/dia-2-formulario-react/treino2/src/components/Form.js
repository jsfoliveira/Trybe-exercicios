import React from 'react';
import Name from './Name';
import './Form.css';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

const INITIAL_STATE = {
    name:'',
    email:'',
    cpf:0,
    address:'',
    city:'',
    state:'',
    housing:'',
    resume:'',
    office:'',
    description:'',
    formError: {},
    submitted: false,
}    

class Form extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)

        this.state = INITIAL_STATE;
    }


    handleChange(event) {
        let { name, value} = event.target
    // {/* Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados. */}
        if (name === 'name'){
            value = value.toUpperCase()
        };
        
        this.updateState(name, value);
    }

    updateState(name, value) {
    this.setState({[name]: value})
    }

    // Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
    onBlurHandler(event) {
        // NÃO ENTENDI A RESOLUÇÃO
        // let { name, value } = event.target;
        // if (name === 'city') value = value.match(/^\d/) ? '' : value;
        // this.updateState(name, value);
    }

    // Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
    mouseAlert() {
        alert('Preencha com cuidado esta informação')
    }

    render(){
        return (
            <form>
                <fildset>
                    <Name value={this.state.name} handleChange={this.handleChange} />

                    <label htmlFor='email'> 
                    Email
                        <input 
                        type="text" 
                        id="email" 
                        name="email" 
                        onChange={this.handleChange} 
                        maxlength="50" 
                        required>
                        </input> 
                    </label>

                    <label htmlFor='cpf'> 
                    CPF
                        <input 
                        type="number" 
                        id="cpf" 
                        name="cpf" 
                        onChange={this.handleChange} 
                        required>
                        {/* Remover qualquer caracter especial que seja digitado */}
                        </input> 
                    </label>

                    <label htmlFor='address'> 
                    Endereço
                        <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        onChange={this.handleChange} 
                        maxlength="11" 
                        required>
                        </input> 
                        {/* Remover qualquer caracter especial que seja digitado */}
                    </label>

                    <label htmlFor='city'> 
                    Cidade
                        <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        onChange={this.handleChange}
                        onBlur={this.onBlurHandler}
                        value={this.state.city} 
                        maxlength="11" 
                        required>
                        {/* Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo. */}
                        </input> 
                    </label>

                    <label htmlFor='state'> 
                    Estado
                        <select 
                        onChange={this.handleChange} defaultValue="" 
                        name="state" 
                        required>
                            <option value="">Selecione</option>
                            {
                                states.map((value,key) => (
                                    <option key={ key }>{ value }</option>
                                ))
                            }
                        </select>
                    </label>

                    <div> Tipo de moradia
                        <label htmlFor='house'>
                            <input 
                            type="radio" 
                            id="house" 
                            name="housing" 
                            onChange={this.handleChange} 
                            value="house" 
                            required>
                            </input>
                            Casa
                        </label>

                        <label htmlFor='apartment'>
                            <input 
                            type="radio" 
                            id="apartment" 
                            name="housing" 
                            onChange={this.handleChange} 
                            value="apartment"
                            required>
                            </input>
                            Apartamento
                        </label>
                    </div>
                </fildset>
                <fildset>
                    <label htmlFor='resume'> Resumo do currículo
                        <textarea type="text" name="resume" id="resume" onChange={this.handleChange} value={this.state.resume} maxlength="1000" required>

                        </textarea>
                    </label>

                    <label htmlFor='office'> Cargo 
                        <textarea type="text" name="office" id="office" onChange={this.handleChange} onMouseEnter={this.mouseAlert} value={this.state.office} maxlength="40" required>
                        {/* Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez. */}
                        </textarea>
                    </label>

                    <label htmlFor='description'> Descrição do cargo 
                        <textarea type="text" name="description" id="description" onChange={this.handleChange} value={this.state.description} maxlength="500" required>
                        </textarea>
                    </label>
                </fildset>
                <div className='btn'>
                    <button type='submit'>Enviar</button>
                    <button type='button' onClick={() => this.setState(INITIAL_STATE)}>Limpar</button>
                </div>
            </form>
        )
    }
}

export default Form;