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

function trade(){
let casa1 = document.getElementById("casa2").value;
let casa2 = document.getElementById("casa1").value;
document.getElementById("casa1").value = casa1;
document.getElementById("casa2").value = casa2;
}

//exercício 3
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
function calcular(){
    var humanos = document.getElementById("pessoas").value
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
function zap(){
    var n_alunos = Number(document.getElementById('alunos').value)
    var list = ""
    for (let i = 1; i<= n_alunos; i++){
        list+='<input type="number" placeholder="nota_prova" id="prova'+i+'"></input><input type="number" placeholder="nota_trabalho" id="trabalho'+i+'"></input><br>'
    }
    document.getElementById('lista').innerHTML = list
}