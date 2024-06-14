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

    $("#bt-salvar").click(function(){

        let nome = $("#nome").val();

        $("#nome").removeClass("is-invalid");

        let cep = /^[0-9]{5}-[0-9]{3}/gm;

        if (cep.test(nome) == true){
            alert("passou no teste")
        } else {
            alert("não passou");
        }

        if (nome.trim().length <= 3 )
        {
            $("#nome").addClass("is-invalid");
        }

    }); // fim do bt-salvar

});