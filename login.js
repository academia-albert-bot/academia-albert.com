import { createClient } from "@supabase/supabase-js";

// Conexão com Supabase
const supabase = createClient(
  "https://efdwiddcentpanszhnqg.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZHdpZGRjZW50cGFuc3pobnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NjM0NzcsImV4cCI6MjA4MjIzOTQ3N30.2wNC4BCmaX_j27wVMgqwfB97pykz30oOQeY2SkZCaQQ"
);

const messageEl = document.getElementById('message');

// LOGIN
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    messageEl.textContent = "Erro ao fazer login: " + error.message;
  } else {
    messageEl.textContent = "Login realizado com sucesso!";
    console.log(data);
    // Redirecionar ou atualizar a página
    window.location.href = "index.html";
  }
});

// CADASTRO
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    messageEl.textContent = "Erro ao cadastrar: " + error.message;
  } else {
    messageEl.textContent = "Cadastro realizado com sucesso!";
    // Opcional: criar perfil no Supabase
    await supabase.from('profiles').insert({
      id: data.user.id,
      name,
      email,
      role: email === 'academiaalbert11@gmail.com' ? 'ADMIN' : 'STUDENT',
      enrollments: []
    });
  }
});
