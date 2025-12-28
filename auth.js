import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://efdwiddcentpanszhnqg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZHdpZGRjZW50cGFuc3pobnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NjM0NzcsImV4cCI6MjA4MjIzOTQ3N30.2wNC4BCmaX_j27wVMgqwfB97pykz30oOQeY2SkZCaQQ';
const supabase = createClient(supabaseUrl, supabaseKey);

const authForm = document.getElementById('authForm');
const toggleForm = document.getElementById('toggleForm');
const nameFields = document.getElementById('nameFields');
let isLogin = true;

// Alternar entre login e cadastro
toggleForm.addEventListener('click', () => {
  isLogin = !isLogin;
  nameFields.classList.toggle('hidden', isLogin);
  authForm.querySelector('button').textContent = isLogin ? 'Entrar' : 'Cadastrar';
  toggleForm.textContent = isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça login';
});

// Submissão do formulário
authForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const phone = document.getElementById('phone').value;

  if (isLogin) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return alert(error.message);
    alert('Login bem-sucedido!');
  } else {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return alert(error.message);
    // Salvar dados adicionais no perfil
    await supabase.from('profiles').insert({ id: data.user.id, name: firstName, lastName, phone });
    alert('Cadastro realizado com sucesso!');
  }
});

// Funções de login social (Google, Facebook, Telegram)
document.getElementById('googleAuth').addEventListener('click', async () => {
  await supabase.auth.signInWithOAuth({ provider: 'google' });
});
document.getElementById('facebookAuth').addEventListener('click', async () => {
  await supabase.auth.signInWithOAuth({ provider: 'facebook' });
});
document.getElementById('telegramAuth').addEventListener('click', async () => {
  alert('Integração Telegram será via bot, configurável depois');
});
