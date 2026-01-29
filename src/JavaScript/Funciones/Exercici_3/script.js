document.getElementById("ejercicio").addEventListener('click', () => main());

let coches = [
    ["seat","Codoba",1997,10000],
    ["Kia","Sorento",1994,1000],
    ["seat","Todelo",2000,10000],
    ["Fiat","Bravo",2010,10200],
    ["Fiat","500",2010,10000],
    ["Mercedes","Calse B",2001,39000],  
    ["seat","Ibiza",1993,10100],
    ["Alfa Romeo","Julieta",2002,10000],
    ["Alfa Romeo","159",2002,10400],
    ["Mercedes","Calse C",2001,1000],  
    ["Alfa Romeo","147",1990,10500],
    ["Fiat","Punto",1990,999],
    ["Citroen","Saxo",1980,10300],
    ["Renault","Superc 5",1980,12000],
    ["BWM","M3",2020,1000],
    ["Kia","Picanto",1990,1000],
    ["Alfa Romeo","spider",1970,14500],
    ["Mercedes","Calse A",1994,60100],  
    ["Mercedes","Calse D",2011,21221]  
];

function main() {
    const anyoActual = new Date().getFullYear();
    const resultado = coches
        .filter(coche => 
            coche[0] !== "Alfa Romeo" &&
            coche[0] !== "Kia" &&
            (anyoActual - coche[2]) > 20
        )
        
        .map(coche => [
            coche[0],
            coche[1],
            coche[2],
            coche[3] * 0.8
        ]
    );
    console.log(resultado);
    //return resultado;
}