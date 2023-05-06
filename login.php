<?php
// obtém os valores enviados pelo formulário
$email = $_POST['email'];
$senha = $_POST['senha'];

// realiza a conexão com a base de dados
$conn = mysqli_connect('localhost', 'seu_usuario', 'sua_senha', 'k-imagem');

// verifica se a conexão foi bem sucedida
if (!$conn) {
 // die('Não foi possível conectar ao banco de dados: ' . mysqli_error($conn));
}

// prepara a query SQL para buscar o usuário na tabela "nome_usuario"
$query = "SELECT * FROM usuario WHERE email = '$email' AND senha = '$senha'";

// executa a query e armazena o resultado em uma variável
$resultado = mysqli_query($conn, $query);

// verifica se o resultado contém pelo menos uma linha
if (mysqli_num_rows($resultado) > 0) {
  // usuário autenticado com sucesso, redireciona para a página de boas-vindas
  header('Location: bem-vindo.php');
} else {
  // credenciais incorretas, exibe mensagem de erro
  echo 'Email ou senha incorretos.';
}

// fecha a conexão com a base de dados
mysqli_close($conn);
?>
