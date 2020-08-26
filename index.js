
//requisição das configs
const customExpress = require('./config/customExpress') // caminho para as configuraçoes de rotas
const conexao = require('./infraEstrutura/conexao') //caminho para o arquivo de conexão
const Tabelas = require('./infraEstrutura/tabelas') //caminho para script de verificação e criação de tabelas

//conexao com o banco de dados 
conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else {
        console.log('[TASK] Banco de dados OK') // a aplicação so irá iniciar se o banco estiver ok


            Tabelas.init(conexao)
            const app = customExpress() // app = customExpress 

            app.listen(3000); // porta que o programa utiliza // pode ser mudada mais e necessario reinicialização do sistema 
    }
})



