const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"12345",
    database:"db_registro"
})

app.post('/cadastrar', (req, res) => {
    const { nome_usuario, senha_usuario, email_usuario } = req.body;
    console.log('Recebido:', nome_usuario, email_usuario);

    db.query('INSERT INTO tb_usuario (nome_usuario, senha_usuario, email_usuario) VALUES (?, ?, ?)',
    [ nome_usuario, senha_usuario, email_usuario ],
    (err, result) => {
        if (err) return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
        res.json({ message: `Usuário cadastrado com sucesso!` });
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000🎂");
})