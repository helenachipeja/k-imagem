const express = require('express');
const mysql = require('mysql');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'k-imagem',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida!');
});

app.post('/cadastro', (req, res) => {
  const { name, email, password } = req.body;

  const query = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
  connection.query(query, (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário: ', err);
      res.status(500).send('Erro ao cadastrar usuário');
      return;
    }
    res.status(201).send('Usuário cadastrado com sucesso');
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
