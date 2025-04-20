//3.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

console.log("3.1");
console.log(users.map(user =>(user.name)));

//3.2

console.log("3.2");
console.log(users.map(user => {
    if(user.name.startsWith('A')){
        return 'Analecto';
    }else{
        return user.name;
    }
}));

//3.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

console.log("3.3");
console.log(cities.map(city => {
    if(city.isVisited){
        return city.name.concat(" (Visitado)");
    }else{
        return city.name;
    }
}));
