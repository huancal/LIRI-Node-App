# LIRI-Node-App

LIRI functions like the iPhone’s SIRI. While, SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and outputs your desired data.

# Expected Outcomes:

The LIRI was designed to produce search results based on the following commands:

* node liri.js concert-this <insert artist name>
* node liri.js spotify-this-song <insert song name>
* node liri.js movie-this <insert movie name>
* node liri.js do-what-it-says 

The respective commands produced different search results as outlined below: 

node liri.js concert-this “artist/band name”:
- Name of venue
- Venue location
- Date of the event in MM/DD/YYYY format

node liri.js spotify-this-song “song/track name”
- Artist
- Song
- Spotify song preview url
- Album

node liri.js movie-this “movie title”:
- Title of the movie
- Year the movie came out
- IMDB Rating of the movie
- Country where the movie was produced
- Language of the movie
- Plot of the movie
- Actors in the movie
- Rotten Tomatoes Rating of the movie

node liri.js do-what-it-says
- Print the spotify results for “I want it that way” stored in the random.txt file

# Requirements to run LIRI

The following need to be install before cloning the repository 

* A valid [Spotify](https://developer.spotify.com/documentation/web-api/) API key 
* A valid [IMDB](http://www.omdbapi.com/) API Key
* A valid [BANDS IN TOWN](https://www.artists.bandsintown.com/login) API Key
* Install NPM [Axios](https://www.npmjs.com/package/axios)
* Install NPM [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
* Install NPM [DotEnv](https://www.npmjs.com/package/dotenv)
* Install NPM [Moment](https://www.npmjs.com/package/moment)

**IMPORTANT: PLEASE CREATE AND COMPILE YOUR OWN API KEYS IN THE ROOT FOLDER ENCLOSED BY .env with the following code**

```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret
# IMDB API keys

IMDB_KEY=your-IMDB-api-key
```


