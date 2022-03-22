const express = require('express');
const bodyParser = require('body-parser');
const talkerJson = require('./Middlewares/talkerJson');
const talkerId = require('./Middlewares/talkerId');
const login = require('./Middlewares/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', talkerJson);
app.get('/talker/:id', talkerId);
app.post('/login', login);
app.listen(PORT, () => {
  console.log('Online');
});
