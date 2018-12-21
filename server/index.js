const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db/dbModel');
const router = require('./router');


// Middleware
app.use(express.static('./public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded());

// Routes
app.use('/', router);

// 404
app.use((req, res, next) => {
  res.status(404);
  res.send({ error: 'Not Found' });
});

// Start server
const port = 1337;
app.listen(port, () => console.log(`App listening on port ${port}!`))