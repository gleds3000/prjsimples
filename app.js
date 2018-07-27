var app = require('./config/server')
const port = 3000;
const hostname = 'localhost';
//var rotaNoticia = require('./app/routes/noticias')(app);
//rotaNoticia(app);

//var rotaHome =require('./app/routes/home')(app);
//rotaHome(app);

//var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app); 
//rotaFormInclusaoNoticia(app);

app.listen(port, function(){
        console.log("Servidor On localhost:3000");
        console.log(new Date().toISOString());
        //console.log("servidor rodando com express");
        //console.log(msg());
});
//app.listen(port, hostname, () => {
//        console.log(`Server running at http://${hostname}:${port}/`);
//});
