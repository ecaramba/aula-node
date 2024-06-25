let usuario = localStorage.getItem("usuario");

if (!usuario) {
    location.assign("/login.html");
}