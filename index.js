const express = require('express');
const bodyParser = require('body-parser');
const talkerJson = require('./Middlewares/talkerJson');
const talkerId = require('./Middlewares/talkerId');
const login = require('./Middlewares/login');
const ageValidate = require('./Middlewares/ageValidate');
const rateValidate = require('./Middlewares/rateValidate');
const nameValidate = require('./Middlewares/nameValidate');
const talkerPost = require('./Middlewares/talkerPost');
const dateValidate = require('./Middlewares/dateValidate');
const tokenValidation = require('./Middlewares/tokenValidation');
const talkValidate = require('./Middlewares/talkValidate');
const editTalker = require('./Middlewares/editTalker');
const deleteTalker = require('./Middlewares/deleteTalker');

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
app.post('/talker', 
  tokenValidation, nameValidate, ageValidate, talkValidate, dateValidate, rateValidate, talkerPost);
app.put('/talker/:id', 
  tokenValidation, nameValidate, ageValidate, talkValidate, dateValidate, rateValidate, editTalker);
app.delete('/talker/:id', tokenValidation, deleteTalker);
app.listen(PORT, () => {
  console.log('Online');
});
