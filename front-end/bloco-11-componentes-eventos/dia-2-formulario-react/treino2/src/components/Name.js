import React from 'react';


class Name extends React.Component {
    render(){

        return (
            <label htmlFor='name'> 
                Nome
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={this.props.value}
                    onChange={this.props.handleChange} 
                    maxlength="40" 
                    required>
                </input> 
            </label>
        )
    }
}

// Como faz para criar outro componente e transmitir as informações do parseInt(Form) para o filho(Name):
// 1. Cria um novo componente  
// 2. Importa o filho no pai
// 3. Retira do pai o que quer e cola no filho
// 4. Bota a tag do componente no pai
// 5. Defina, no pai, uma prop value no pai com o state do filho, exemplo: value={this.state.name}
// 6. Defina, no filho, o valor da prop do value filho, exemplo: value={this.props.value}
// 7. Defina, no pai, uma prop com a função do evento que quer aplicar que receba ela mesma, exemplo: handleChange={this.handleChange}
// 8. Defina, no filho, o valor da prop do evento que quer aplicar no filho, com a sua função, exemplo: onChange={this.props.handleChange} 


export default Name;