class Calculator{
    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }
        //metodo de adição
        sum(n1, n2){
            return n1+n2;
        }
        //metodo de subtração
        sub(n1, n2){
            return n1-n2;
        }
        //metodo de divisão
        division(n1, n2){
            return n1/n2;
        }

        multiplication(n1, n2){
            return n1*n2;
        }
}
//criando o objeto
const calc = new Calculator;

//start nos btns
let buttons = document.querySelectorAll('.btn');
console.log('teste');

let resultado = calc.sum(1,2);
console.log(resultado);

resultado = calc.sub(5,4);
console.log(resultado);

resultado = calc.division(10,2);
console.log(resultado);

resultado = calc.multiplication(4,2);
console.log(resultado);




