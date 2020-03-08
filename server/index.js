const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '../../client/dist'));

app.listen(port, () => console.log(`Connected to port ${port}`));
