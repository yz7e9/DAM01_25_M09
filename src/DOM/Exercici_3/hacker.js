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

// 3
const nuevoElemento = document.createElement("p")
nuevoElemento.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, architecto?"

const img = document.createElement("img")
img.setAttribute("src", "https://imgproxy.nanxiongnandi.com/26xe0YHtppHKHsmRpHctttcKnEdZz7YwUTErfMYStiE/w:1280/aHR0cHM6Ly9pbWcu/bmFueGlvbmduYW5k/aS5jb20vMjAyNTEy/L0NvcGFuUnVpbnMu/anBn.jpg")

//document.querySelector("article").appendChild(nuevoElemento)
document.getElementById("cuerpo-noticia").insertAdjacentElement("afterend", nuevoElemento)
nuevoElemento.insertAdjacentElement("afterend", img)