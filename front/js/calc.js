
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nome = urlParams.get('nome')
const CPF = urlParams.get('cpf')
let rendimento = urlParams.get('rendimento')

const Nome = document.getElementById("nome")
const Cpf = document.getElementById("cpf")
const Rendimento = document.getElementById("rendimento")
const Aliquota = document.getElementById("aliquota")
const Termo = document.getElementById("termo")

//verificar se o CPF é valido
function validarCPF(){
    var sum = 0;
    var rest;
    var i;
    var cpf = CPF;
    cpf = cpf.replace(/\./g, '');
    cpf = cpf.replace('-', '');
    cpf = cpf.split('');

    for (i=1; i<=9; i++) sum = sum + parseInt(cpf[i-1]) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(cpf[9])) return false;

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(cpf[i-1]) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(cpf[10])) return false;
    return true;
}

let aliquota;

if ( rendimento <= 22847.76 ) {
    aliquota = 0;
}

else if ( rendimento <= 33919.80 ) {
    aliquota = 7.5
}

else if ( rendimento <= 45012.60 ) {
    aliquota = 15
}

else if ( rendimento <= 55976.16 ) {
    aliquota = 22.5
}

else if ( rendimento > 55976.16 ) {
    aliquota = 27.5
}

let termo = (aliquota/100)*rendimento;

if (validarCPF() == false){
    alert("CPF inválido");
    window.location.href = "index.html";
}

Nome.textContent = nome
Cpf.textContent = CPF
Rendimento.textContent = rendimento
Aliquota.textContent = aliquota
Termo.textContent = termo.toFixed(2)

console.log(aliquota)
