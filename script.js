// Conexão com Supabase
const supabase = supabase.createClient(
  "https://efdwiddcentpanszhnqg.supabase.co", // Project URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZHdpZGRjZW50cGFuc3pobnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NjM0NzcsImV4cCI6MjA4MjIzOTQ3N30.2wNC4BCmaX_j27wVMgqwfB97pykz30oOQeY2SkZCaQQ" // anon public key
);

// Teste de carregamento
console.log("Supabase conectado com sucesso!");
// Cadastro de novo usuário
async function signUp(email, password, name) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    console.error("Erro ao criar conta:", error.message);
    return;
  }

  // Criar perfil no Supabase
  const newProfile = {
    id: data.user.id,
    name: name || email.split('@')[0],
    email,
    role: 'STUDENT',
    enrollments: []
  };

  const { error: profileError } = await supabase.from('profiles').insert(newProfile);
  if (profileError) {
    console.error("Erro ao criar perfil:", profileError.message);
  } else {
    console.log("Conta criada com sucesso!");
  }
}
