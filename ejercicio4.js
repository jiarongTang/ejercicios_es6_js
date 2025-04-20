//4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

console.log("4.1");
console.log(ages.filter(age => age > 18));

//4.2
console.log("4.2");
console.log(ages.filter(age => age%2 === 0));

//4.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

console.log("4.3");
console.log(streamers.filter(streamer => streamer.gameMorePlayed == 'League of Legends'));

//4.4
console.log("4.4");
console.log(streamers.filter(streamer => streamer.name.includes('u')));

//4.5
console.log("4.5");
console.log(streamers.filter(streamer => {
    if(streamer.gameMorePlayed.includes('Legends')){
        if(streamer.age > 35){
            streamer.gameMorePlayed = streamer.gameMorePlayed.toLocaleUpperCase();
        }
        return streamer;
    }
}))