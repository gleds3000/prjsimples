module.exports = function(application){
/*
    application.get('/', function(req,res){
        application.app.controllers.home.index(application, req, res);
    });
 */   
    application.get('/', function(req, res, next) {
        res.render('login', {message: null});
      });
}