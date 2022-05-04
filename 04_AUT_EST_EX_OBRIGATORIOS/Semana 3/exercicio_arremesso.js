

function calculate (){
    var velocidade_inicial = document.getElementById("campo").value
    var altura_maxima = Math.pow(velocidade_inicial, 2)/(10*2)
    var tempo_de_subida = velocidade_inicial/10
    document.getElementById("Altura_maxima").value = altura_maxima
    document.getElementById("Tempo_total_de_subida").value = tempo_de_subida
}

