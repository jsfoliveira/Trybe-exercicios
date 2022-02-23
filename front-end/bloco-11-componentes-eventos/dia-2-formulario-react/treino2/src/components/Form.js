import React from 'react';
import './Form.css';


class Form extends React.Component {
    render(){
        return (
            <form>
                <fildset>
                    <label> Nome
                        <input type="text" id="name" name="name" maxlength="40" required>
                        {/* Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados. */}
                        </input> 
                    </label>

                    <label> Email
                        <input type="text" id="email" name="email"  maxlength="50" required>
                        </input> 
                    </label>

                    <label> CPF
                        <input type="text" id="address" name="address" required>
                        {/* Remover qualquer caracter especial que seja digitado */}
                        </input> 
                    </label>

                    <label> Endereço
                        <input type="text" id="cpf" name="cpf" maxlength="11" required>
                        </input> 
                    </label>

                    <label> Cidade
                        <input type="text" id="city" name="city" maxlength="11" required>
                        {/* Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo. */}
                        </input> 
                    </label>

                    <label> Estado
                        <select type="text" id="state" name="state" required>
                            <option value='bahia'>Bahia</option>
                            <option value='sao paulo'>São Paulo</option>
                            <option value='rio de janeiro'>Rio de Janeiro</option>
                            <option value='minas gerais'>Minas Gerais</option>
                        </select>
                    </label>

                    <label> Tipo de moradia
                        <label>
                            <input type="radio" id="state" name="state" required>
                            </input>
                            Casa
                        </label>

                        <label>
                            <input type="radio" id="state" name="state" required>
                            </input>
                            Apartamento
                        </label>
                    </label>
                </fildset>
                <fildset>
                    <label maxlength="1000" required> Resumo do currículo
                        <textarea>

                        </textarea>
                    </label>

                    <label maxlength="40" required> Cargo 
                        <textarea>
                        {/* Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez. */}
                        </textarea>
                    </label>

                    <label maxlength="500" required> Descrição do cargo 
                        <textarea>
                        </textarea>
                    </label>
                </fildset>
                <div className='btn'>
                    <button type='submit'>Enviar</button>
                    <button type='button'>Limpar</button>
                </div>
            </form>
        )
    }
}

export default Form;