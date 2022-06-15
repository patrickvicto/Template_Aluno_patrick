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
//função para somar os dígitos de um numero
function somar(){
    var n_numeros = document.getElementById('positivenumber').value
    var soma = 0
    for (let i=0; i<n_numeros.length; i++){
        soma += parseInt(n_numeros[i])
    }
    alert("A soma dos numeros é: " + soma)
}

//Exercício 3
//função para ordenar três nomes em ordem alfabética
function ordenar(){
    var ordenar = [document.getElementById('name1').value,document.getElementById('name2').value,document.getElementById('name3').value] 
    ordenar.sort()
    alert("Nomes em ordem:" + ordenar)
}

//Exercício 4
//função para exibir e calcular sequencia de fibonacci
function fibo(){
    var n = document.getElementById('n_numbers').value
    var sequencia = [1,1]
    if(n>0){
        for(let i=2; i<n; i++){
            sequencia[i] = sequencia[i-1] + sequencia[i-2]
        }
        alert("Sequencia de Fibonacci:" + sequencia)
    }
    else{
        alert("O numero deve ser positivo")
    }
}

//exercício 5
//função para mostrar todos os números primos de um intervalo
function primos(){
    var inicio = document.getElementById('intervalo1').value
    var fim = document.getElementById('intervalo2').value
    var primos = []
    
    for(let i=inicio; i<=fim; i++){
        var contador = 0
        for(let a=1; a<=i; a++){
            if (i%a == 0){
                contador +=1
            }
        }
        if (contador == 2){
            primos.push(i)
            }
    }
    alert("Números primos:" + primos)
}