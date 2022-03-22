const fs = require('fs').promises;

const talkerPost = async (req, res) => {
  const { name, age, talk } = req.body;
  if (!talk) {
    return res.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
   });
  }
  const result = await fs.readFile('./talker.json', 'utf-8');
  const obj = JSON.parse(result);
  const addTalker = {
    id: obj.length + 1,
    name,
    age,
    talk,
  };
  obj.push(addTalker);
  await fs.writeFile('./talker.json', JSON.stringify(obj));
  res.status(201).json(addTalker);
};

module.exports = talkerPost;