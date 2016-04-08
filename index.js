var express = require('express');
var app = express();
var _ = require('lodash');
var url = require('url');

var port = 8080;

var songs = [{
  track: 'hello',
  artist: 'world'
}];

// app.get('/', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
// 
app.get('/current', function(req, res) {
  res.json(_.last(songs));
});

app.post('/scrobble', function(req, res) {
  var urlParts = url.parse(req.url, true)
  var query = urlParts.query;

  var track = query.track;
  var artist = query.artist;

  if (track && artist) {
    console.log(track, artist);
    songs.push({
      track: track,
      artist: artist
    });
  }

  res.send();
});

app.listen(port, function() {
  console.log(`App running on port ${port}`);
});
