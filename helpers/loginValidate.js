const validateEmail = (email) => {
  if (email === '' || email === undefined) return 'O campo "email" é obrigatório';
  if (!email.includes('@') 
  || !email.includes('.com')) return 'O "email" deve ter o formato "email@email.com"';
};

const validatePassword = (password) => {
  if (password === '' || password === undefined) return 'O campo "password" é obrigatório';
  if (password.length < 6) return 'O "password" deve ter pelo menos 6 caracteres';
};

const validateLogin = (email, password) => {
  if (validateEmail(email) !== undefined) return validateEmail(email);
  return validatePassword(password);
};

module.exports = validateLogin;