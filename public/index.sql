
/* Cadastro Inicio  */

/* criar banco de dados caso não exista */

CREATE DATABASE  banco;

/* selecionar banco */

USE banco;

/*  cria tabela caso não exista  */

CREATE TABLE usuarios( 
    nome INT NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    senha INT NOT NULL,
    PRIMARY KEY (telefone)
);

/* Cadastro Usuarios Fim */

/* Site completo */

CREATE DATABASE  bebejucas;

USE bebejucas;

/* tabela produto */

CREATE TABLE produto( 
    id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR (255) NOT NULL,
    preço INT NOT NULL,
    PRIMARY KEY (id)
);

/* criar tabela cliente ( completa ) */

CREATE TABLE cliente( 
    id INT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR (255) NOT NULL,
    endereço VARCHAR (255) NULL,
    email VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);

/* criar tabela produto */

CREATE TABLE pedido( 
    id INT NOT NULL AUTO_INCREMENT;
    produto_id  INT NOT NULL,
    data_pedido  DATE NOT NULL,
    quantidade INT NOT NULL,
    valor INT NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (cliente_id) REFERENCES cliente (id);
    FOREIGN KEY (produto_id) REFERENCES produto (id);
);




    
