$(document).ready(function(){

    $.getJSON("http://localhost:3003/servico/lista", function(dados){
        console.log(dados);

        dados.forEach(function(item){

            let novo = "<tr>"
                +"<td>"+ item.nome +"</td>"
                +"<td>R$ "+ item.preco +"</td>"
                +"<td>"+ item.profissional +"</td>"
                +"<td>"+ item.tipo +"</td>"
                +"<td>"
                    +'<button class="btn btn-outline-secondary">Alterar</button>'
                    +'<button servico-id="'+ item._id +'" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#modal-delete" >Deletar</button>'
                +"</td>"
            +"</tr>";

            $("#lista-servico").append(novo);

        });

        
    });

});