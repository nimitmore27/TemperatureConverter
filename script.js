const inptxt = document.getElementById('inptxt');
const outtxt = document.getElementById('outputtxt');

const choice = document.querySelectorAll('.list');

let input ;

document.getElementById('body').addEventListener('change', () => {
    outtxt.value = convert(choice[0].value, choice[1].value);
})

function convert(from, to) {
    input = inptxt.value;
    if (input == '') return '';
    if (from == 'Celcius') {
        if (to == 'Kelvin')
            return eval(parseFloat(input) + 273.15).toFixed(4) + ' K';
        if (to == 'Fahrenheit')
            return eval((parseFloat(input) * 9 / 5) + 32).toFixed(4) + ' F';
        return input + ' C';
    }
    if (from == 'Fahrenheit') {
        let celcius = eval((parseFloat(input) - 32) * 5 / 9).toFixed(4);
        if (to == 'Celcius')
            return celcius + ' C';
        if (to == 'Kelvin') {
            return eval(parseFloat(celcius) + 273.15).toFixed(4) + ' K';
        }
        return input + ' F';
    }
    if (from == 'Kelvin') {
        let celcius = eval(input - 273.15).toFixed(4);
        if (to == 'Celcius')
            return celcius + ' C';
        if (to == 'Fahrenheit')
            return eval(parseFloat(celcius) * 9 / 5 + 32).toFixed(4) + ' F';
        return input + ' K';
    }
}