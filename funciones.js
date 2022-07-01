const socio1 ={
    apellido: "Parra",
    nombre: "Javier",
    edad: 41,
    facturas: 2,
    dni: 1
};
const socio2 ={
    apellido: "Lapeire",
    nombre: "Gabriel",
    edad: 20,
    facturas: 4,
    dni: 2
};
const socio3 ={
    apellido: "Puccio",
    nombre: "Soledad",
    edad: 35,
    facturas: 7,
    dni: 3
};
const socio4 ={
    apellido: "Otero",
    nombre: "Blanca",
    edad: 90,
    facturas: 20,
    dni: 22583630
};
const socio5 ={
    apellido: "Gonzales",
    nombre: "Jose",
    edad: 23,
    facturas: 7,
    dni: 36853306
};
let socios =[
    socio1,
    socio2,
    socio3,
    socio4,
    socio5
];

function buscar() {
    let dni = document.getElementById('dni').value;
    let res = document.getElementById('res');
    let existe = false;
    let color = String;
    let caja = "padding:15px; margin-inline:180px";
    const medio = 4;
    const alto = 7;
    socios.forEach(element => {
        if (element.dni == dni) {
            existe = true;
        if (element.facturas < medio) {
            color = "green";
        }
        if (element.facturas >= medio && element.facturas < alto) {
            color = "yellow";
        }
        if (element.facturas >= alto) {
            color = "red";
        }
        res.innerHTML =
        `<p style="background-color:${color}; ${caja};">
        Nombre: ${element.nombre}<br>Facturas: ${element.facturas}</p>`;
        } else {
        if (!existe) {
            color = "red"
        res.innerHTML =
        `<p style="background-color:${color}; ${caja};">
        No existe un socio con este DNI</p>`;
        }
        }
    })
};

function reset() {
    document.getElementById('res').innerHTML =
    ``;
};

//se necesita buscar por dni si el socio existe, en caso de no existir mostrar en rojo "no existe"
//si existe, evaluar lo siguiente:
//si tiene no mas de 3 facturas mostrar en verde, entre 4 y 6 amarillo, mas de 6 rojo
//en todos los casos nombre y cantidad de facturas