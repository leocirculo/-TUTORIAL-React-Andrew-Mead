const express = require('express');
const path = require('path');

// Create app
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'http') return next();
  res.redirect('http://' + req.hostname + req.url);
})

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
