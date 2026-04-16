const usuarios = [
    {
        nombre: "Juan",
        edad: 25,
        email: "juan@example.com",
        saludar() {
            console.log(`Hola, soy ${this.nombre}`);
        }
    },
    {
        nombre: "María",
        edad: 30,
        email: "maria@example.com",
        saludar() {
            console.log(`Hola, soy ${this.nombre}`);
        }
    },
    {
        nombre: "Carlos",
        edad: 22,
        email: "carlos@example.com",
        saludar() {
            console.log(`Hola, soy ${this.nombre}`);
        }
    }
];

usuarios.push({
    nombre: "Laura",
    edad: 28,
    email: "laura@email.com",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
});

function mostrarUsuarios() {
    usuarios.forEach(usuario => {
        console.log(
            `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Email: ${usuario.email}`
        );
    });
}

mostrarUsuarios();

usuarios.forEach(usuario => {
    usuario.saludar();
});
