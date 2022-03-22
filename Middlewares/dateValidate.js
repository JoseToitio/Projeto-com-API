const dateRegEx = /\d{2}\/\d{2}\/\d{4}/;

const dateValidate = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  if (watchedAt === undefined || watchedAt === '') {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  if (!dateRegEx.test(watchedAt)) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};

module.exports = dateValidate;