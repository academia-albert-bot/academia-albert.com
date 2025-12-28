const cursos = [
 {id:1, nome:"Saboaria Profissional", preco:8500},
 {id:2, nome:"Contabilidade Prática", preco:15000},
 {id:3, nome:"Violão Popular", preco:9000}
]

const grid = document.getElementById("cursos")

function carregarCursos(){
 grid.innerHTML=""
 cursos.forEach(c=>{
  grid.innerHTML+=`
   <div class="card">
    <h3>${c.nome}</h3>
    <p>${c.preco} MT</p>
    <button>Comprar</button>
   </div>`
 })
}
carregarCursos()

function login(){
 const email=document.getElementById("email").value
 if(email==="academiaalbert11@gmail.com"){
  document.getElementById("admin").classList.remove("hidden")
  alert("Modo Diretor ativado")
 }
}

function novoCurso(){
 const nome=prompt("Nome do curso:")
 const preco=prompt("Preço:")
 cursos.push({id:Date.now(),nome,preco})
 carregarCursos()
}
