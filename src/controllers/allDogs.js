const { getAllDogs  } = require("../utils")

const allDogs = async (req, res) => {
    let results = await getAllDogs()
    res.status(200).json(results)
};

module.exports = {allDogs}