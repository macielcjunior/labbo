const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

module.exports = function() {

  const app = express();
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.set('view engine', 'ejs');
  app.set('views', './views');

  //Remove X-Powered-by
  app.disable('x-powered-by');

  consign()
    .include('routes')
    .then('bin')
    .then('dao')
    .into(app);

  app.use(function(req, res, next){
    res.status(404).render('errors/404');
    });
 /* 
    app.use(function(error,req, res, next){
      res.status(500).render('errors/500');
    });
  */
  return app;
};
