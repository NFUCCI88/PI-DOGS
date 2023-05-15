const getAllDogs   = require("../utils")

const allDogs = async (req, res) => {
    let results = await getAllDogs()// Obtenemos los perros formateados de la API y bd
    res.status(200).json(results)
};

module.exports = allDogs