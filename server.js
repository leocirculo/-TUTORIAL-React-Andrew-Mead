const express = require('express');

// Create app
const app = express();

// Server folder
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('App running on port 3000');
});
