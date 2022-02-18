import React from "react";

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

class Header extends React.Component {
    render() {
        const contents = conteudos.map((element, index) => {
            return (
                <div key={index}>
                    <p>{`O status é: ${element.status}`} </p>
                    <br />
                    <p>{`O bloco é: ${element.bloco}`}</p>
                </div>
            )
        })
        return <div>{contents}</div>
    }
}


export default Header;