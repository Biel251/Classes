//Atividade 2 CalculadoraSimples
class CalculadoraSimples {
    soma(a, b) {
        return a + b;
    }
    subtracao(a, b) {
        return a - b;
    }
    multiplicacao(a, b) {
        return a * b;
    }
    divisao(a, b) {
        return b !== 0 ? a / b : "divisão por zero!";
    }
}
const calcular = new CalculadoraSimples();

console.log("Soma:", calcular.soma(2, 3));         
console.log("Subtração:", calcular.subtracao(7, 2));
console.log("Multiplicação:", calcular.multiplicacao(4, 5));
console.log("Divisão:", calcular.divisao(10, 2)); 
console.log("Divisão por zero:", calcular.divisao(10, 0));



