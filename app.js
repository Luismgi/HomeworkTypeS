var edad = function (fecha) {
    var hoy = new Date();
    var edad = hoy.getFullYear() - fecha.getFullYear();
    var mes = hoy.getMonth() - fecha.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }
    return edad;
};
var fechaNac = new Date('1997-06-04');
var edadfinal = edad(fechaNac);
console.log("La edad es: ".concat(edadfinal));
