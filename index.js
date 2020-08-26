const express = require('express');
const consign = require('consign');

const app = express();

consign()
    .include('controllers')
    .into(app);

app.listen(3000);















/*
class pacientes{
    nomePaciente;
    codigoDaCidade;
    prontuario;
    codDependencia;
    rg;
    sexo;
    cpf;
    dataNascimento;
    codigoProcedimento;
    endereço;
    bairro;
    cep;
	A
    telefone;
};

class dependencia{
    codDependencia;
    nomeDaDepencia;
    cid;  
};

class cidade{
    codigoCidade;
    cidade;
    estado;
};

class filial{
    
};

*/