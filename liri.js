var keys = require('./keys')

require("dotenv").config();

var spotify = new Spotify(keys.spotify);