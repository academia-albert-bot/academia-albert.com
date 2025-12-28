// <!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Academia Albert</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 dark:bg-gray-900 flex items-center justify-center h-screen">

  <div class="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg w-full max-w-md">
    <h1 class="text-2xl font-bold mb-6 text-center">Entrar na Academia Albert</h1>

    <input id="email" type="email" placeholder="Email" class="w-full p-3 mb-4 rounded-xl border border-gray-300">
    <input id="password" type="password" placeholder="Senha" class="w-full p-3 mb-4 rounded-xl border border-gray-300">

    <button id="loginBtn" class="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition">Entrar</button>

    <p class="mt-4 text-sm text-gray-500 text-center">Não tem conta? <a href="#" class="underline text-indigo-600">Cadastrar</a></p>
  </div>

  <script src="script.js"></script>
  <script>
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', async () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const result = await login(email, password);
      if (result) {
        alert('Login realizado com sucesso!');
        // Redireciona para dashboard ou página principal
        window.location.href = 'dashboard.html';
      } else {
        alert('Falha no login, verifique email e senha.');
      }
    });
  </script>

</body>
</html>
  }
}
