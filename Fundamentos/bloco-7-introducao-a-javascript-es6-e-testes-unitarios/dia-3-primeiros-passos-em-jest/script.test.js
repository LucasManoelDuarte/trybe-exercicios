const { sum, myRemove, myFizzBuzz } = require('./script.js');

describe('Função sum', () => {
    it('A função soma os valores 4 e 5 e retorna 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('A função soma os valores 0 e 0 e retorna 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('deve disparar um erro caso receba como parâmetro uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
});

describe('Função myRemove', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        const array = [1, 2, 3, 4];
        const newArray = [1, 2, 4]
        expect(myRemove(array, 3)).toEqual(newArray);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 3)).not.toEqual(array);
    });

    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        const array = [1, 2, 3, 4];
        expect(myRemove(array, 5)).toEqual(array);
    })
});

describe('Função myFizzBuzz', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });

    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz('8')).toBeFalsy();
    })
})