//1.1
const game = {
    title: 'The last us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
};

const {title,gender,year} = game;

console.log("1.1");
console.log("Titulo: " + title);
console.log("Generos: " + gender);
console.log("Año: " + year);

//1.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1,fruit2,fruit3] = fruits;

console.log("1.2");
console.log("Fruta 1: " + fruit1);
console.log("Fruta 2: " + fruit2);
console.log("Fruta 3: " + fruit3);

//1.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name,race} = animalFunction();

console.log("1.3");
console.log("Nombre: " + name);
console.log("Raza: " + race);

//1.4
const car = {
    name: 'Mazda 6', 
    itv: [2015, 2011, 2020] 
};

const {name2,itv} = car;
const [anio1,anio2,anio3] = itv;

console.log("1.4");
console.log("Nombre coche: " + name2);
console.log("Años ITV: " + itv);
console.log("Año 1: " + anio1);
console.log("Año 2: " + anio2);
console.log("Año 3: " + anio3);

