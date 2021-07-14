const assert = require('assert');
const Calculadora = require("../src/calculadora");

describe("Testes da calculadora", function() {

    let calculadora = new Calculadora();

    beforeEach(() => calculadora = new Calculadora());

    it("Deve garantir que 1 + 1 é igual a 2", async () => {
        const result = await calculadora.somar(1, 1);
        assert.strictEqual(result, 2);
    });

});