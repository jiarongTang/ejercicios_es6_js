//2.1
const pointsList = [32, 54, 21, 64, 75, 43];

const copia = [...pointsList];

console.log("2.1");
console.log(copia);

//2.2
const toy = {
    name: 'Bus laiyiar', 
    date: '20-30-1995', 
    color: 'multicolor'
};

const copyToy = {...toy};

console.log("2.2");
console.log(copyToy);

//2.3
//const pointsList = [32, 54, 21, 64, 75, 43]; //esta en 2.1
const pointsLis2 = [54,87,99,65,32];

const combinacion = [...pointsList, ...pointsLis2];

console.log("2.3");
console.log(combinacion);

//2.4
//const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}; // esta en 2.2
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const newToy = {...toy, ...toyUpdate};

console.log("2.4");
console.log(newToy);

//2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newColor = [...colors.slice(0,2),...colors.slice(3)];

console.log("2.5");
console.log(newColor);