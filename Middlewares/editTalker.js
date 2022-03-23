const fs = require('fs').promises;
const readFile = require('./readFile');

const editTalker = async (req, res) => {
  const { id } = req.params;
  const resultFile = JSON.parse(await readFile());
  const filterTalker = resultFile.filter((talker) => talker.id !== id);
  const newTalker = {
    ...req.body,
    id: resultFile.length,
  };
  filterTalker.push(newTalker);
  fs.writeFile('./talker.json', JSON.stringify(filterTalker));
  res.status(200).json(newTalker);
};

module.exports = editTalker;