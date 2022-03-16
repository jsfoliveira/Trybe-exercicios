import React from 'react';

class AparecerEmail extends React.Component{
  constructor(){
    super();
    this.state ={
      email: '',
      saveEmail: '',
    }
  }
  handleChange= (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSaveEmail = (amor) => {
    this.setState({
      saveEmail: amor,
      email: '',
    })
  }

  render(){
    const { email, saveEmail } = this.state;
    return (
      <div>
       <form>
         <label htmlFor="email"> E-mail
           <input
           id="email"
           name="email"
           type="text"
           value={ email }
           onChange={ this.handleChange }
            />
         </label>
         <button
         type="button"
         onClick={ () => this.handleSaveEmail(email)}
           Enviar
         />
      </form>
      <div>
        {saveEmail}
      </div>
      </div>
    );
  }
  
}

export default AparecerEmail;
