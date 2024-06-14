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
        let telefone = $("#telefone").val();
        let email = $("#email").val();

        $("#nome, #telefone, #email").removeClass("is-invalid");
        
        // expressão regular
        let telefone_exp = /^\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}$/gm;
        let email_exp = /^[0-9a-zA-Z-._]+@[a-z0-9]+\.[a-z.]+$/gm;

        if (nome.trim().length <= 3 )
        {
            $("#nome").addClass("is-invalid");
        }

        if (telefone_exp.test(telefone) == false)
        {
            $("#telefone").addClass("is-invalid");
        }
        if (email_exp.test(email) == false)
        {
            $("#email").addClass("is-invalid");
        }

    }); // fim do bt-salvar

});