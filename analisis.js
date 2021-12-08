// Helpers
function even(number) {
    // if (number % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return (number % 2 === 0);
}

function calcularPromedio(list) {
    const sumList = list.reduce(
        function (prev = 0, next) {
            return prev + next;
        }
    );

    const result = sumList / list.length;

    return result;
}

// Calculadoras de mediana
function medianaSalary(list) {
    const middle = parseInt(list.length / 2);

    if (even(list.length)) {
        const personMiddleOne = list[middle - 1];
        const personMiddleTwo = list[middle];

        const mediana = calcularPromedio([personMiddleOne, personMiddleTwo]);

        return mediana;
    } else {
        const personMiddle = list[middle];
        return personMiddle;
    }

}

// General Mediana
const salaryChile = chile.map(function (persona) {
    return persona.salary;
});

const salaryChileSorted = salaryChile.sort(function (prev,next) {
    return prev - next;
});

const generalMedianaChile = medianaSalary(salaryChileSorted)

// Mediana Top 10%


const spliceStart = (salaryChileSorted.length * 90) / 100;
const spliceCount = salaryChileSorted.length - spliceStart;

const salaryChileTop10 = salaryChileSorted.splice(spliceStart, spliceCount);

const medianaChileTop10 = medianaSalary(salaryChileTop10);
    
console.log({
    generalMedianaChile,
    salaryChileTop10,
    medianaChileTop10,
});


