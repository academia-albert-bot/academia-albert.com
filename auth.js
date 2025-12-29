// Conexão com Supabase
const supabase = supabase.createClient(
  "https://efdwiddcentpanszhnqg.supabase.co", // Substitua pela sua URL Supabase
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZHdpZGRjZW50cGFuc3pobnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NjM0NzcsImV4cCI6MjA4MjIzOTQ3N30.2wNC4BCmaX_j27wVMgqwfB97pykz30oOQeY2SkZCaQQ" // Substitua pela sua anon key
);

// E-mail do admin
const ADMIN_EMAIL = "albertinoarmandoantonio@gmail.com";

// Função de login
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Preencha email e senha!");
    return;
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Erro ao fazer login: " + error.message);
    return;
  }

  alert("Login efetuado com sucesso!");

  // Redirecionamento
  if (email === ADMIN_EMAIL) {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
}

// Captura do submit do formulário
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  login();
});
