class Tabelas {
    init(conexao) {
        this.conexao = conexao
     
    }
    criarAtendimentos(){
        this.conexao.query() { //costruir query para criar a tabela
            const sql = 'CREATE TABLE paciente
            (id int NOT NULL AUTO_INCREMENT,
              Nome varchar(50) NOT NULL,
              cidade varchar(20) NOT NULL,
              


                
                
                )
        }

    }
}

module.exports = new Tabelas