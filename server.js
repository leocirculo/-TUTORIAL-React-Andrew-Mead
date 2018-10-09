const express = require('express');
const path = require('path');

// Create app
const app = express();

// Server folder
app.use(express.static('public'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
