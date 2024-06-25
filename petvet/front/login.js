let ambiente  = (location.hostname == "localhost")? "dev" : "prod";
let servidor = (ambiente == "prod")? "https://petvet-back.onrender.com": "http://localhost:3003";

$(document).ready(function(){
    
    $("#bt-entrar").click(function(){
        let dados = {
            "usuario": $("#usuario").val(),
            "senha": $("#senha").val()
          };
        
        $.post(servidor + "/usuario/logar", dados, function(retorno){
            if (retorno.erro) {
                $("#msg-erro").html(retorno.erro);
                $("#msg-erro").removeClass("d-none");
            } else {
                localStorage.setItem("usuario", JSON.stringify(retorno));
                location.assign("/index.html");
            }
        });
    }); 

});