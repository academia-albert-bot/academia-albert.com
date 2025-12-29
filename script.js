const { createClient } = supabase

const supabaseClient = createClient(
 "https://efdwiddcentpanszhnqg.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZHdpZGRjZW50cGFuc3pobnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NjM0NzcsImV4cCI6MjA4MjIzOTQ3N30.2wNC4BCmaX_j27wVMgqwfB97pykz30oOQeY2SkZCaQQ"
)

window.showLogin = () => {
 document.getElementById("loginBox").classList.remove("hidden")
 document.getElementById("registerBox").classList.add("hidden")
}

window.showRegister = () => {
 document.getElementById("registerBox").classList.remove("hidden")
 document.getElementById("loginBox").classList.add("hidden")
}

window.register = async () => {
 const email = document.getElementById("regEmail").value
 const pass  = document.getElementById("regPass").value

 const { error } = await supabaseClient.auth.signUp({ email, password: pass })

 if(error) alert(error.message)
 else alert("Conta criada com sucesso!")
}

window.login = async () => {
 const email = document.getElementById("loginEmail").value
 const pass  = document.getElementById("loginPass").value

 const { error } = await supabaseClient.auth.signInWithPassword({ email, password: pass })

 if(error) alert(error.message)
 else alert("Login efectuado!")
}
