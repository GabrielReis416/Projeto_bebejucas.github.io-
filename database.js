const sqlite3 = require('sqlite3').verbose();

// Conectar ou criar o banco de dados
const db = new sqlite3.Database('banco.db', (err) => {
    if (err) {
        console.error("Erro ao conectar ao banco:", err);
    } else {
        console.log("Banco de dados conectado com sucesso!");
    }
});

// concetar com banco Fim

// CRir tabela de dados caso não tenha sido gerada 
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    telefone TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
)`);

// CRir tabela de dados caso não tenha sido gerada Fim 

module.exports = db;