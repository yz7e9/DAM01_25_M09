// 1
const autor = document.getElementById("autor")
console.log(autor.textContent)

const titular = document.getElementById("titular")
console.log(titular.textContent)

const input = document.getElementById("input-comentario")
console.log(input.value)

// 2
titular.textContent = "Títol Principal"

autor.textContent = "Yu Zhang"

const noticia = document.getElementById("cuerpo-noticia")
noticia.innerHTML = "<em>Lorem ipsum dolor sit</em> amet consectetur adipisicing elit. Obcaecati illum quisquam fuga deleniti quae natus saepe expedita cupiditate error nesciunt."

input.value = "¡No me lo puedo creer, es increíble!"