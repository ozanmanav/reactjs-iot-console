const express = require('express');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000);
