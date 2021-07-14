class Calculadora {

    async somar(n1, n2) {
        return new Promise((resolve) => resolve(n1 + n2));
    }

}

module.exports = Calculadora;