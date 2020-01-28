module.exports = function (app) {
    
    app.get('/', async (req, res, next) => {
        res.render("index", {errors:{},sucess:{}});
    });

    app.post('/contate-nos', async (req, res, next) => {
        
        //recebe dados do body
        const dados = req.body;

        //insere data dos dados do body
        dados.data = new Date();

        //importa conexao e dao
        const connection = app.bin.connectionFactory();
        const contatoDAO = new app.dao.contatoDAO(connection);
        
        //senão houver erro grava dados no banco de dados
        contatoDAO.insert(dados, function (erro, resp) {
            if (erro) {
                res.format({
                    html: function(){
                        res.render("index",{errors:'Houve erros na sua solicitação, tente novamente!'});
                    },
                    json: function(){
                        res.json(erro);
                    }
                });
                return;
            }
            res.format({
                html: function(){
                    res.render("index",{sucess:'Seu contato foi salvo, em breve retornaremos o contato!'});
                },
                json: function(){
                    res.json(resp);
                }
            });

            //Fecha conexão com banco
            connection.end();
        });      

    }); //Fim metodo Post

}