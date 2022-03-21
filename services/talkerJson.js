const readFile = require('./readFile');

const talkerJson = async (req, res) => {
    const talkers = JSON.parse(await readFile());

    if (talkers.length === 0) {
      return res.status(200).json([]);
    }
    return res.status(200).json(talkers);
};

module.exports = talkerJson;