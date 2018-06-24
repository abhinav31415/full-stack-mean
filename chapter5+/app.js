let express = require('express');
let app = express();
let path = require('path');

let routes = require('./routes');

app.set('port', 3000);

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();  
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

let server = app.listen(app.get('port'), () => {
  let port = server.address().port;
  console.log('Magic happens on port ' + port);
});