const supabase = supabasejs.createClient(
  "https://efdwiddcentpanszhnqg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZHdpZGRjZW50cGFuc3pobnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NjM0NzcsImV4cCI6MjA4MjIzOTQ3N30.2wNC4BCmaX_j27wVMgqwfB97pykz30oOQeY2SkZCaQQ"
);

function showLogin(){ loginBox.classList.remove("hidden"); registerBox.classList.add("hidden"); }
function showRegister(){ registerBox.classList.remove("hidden"); loginBox.classList.add("hidden"); }

async function register(){
const email = regEmail.value;
const pass = regPass.value;
const { error } = await supabase.auth.signUp({email, password:pass});
if(error) alert(error.message); else alert("Conta criada com sucesso!");
}

async function login(){
const email = loginEmail.value;
const pass = loginPass.value;
const { error } = await supabase.auth.signInWithPassword({email, password:pass});
if(error) alert(error.message); else alert("Login feito!");
}
