import React from 'react';

class Main extends React.Component {
    constructor() {
        super()
         // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            numeroDeCliques: 0
        }
    }

    handleClick(){
        this.setState((estadoAnterior) => ({
            numeroDeCliques: estadoAnterior.numeroDeCliques += 1
        }))
      }

  render() {
      console.log(this);
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}✌</button>
  }
}
export default Main;