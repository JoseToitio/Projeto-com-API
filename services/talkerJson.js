const fs = require('fs').promises;

const talkerJson = async (req, res) => {
    const result = await fs.readFile('talker.json', 'utf8');
    const talkers = JSON.parse(result);

    if (talkers.length === 0) {
      return res.status(200).json([]);
    }
    return res.status(200).json(talkers);
};

module.exports = talkerJson;