import React from 'react';
import Email from './Email';

class Form extends React.Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this)

        // Se for usar um handle genérico, não preciso disso de novo:
        // this.handleNameChange = this.handleNameChange.bind(this)

        this.state = {
            estadoFavorito:'',
            nome:'',
            email:'',
            idade: 0
        }
    }

    handleChange({target}) {
        // desestructuring do event.target.name
        const { name } = target
        // Para check box precisa ser assim:
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({[name]: value})
    }

    // handleNameChange(event) {
    //     this.setState({nome:event.target.value})
    // }

    render() {
        return (
            <div>
                <h1>Formulário - React</h1>
                <form>
                    <label> Diga qual o seu estado favorito
                        <textarea name='estadoFavorito' onChange={this.handleChange} value={this.state.estadoFavorito} />
                        {/* Componente controlado pelo estado do React */}
                    </label>

                    <Email value={this.state.email} handleChange={this.handleChange} />


                    <label> Nome
                        <input name='nome' type='text' onChange={this.handleChange} value={this.state.handleChange} />
                    </label>

                    <label> Idade
                        <input name='idade' type='number' onChange={this.handleChange} value={this.state.handleChange} />
                    </label>

                    <label>Receber newsletter
                        <input 
                         type='checkbox' 
                         name='vaiComparecer'
                         value={this.state.vaiComparecer}
                         onChange={this.handleChange}
                        />
                    </label>
                </form>
            </div>
        )
    }
}

export default Form;