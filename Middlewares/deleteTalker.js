const fs = require('fs').promises;
const readFile = require('./readFile');

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const resultFile = JSON.parse(await readFile());
  const filterTalker = resultFile.filter((talker) => talker.id !== Number(id));
  await fs.writeFile('./talker.json', JSON.stringify(filterTalker));
  return res.status(204).end();
};

module.exports = deleteTalker;