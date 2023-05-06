<?php
// obtém os valores enviados pelo formulário
$email = $_POST['email'];
$senha = $_POST['senha'];
$nome = $_POST['nome'];

// realiza a conexão com a base de dados
$conn = mysqli_connect('localhost', 'root', '', 'k-imagem');

// verifica se a conexão foi bem sucedida
if (!$conn) {
 // die('Não foi possível conectar ao banco de dados: ' . mysqli_error($conn));
}

// prepara a query SQL para inserir os dados na tabela "nome_usuario"
$sql = "INSERT INTO usuario (email, nome, senha) VALUES ('$email', '$nome', '$senha')";

// executa a query SQL
if (mysqli_query($conn, $sql)) {
  echo 'Cadastro realizado com sucesso!';
} else {
  echo 'Ocorreu um erro ao realizar o cadastro: ' . mysqli_error($conn);
}

// fecha a conexão com a base de dados
mysqli_close($conn);
?>
