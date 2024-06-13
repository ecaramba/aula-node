$(document).ready(function(){

    $.getJSON("http://localhost:3003/alunos", function(dados){

        $("#lista-alunos").empty();

        dados.forEach(function(aluno){
            let tr = "<tr>"
                    +"<td>"+ aluno.nome +"</td>"
                    +"<td>"+ aluno.email +"</td>"
                    +"<td>"+ aluno.cidade +"</td>"
                    +"<td>"+ aluno.telefone +"</td>"
                +"</tr>";

            $("#lista-alunos").append(tr);
        });

    }); //fim do getJson

});