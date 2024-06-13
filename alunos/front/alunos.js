$(document).ready(function(){

    $.getJSON("http://localhost:3003/alunos", function(dados){

        console.log(dados);

    }); //fim do getJson

});