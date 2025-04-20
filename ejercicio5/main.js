const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

document.addEventListener('DOMContentLoaded', () => {
    const entrada = document.querySelector('[data-function="toFilterStreamers"]');
        
    entrada.addEventListener('keypress', (event) => {
        if(event.key == 'Enter'){
            console.log("Streamers segun texto introducido: " ,streamers.filter(streamer => streamer.name.includes(entrada.value)))
        }
    })
})
