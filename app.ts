const edad =(fecha: Date)=>{
     const hoy = new Date();
  let edad = hoy.getFullYear() - fecha.getFullYear();
  const mes = hoy.getMonth() - fecha.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fecha.getDate())) {
    edad--;
  }
  return edad;
}
const fechaNac = new Date('1997-06-04');
const edadfinal = edad(fechaNac);
console.log(`La edad es: ${edadfinal}`); 

 
