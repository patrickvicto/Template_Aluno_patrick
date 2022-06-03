var produto = 0

//exercício 1

//função para adicionar uma unidade 
function add(){
    produto = Number(document.getElementById("campo").value)
    produto += 1
    document.getElementById("campo").value = produto
}
//função para subtrair uma unidade 
function subtraction(){
    produto = Number(document.getElementById("campo").value)
    produto -= 1
    document.getElementById("campo").value = produto
}

//exercício 2

//função para trocar o texto entre as caixas
function trade(){
let casa1 = document.getElementById("casa2").value;
let casa2 = document.getElementById("casa1").value;
document.getElementById("casa1").value = casa1;
document.getElementById("casa2").value = casa2;
}

//exercício 3

//função para conferir se o telefone condiz ao padrão
function formato(){
    let phone = document.getElementById("telefone").value;
    let padrão = /^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}$/;

    if(phone.match(padrão)){
        alert("o telefone está correto")
    }
    else{
        alert("o telefone não esta de acordo com formato (XX)XXXXX-XXXX")
    }
}
//exercício 4
var total = 0
//função para calcular o valor a ser pago pela viagem
function calcular(){
    var humanos = document.getElementById("pessoas").value
    //contas para o período do dia
    if (document.getElementById("op").value == "day") {
        if (humanos <=50 ) {
            total = humanos*200
            document.getElementById('resultado').innerHTML = total
        } 
        else {
            total = (humanos*200)*0.6
            document.getElementById('resultado').innerHTML = total
            
        } 
    }
    //contas para o período na noite
    if (document.getElementById("op").value == "night") {
        if (humanos <=50 ) {
            total = humanos*100
            document.getElementById('resultado').innerHTML = total
        } 
        else {
            total = (humanos*100)*0.8
            document.getElementById('resultado').innerHTML = total
            
        } 
    }
console.log(total)
}

//exercício 5
//função para criar lista de inputs para os alunos
function zap(){
    var n_alunos = Number(document.getElementById('alunos').value)
    document.getElementById('alunos').readOnly = true
    var list = ""
    for (let i = 1; i<= n_alunos; i++){
        list+='<input type="number" placeholder="nota_prova" id="prova'+i+'"></input><input type="number" placeholder="nota_trabalho" id="trabalho'+i+'"></input><br>'
    }
    document.getElementById('lista').innerHTML = list
}

//função para realizar os cálculos referentes a cada aluno e os resultados gerais
function conta(){
    //declaração das variáveis
    var n_alunos = Number(document.getElementById('alunos').value)
    var ordem = 1
    var resultmedia = ""
    var resultmediageral = 0
    var resultnotaprova = 0
    var resultnotatrabalho = 0
    var menornotaprova = 9999999999999
    var maiornotaprova = 0
    var menornotatrabalho = 999999999999
    var maiornotatrabalho = 0


    for(ordem=1;ordem<= n_alunos;ordem++){
        //conta da media individual
        resultmedia += '<p>aluno'+ordem+' média:</p>'+((Number(document.getElementById('prova'+ordem).value)*2 + Number(document.getElementById('trabalho'+ordem).value)*3)/5) + '<br>'
        //conta media geral
        resultmediageral += ((Number(document.getElementById('prova'+ordem).value)*2 + Number(document.getElementById('trabalho'+ordem).value)*3)/5)
        //conta da media da nota das provas
        resultnotaprova += (Number(document.getElementById('prova'+ordem).value))
        //conta da media da nota dos trabalhos
        resultnotatrabalho += (Number(document.getElementById('trabalho'+ordem).value))
        //iserção da maior e menor nota da prova
        if (maiornotaprova < (Number(document.getElementById('prova'+ordem).value))){
            maiornotaprova = (Number(document.getElementById('prova'+ordem).value))
        }
        if (menornotaprova > (Number(document.getElementById('prova'+ordem).value))){
            menornotaprova = (Number(document.getElementById('prova'+ordem).value))
        }   
        //inserção da maior e menor nota dos trabalhos
        if (maiornotatrabalho < (Number(document.getElementById('trabalho'+ordem).value))){
            maiornotatrabalho = (Number(document.getElementById('trabalho'+ordem).value))
        }
        if (menornotatrabalho > (Number(document.getElementById('trabalho'+ordem).value))){
            menornotatrabalho = (Number(document.getElementById('trabalho'+ordem).value))
        }   

    }
    //levar media individual para o html
    document.getElementById('resultadomedia').innerHTML = resultmedia
    //finalizar conta e levar nota geral para o html
    resultmediageral = resultmediageral/n_alunos
    document.getElementById('resultadomediageral').innerHTML = '<h1>media geral:</h1>' + resultmediageral
    //levar media provas para o html e finalizar conta
    resultnotaprova = resultnotaprova/n_alunos
    document.getElementById('resultadomediaprova').innerHTML = '<h1>media das provas:</h1>' + resultnotaprova
    //levar media dos trabalhos para o html e finalizar conta
    resultnotatrabalho = resultnotatrabalho/n_alunos
    document.getElementById('resultadomediatrabalho').innerHTML = '<h1>media dos trabalhos:</h1>' + resultnotatrabalho
    //levar maior e menor nota da prova para o html
    document.getElementById('mmnotaprova').innerHTML = '<h1>maior nota da prova:</h1>' + maiornotaprova + '<h1>menor nota da prova:</h1>' + menornotaprova
    //levar maior e menor nota do trabalho para o html
    document.getElementById('mmnotatrabalho').innerHTML = '<h1>maior nota do trabalho:</h1>' + maiornotatrabalho + '<h1>menor nota do trabalho:</h1>' + menornotatrabalho
} 