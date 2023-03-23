var nombre = "belen";
var altura = 180;

var aux = nombre + " " + altura;
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Hola soy la caja de datos</h1>
    <h2>Mi nombre es: ${aux}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

if(altura >= 190) {
    datos.innerHTML += `<h1>Eres una persona alta</h1>`;
} else {
    datos.innerHTML += `<h1>Eres una persona baja</h1>`;
}

for(var i = 0; i<=2020; i++) {
    datos.innerHTML = `<h2>estamos en el año ${i} </h2>`;
}