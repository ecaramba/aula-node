let usuario = localStorage.getItem("usuario");

if (!usuario) {
    location.assign("/login.html");
}

usuario = JSON.parse(usuario);

$(document).ready(function(){
    $("#user-nome").html(usuario.nome);

    $("#bt-logout").click(function(){
        localStorage.clear();
        location.assign("/login.html");
    });
});