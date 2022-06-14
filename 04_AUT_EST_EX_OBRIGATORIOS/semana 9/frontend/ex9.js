//Exercício 1
// função para checar se o numero da centena e impar ou par
function centena() {
    var numero = document.getElementById('3number').value
    if (numero >= 100 && numero <= 999) {
        if (numero[0] % 2 == 0) {
            alert("O numero é par")
        } else {
            alert("O numero é impar")
        }
    } else {
        alert("O numero precisa estar entre 100 e 999")
    }
}

//Exercício 2
function somar(){
    var n_numeros = document.getElementById('positivenumber').value
    var soma = 0
    for (let i=0; i<n_numeros.length; i++){
        soma += parseInt(n_numeros[i])
    }
    alert("A soma dos numeros é: " + soma)
}
