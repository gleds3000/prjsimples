module.exports.formulario_inclusao_noticia = function(application, req, res){

    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
}

module.exports.noticia_salvar = function(application, req, res){
   
        var noticia = req.body;

        function isValidDate(value) {
            if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;

            const date = new Date(value);
            if (!date.getTime()) return false;
            return date.toISOString().slice(0, 10) === value;
        }

        req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
        req.assert('resumo', 'Resumo é obrigatorio').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatorio').notEmpty();
        req.assert('data_noticia', 'data é obrigatorio').notEmpty();
        //req.assert('data_noticia', 'data é invalida').isValidDate();
        req.assert('data_noticia').custom(isValidDate).withMessage('data é invalida');
        //{format: 'YYYY-MM-DD'});

        req.assert('noticia', 'Noticia é obrigatorio').notEmpty();

        var erros = req.validationErrors();
        //console.log(erros);
        if (erros) {
            res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
            return;
        }
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function (error, result) {
            res.redirect('/noticias');
        });
   
}