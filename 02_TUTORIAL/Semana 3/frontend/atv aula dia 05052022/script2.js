﻿/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "calc";

/* 
=======================
Event Listener
=======================
*/

/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var x0 = 10;
        var y0 = 20;
        // Alternativa equivalente: var x0 = 10, y0 = 20;
        CalcAddAndhow(x0, y0);
  }
}

function calcular(){
    let x = parseFloat(document.getElementById ("campo").value)
    let y = parseFloat(document.getElementById ("campo2").value)
    CalcAddAndShow(x,y)
}
/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAddAndShow(x, y){
    var op = "+";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
}


/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(x, y, op){
    var result;
    if (op == "+") {
        result = x + y;
    };
    return result;
}


/* Função que mostra a operação realizada */
function ShowOp(x, y, op){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${x} ${op} ${y} = `;
    //Alternativa: .. += "<br />" + x + " " + op + " " + y + " = "
}


/* Função que mostra o resultado obtido */
function ShowResult(res){
    document.getElementById(calcResDiv).innerHTML += res;
}

