require("dotenv").config();

var keys = require('./keys')

const axios = require("axios")

// import fs package to read and write
var fs = require('fs')




// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);


// concert-this command

var getBands = (artist) => {

    const url = "https: //rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    console.log(url);
    axios.get(url).then(res => {
        console.log(res.data);

        if (!res.data.length) {
            console.log("No results found for " + artist);
            return;
        }
        for (var i = 0; i < res.data.length; i++) {
            var show = res.data[i];
            console.log("Name of the Venue", show.venue.name);
            console.log("Venue Location", show.venue.city);
            console.log("Time", moment(show.datetime).format("MM/DD/YYYY"));
        }
    });
}

// spotify-this-song

var getSpotify = (songName) => {
    if (songName === undefined || ' ') {
        songName === "The Sign: Ace of Base"
    }
    spotify.search({
        type: 'track',
        query: songName,
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // console.log(data);
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log("ARTIST(S)" + (songs[i].artists[0].name));
            console.log("song name: " + songs[i].name);
            console.log("preview song: " + songs[i].preview_url);
            console.log("album: " + songs[i].album.name);

        }
    });
}

// Movie name 

var getMovie = (movieName) => {

    if (movieName === undefined || ' ') {
        movieName === "Mr. Nobody"
    }

    var movieURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";


    axios.get(movieURL).then(res => {

        if (res.data.title === "Mr. Nobody") {
            console.log("Its on Netflix!");
        }
        console.log("Title of Movie: ", res.data.Title);
        console.log("Year: ", res.data.Year);
        console.log("IMDB Rating: ", res.data.imdbRating);
        console.log("Rotten Tomatoes: ", res.data.Ratings[1].Value);
        console.log("Country: ", res.data.country);
        console.log("Language: ", res.data.language);
        console.log("Plot: ", res.data.plot);
        console.log("Actors: ", res.data.actors);
    })
}

// do what it says 

var doWhat = () => {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        console.log(data);

        var dataArr = data.split(",");
        if (dataArr.length === 2) {
            liriChat(dataArr[0], dataArr[1]);
        } else if (dataArr.length === 1) {
            liriChat(dataArr[0]);
        }
    });
}

var lirichat = (command, functionData) => {

    switch (command) {
        case "concert-this":
            getBands(functionData);
            break;
        case "spotify-this-song":
            getSpotify(functionData);
            break;
        case "movie-this":
            getMovie(functionData);
            break;
        case "do-what-it-says":
            doWhat(functionData);
            break;
        default:
            console.log("LIRI doesn't know that");
    }
};


// MAIN PROCESS
// =====================================

console.log(process.argv[2]);
console.log(process.argv[3]);



lirichat(process.argv[2], process.argv.slice(3).join(" "));