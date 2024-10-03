

let autos = new Array ("BBW","mercedes","volvo");

const coches = ["BBW","mercedes","volvo"];

console.log(coches[1]);


for (let contador=0;contador<coches.length;contador++){

    console.log(contador+ "  "+ coches[contador]);
}
coches[1]="MercedesBenz";
console.log(coches[1]);

coches.push("Nissan");

console.log(coches);

coches[coches.length] = "Audi";

console.log(coches);
coches.pop()

console.log(Array.isArray(coches));
console.log(coches instanceof Array)

