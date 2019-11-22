var keys = require('./keys')

const axios = require("axios")

require("dotenv").config();

// var spotify = new Spotify(keys.spotify);


// concert-this command

const url = "https: //rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp"

// const artist = () => {
//     const arguments = process.argv;
// }


axios.get(url).then(res =>
    console.log(res.venue));