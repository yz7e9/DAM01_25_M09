class FiguraGeometrica {
    #nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    calcularArea() { }
}

class Rectangulo extends FiguraGeometrica {
    lado;
    constructor(nombre, lado) {
        super(nombre)
        this.lado = lado;
    }
    calcularArea() {
        return Math.pow(this.lado, 4);
    }
}

class Triangulo extends FiguraGeometrica {
    base;
    altura;
    constructor(nombre, base, altura) {
        super(nombre)
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura / 2;
    }
}

class Circulo extends FiguraGeometrica {
    radio;
    constructor(nombre, radio) {
        super(nombre)
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2)
    }
}

const rectangulo = new Rectangulo('Rectangulo', 5);
console.log(rectangulo.calcularArea())

const triangulo = new Triangulo('Triangulo', 5, 5);
console.log(triangulo.calcularArea())

const circulo = new Circulo('Circulo', 5);
console.log(circulo.calcularArea())