const supabase = window.supabase.createClient(
  "https://efdwiddcentpanszhnqg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmZHdpZGRjZW50cGFuc3pobnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NjM0NzcsImV4cCI6MjA4MjIzOTQ3N30.2wNC4BCmaX_j27wVMgqwfB97pykz30oOQeY2SkZCaQQ"
);

async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return alert(error.message);

  const userId = data.user.id;

  const { data: profile } = await supabase
    .from("Profiles")
    .select("role")
    .eq("id", userId)
    .single();

  if (!profile) return alert("Perfil não encontrado!");

  if (profile.role === "director" || profile.role === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
}
});
