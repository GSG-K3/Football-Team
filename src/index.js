const express = require('express');
const path = require('path');
const app = express();
app.set('port', 3000);
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(app.get('port'), () =>
  console.log(`the Server in running ${app.get('port')}`)
);
