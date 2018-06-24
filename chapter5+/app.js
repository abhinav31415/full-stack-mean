let express = require('express');
let app = express();

let path = require('path');

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/json', (req, res) => {
  console.log('Get the json');
  res
    .status(200)
    .json({
      'jsonData': true
    });
});

app.get('/file', (req, res) => {
  console.log('Get the file');
  res
    .status(200)
    .sendFile(path.join(__dirname,'app.js'));
});

let server = app.listen(app.get('port'), () => {
  let port = server.address().port;
  console.log('Magic happens on port ' + port);
});