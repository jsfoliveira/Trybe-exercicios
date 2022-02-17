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

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                {conteudos.map((elem) => (
                    <div key={elem.conteudo} className="card">
                        <h4>{`O conteudo é: ${elem.conteudo}`}</h4>
                        <p>{`status: ${elem.status}`}</p>
                        <p>{`bloco: ${elem.bloco}`}</p>
                    </div>
                ))}
            </div>
        );
    }
}

// OU PODE SER ASSIM:


// const contentConteudo = () => {
//     return conteudos.map((element) =>
//         `${element.conteudo}`)
// }

// const contentStatus = () => {
//     return conteudos.map((element) =>
//         `${element.status}`)
// }

// const contentBloco = () => {
//     return conteudos.map((element) =>
//         `${element.bloco}`)
// }

// class Content extends React.Component {
//     render() {
//         return (
//             <>
//                 <div className="card"></div>
//                 <h4>O conteúdo é: {contentConteudo()}</h4>
//                 <p>O status é: {contentStatus()}</p>
//                 <p>O bloco é: {contentBloco()}</p>
//             </>
//         )
//     }
// }



export default Content;