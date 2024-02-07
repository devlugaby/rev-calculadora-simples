function calculadora(){
var num1 = parseInt(document.getElementById('num1').value);
var num2 = parseInt(document.getElementById('num2').value);
var operador = parseInt(document.getElementById('operador').value);
const texto = document.querySelector('h2');
var resultado = 0;

switch (operador) {
    case 1:
        resultado = num1 + num2;
        break;
    case 2:
        resultado = num1 - num2;
        break;
    case 3:
        resultado = num1 * num2;
        break;
    case 4:
        resultado = num1 / num2;
        break;
        default:
        resultado = 'Operação Inválida';
}
texto.innerHTML = `${resultado}`;
}