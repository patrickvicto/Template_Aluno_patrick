// função para transferir texto para o html ao clicar no botão
function revelar(){
$('#info').html("High School Canada (formação bilíngue) com aulas de:");
$('#list').html(`<li>Negócios</li><li>Ciências Ambientais</li><li>Escrita</li><li>Liderança</li><li>Questões mundiais</li>`);
}

api = 'http://127.0.0.1:3023'


$(document).ready(() => {
    parceiros.list();
});


var parceiros = {
    
    list() {
        $.ajax({
            url: api + '/parceiros',
            type: 'GET',
            success: data => {
                var tx = '';
                data.forEach(element => {
                    tx += '<div class="parceiro">';
                        tx += '<div class="parceiro">' + element.parceiro +  ''+": "+'' + element.descrição +'</div>';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#parceirosmostrar').html(tx);
            }
        });
        
    }
    
};