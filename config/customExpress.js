// toda a configuração de rotas se encontra aqui
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express();
// parametros pre-execução que traduz os post recebidos como json e url
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

consign() 
    .include('controllers') 
    .into(app)

    return app

}

