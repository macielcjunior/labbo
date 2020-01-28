var app = require('./config/custom-express')();

var port = 3000;
app.listen(port, function () {
    console.log('Teste Labbo rodando na porta %s', port);
});