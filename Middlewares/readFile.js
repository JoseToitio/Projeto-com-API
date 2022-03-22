const fs = require('fs').promises;

const readFile = async () => {
  const result = await fs.readFile('talker.json', 'utf8');
  return result;
};

module.exports = readFile;