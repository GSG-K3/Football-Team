const express = require('express');
const path = require('path');
const apiCall = require('./Controllers/RequestService');
const leg = require('./Controllers/LeagueService');
const errorHandler = require('./Controllers/ErrorHandler');
const app = express();
//app.set('port', 3000);
//app.disable('x-powered-by');
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' })
);
console.log('rrrr');

app.get('/r', (req, res) => {
  console.log('req.url');
  //apiCall('https://jsonplaceholder.typicode.com/posts/1', leg);

  res.send('hi');
});

console.log('bbbbb');

app.use(errorHandler.error404);
app.use(errorHandler.error500);

app.listen(3001, () => console.log('nwew  riug'));
// app.listen(app.get('port'), () =>
//   console.log(`the Server in running ${app.get('port')}`)
// );
