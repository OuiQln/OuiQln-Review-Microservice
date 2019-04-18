const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');

const PORT = 3000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
