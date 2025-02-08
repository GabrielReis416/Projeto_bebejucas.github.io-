//conexões Inicio 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database');

const app = express();
const port = 3000;

//conexões Fim

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); 

// sair dados do usuarios inicio 

app.post('/cadastrar', (req, res) => {
    const { nome, telefone, email, senha } = req.body;

    const query = `INSERT INTO usuarios (nome, telefone, email, senha) VALUES (?, ?, ?, ?)`;

    db.run(query, [nome, telefone, email, senha], function(err) {
        if (err) {
            return res.status(500).json({ erro: err.message });
        }
        res.json({ mensagem: "Cadastro realizado com sucesso!" });
    });
});

// sair dados do usuarios fim

// Iniciar o servidor

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

/// finalizar servidor