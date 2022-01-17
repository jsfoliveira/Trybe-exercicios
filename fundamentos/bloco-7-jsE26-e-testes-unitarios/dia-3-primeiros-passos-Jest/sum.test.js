//EXERCICIO 01
const {soma, myFizzBuzz} = require ('./sum.js');

describe ('The function soma', () => {
    it('soma 4 e 5 e deve ser igual a 9', () => {
        expect(soma(4,5)).toBe(9);
        expect(soma(0,0)).toBe(0);
    });
    it('deve disparar erro quando receber parâmetro string', ()=> {
        expect(soma(4, '5')).toTrowError();
        expect(()=> soma(4,'5')).toTrowError('os parâmetros devem ser números');
    });
});

//EXERCICIO 02

//EXERCICIO 03

describe ('A função divisível', () => {
    it('se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('2')).toBe(false);
      })
    });