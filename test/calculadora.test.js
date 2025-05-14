const { somar } = require("../src/calculadora");

describe("teste da função somar", () => {
    it("deve retornar a soma de dois números", () => {
        const soma = somar(1,2);
        const resultadoEsperado = 3;
        expect(soma).toBe(resultadoEsperado);
    })
})