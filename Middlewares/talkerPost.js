const fs = require('fs').promises;

const talkerPost = async (req, res) => {
  const { name, age, talk } = req.body;
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