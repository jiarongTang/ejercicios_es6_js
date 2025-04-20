//6.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

//6.1
console.log("6.1");
console.log(exams.reduce((suma,exam) => suma + exam.score, 0));

// 6.2
const notas = exams.reduce((suma,exam) => {
    if(exam.score >= 5){
        suma += exam.score;
    }
    return suma;
},0);

console.log("6.2");
console.log(notas);

//6.3
console.log("6.3");
console.log(exams.reduce((suma,exam) => suma + exam.score, 0)/exams.length);