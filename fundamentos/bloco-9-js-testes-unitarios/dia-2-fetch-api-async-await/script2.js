// Exemplo na internet
// 1º - coloca a condicional com o resolve e o reject
const minhaPromessa = new Promise((resolve, reject) => {
    const nome = 'Julia';

    if (nome === 'Juliana') {
        resolve ('Encontrei a Juliana!');
    } else {
        reject ('Não a encontrei!');
    }
});
// Para imprimir o resolve, precisa do then. Para imprimir p reject, precisa do catch.
// minhaPromessa
//     .then((data) => {
//         return data.toLowerCase();
//     })
//     .then((textoModificado) => {
//         console.log(textoModificado);
//     })
//     .catch((erro) => {
//         console.log(erro);
//     })

    async function outraForma () {
        try{
            const minhaPromessaResp = await minhaPromessa ('Juliana');
            console.log(minhaPromessa);
        } catch (erro){
            console.log('erro');
        }
    }

    outraForma();