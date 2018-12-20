const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded());


const port = 1337;
app.listen(port, () => console.log(`App listening on port ${port}!`))

