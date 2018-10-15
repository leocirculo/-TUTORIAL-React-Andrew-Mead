var express = require('express');
var path = require('path');

// Create app
var app = express();
var port = process.env.PORT || 5000;

// Server folder
app.use(express.static('public'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(port, () => {
  console.log('App running on port ' + port);
});
