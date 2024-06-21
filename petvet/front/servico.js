$(document).ready(function(){

    listarServicos();

    function listarServicos()
    {
        $.getJSON("http://localhost:3003/servico/lista", function(dados){

            $("#lista-servico").empty();

            dados.forEach(function(item){

                let novo = "<tr>"
                    +"<td>"+ item.nome +"</td>"
                    +"<td>R$ "+ item.preco.toFixed(2) +"</td>"
                    +"<td>"+ item.profissional +"</td>"
                    +"<td>"+ item.tipo +"</td>"
                    +"<td>"
                        +'<button class="btn btn-outline-secondary">Alterar</button>'
                        +'<button servico-id="'+ item._id +'" class="btn btn-outline-danger bt-delete" data-bs-toggle="modal" data-bs-target="#modal-delete" >Deletar</button>'
                    +"</td>"
                +"</tr>";

                $("#lista-servico").append(novo);

            }); // fim do foreach
        }); //fim do getJson
    }

    // event listener
    $("#lista-servico").on("click", ".bt-delete", function(){
        let id = $(this).attr("servico-id");
        $("#id-selecionado").val(id);

    }); // fim do click .bt-delete

    $("#bt-confirma-delete").click(function(){
        let id = $("#id-selecionado").val();

        
        $.post("http://localhost:3003/servico/deletar/"+ id, function(retorno){
            $("#modal-delete").modal('hide');
            $("#msg-sucesso").removeClass("d-none");
            listarServicos();
        }).fail(function(erro){
            $("#msg-erro").removeClass("d-none");
            $("#msg-erro").html(erro.responseText);
            $("#modal-delete").modal('hide');
        });
        
    }); // fim do click bt-confirma-delete

    $("#bt-salvar").click(function(){

        let novo = {
            "nome": $("#nome").val(),
            "preco": $("#preco").val(),
            "profissional": $("#funcionario").val(),
            "tipo": $('[name="tipo"]:checked').val(),
          };

          $.post("http://localhost:3003/servico/novo", novo, function(){
              $("#msg-sucesso").removeClass("d-none");
              $("#msg-sucesso").html("O serviço foi cadastrado");
              $("#modal-cadastrar").modal('hide');
              listarServicos();
              // limpa o formulario
              $("#nome, #funcionario, #preco").val("");
              $('[name="tipo"]').prop("checked", false);

          }).fail(function(erro){
            $("#msg-erro").removeClass("d-none");
            $("#msg-erro").html(erro.responseText);
            $("#modal-cadastrar").modal('hide');
          });

    }); // fim bt-salvar

});