const mysql = require('mysql');

// Configurações do banco de dados
const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'k-imagem'
};

// Cria uma conexão com o banco de dados
const conn = mysql.createConnection(config);

// Tenta conectar-se ao banco de dados
conn.connect((err) => {
  if (err) {
    console.error('Erro ao conectar-se ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida');
});


  $(document).ready(function() {
    $('#cadastro-form').submit(function(event) {
      event.preventDefault(); // previne o comportamento padrão de envio do formulário

      // obtém os valores dos campos de email, senha e nome
      const email = $('#email').val();
      const senha = $('#senha').val();
      const nome = $('#nome').val();

      // envia uma requisição AJAX para o arquivo PHP que realizará a inserção na base de dados
      $.ajax({
        url: 'cadastro.php',
        method: 'POST',
        data: {
          email: email,
          senha: senha,
          nome: nome
        },
        success: function(response) {
          // exibe uma mensagem de sucesso ou de erro, dependendo da resposta do servidor
          alert(response);
        },
        error: function() {
          alert('Ocorreu um erro ao enviar o formulário.');
        }
      });
    });
  });


  const loginForm = document.getElementById('login-form');
  const loginBtn = document.getElementById('login-btn');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    fetch('login.php', {
      method: 'POST',
      body: new URLSearchParams({
        email: email,
        senha: senha
      })
    })
    .then(response => response.text())
    .then(result => {
      if (result === 'sucesso') {
        // redireciona o usuário para outra página
        window.location.href = 'outra_pagina.html';
      } else {
        alert('Email ou senha incorretos.');
      }
    })
    .catch(error => {
      console.error('Ocorreu um erro ao fazer a requisição AJAX: ', error);
    });
  });

