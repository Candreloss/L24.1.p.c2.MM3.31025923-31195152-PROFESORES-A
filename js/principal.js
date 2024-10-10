import CL_profesor from "./CL_profesor.js";
import CL_pfijo from "./CL_pfijo.js";
import CL_pcont from "./CL_pcont.js";

let p1 = new CL_pfijo("Carlos", 25, 100);
let p2 = new CL_pfijo("Carolina", 40, 90);

let salida = document.getElementById("salida");

salida.innerHTML = `Nombre del profesor fijo: ${p1.nombre} <br>`
salida.innerHTML += `Monto del bono: $${p1.bono} <br>`
salida.innerHTML += `Monto del sueldo $${p1.sueldo} <br>`
salida.innerHTML += `Total: $${p1.total()} <br> <br>` 

salida.innerHTML += `Nombre del profesor fijo: ${p2.nombre} <br>`
salida.innerHTML += `Monto del bono: $${p2.bono} <br>`
salida.innerHTML += `Monto del sueldo $${p2.sueldo} <br>`
salida.innerHTML += `Total: $${p2.total()} <br>`



