const mysql = require('mysql') //exportando biblioteca

const conexao = mysql.createConnection({ //criando conexão com o banco de dados 
    host     : '10.1.28.4',
    port     : 3306,
    user     : 'root',
    password : '@Larf7844v1',
    database : 'agenda-ambulatorio',

})

module.exports = conexao //exportando modulo para a pagina index.js