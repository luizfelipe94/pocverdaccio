import Calculadora from "@artemis/mylib";

(async () => {

    const calculadora = new Calculadora();
    const resultado = await calculadora.somar(1, 5);

    console.log(`Resultado...: ${resultado}`);

})();