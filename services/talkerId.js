const readFile = require('./readFile');

const talkerId = async (req, res) => {
  const { id } = req.params;
  const result = JSON.parse(await readFile());
  const findId = result.find((talker) => talker.id === Number(id));
  if (!findId) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(findId);
};

module.exports = talkerId;