// toda a configuração de rotas se encontra aqui
const express = require('express');
const consign = require('consign');

module.exports = () => {
    const app = express();

consign()
    .include('controllers')
    .into(app)

    return app

}

