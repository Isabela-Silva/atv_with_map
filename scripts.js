
// EXAMPLE OF THE TEACHER
const maca = {

    value: 2,
}

const laranja = {
    value: 3,
}

function mapWithThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapWithThis(nums, maca));

console.log('this -> laranja', mapWithThis(nums, laranja)); 


// CALCULATE MY FRIENDS GRADES:

const washington = {

    nota: 3898,
}

const well = {
    nota: 3898,
}
const isa = {
    nota: 3899,
}

function calcularNota(arr, thisArg) {
    return arr.map(function(item){
        return this.nota / item;
    }, thisArg);
}

const divisor = [5];

console.log('a nota do aluno isabela é:', calcularNota(divisor, isa));
console.log('a nota do aluno washington é:', calcularNota(divisor, washington));
console.log('a nota do aluno wellison é:', calcularNota(divisor, well));



// GRANDMA'S EMPLOYEE SALARY INCREASE

const bi = {

    salario: 1958,
}

const elias = {
    salario: 1838,
}
const manoel = {
    salario: 2829,
}

const thomas = {
    salario: 1475,
}

function aumentoSalario(arr, thisArg) {
    return arr.map(function(item){
        return this.salario + item;
    }, thisArg);
}

const aumento = [200];

console.log('o salario de bi foi aumentado para:', aumentoSalario(aumento, bi));
console.log('o salario de elias foi aumentado para:', aumentoSalario(aumento, elias));
console.log('o salario de manoel foi aumentado para:', aumentoSalario(aumento, manoel));
console.log('o salario de thomas foi aumentado para:', aumentoSalario(aumento, thomas));