class Tabelas {
    init(conexao) {
        this.conexao = conexao //setando a conexão

        this.criarAtendimentos() //chamada da function abaixo

    }
    criarAtendimentos(){
            
            //sql query para criar a tabela de pacientes
            const sql = 'CREATE TABLE paciente ( id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'
    //essa  chamada.banco.instruçoes  executa e retorna se foi criado ou não, se não cria
            this.conexao.query(sql, (erro) => {
                if (erro) {
                        console.log(erro)
                } else {
                    console.log('[TASK] TABELAS OK')
                }

            }) 
        }

    }


module.exports = new Tabelas //exportando o objeto para o app na index.js