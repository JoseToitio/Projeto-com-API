const tokenRandom = require('../helpers/token');
const loginValidate = require('../helpers/loginValidate');

const login = (req, res) => {
  const { email, password } = req.body;
  const validateLogin = loginValidate(email, password);
  const token = tokenRandom();
  if (validateLogin !== undefined) return res.status(400).json({ message: validateLogin }); 
  return res.status(200).json({ token });
};

module.exports = login;