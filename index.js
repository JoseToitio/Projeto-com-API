const express = require('express');
const bodyParser = require('body-parser');
const talkerJson = require('./services/talkerJson');

const app = express();
app.use(bodyParser.json());
app.use(talkerJson);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', talkerJson);

app.listen(PORT, () => {
  console.log('Online');
});
