const fs = require("fs");

let number1 = 4;

console.clear();
console.log("=================");
console.log(`Tabla del ${number1}`);
console.log("=================");

let salida = "";

for (let i = 1; i <= 10; i++) {
  salida += `${number1} X ${i}= ${number1 * i}\n`;
}

console.log(salida);

fs.writeFile(`tabla-${number1}.txt`, salida, (err) => {
  if (err) throw err;

  console.log(`Tabla-${number1}.txt creado`);
});
