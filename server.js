const http = require("http");

let server = http.createServer(function(req, res){
    res.writeHead(200);

    let html = "<html>"
            +"<head>"
            +"</head>"
            +"<body>"
            +"<h1>Servidor http</h1>"
            +"</body>"
            +"</html>";

    res.end(html);

});

server.listen(3000, function(){
    console.log("Servidor iniciado");
});