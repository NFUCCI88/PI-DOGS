const { getAllDogs  } = require("../utils")

const idDogs = async (req, res)=>{
    const {id} = req.params;

    const allDogs = await getAllDogs();
    const filterDog = allDogs.filter(dog =>dog.id == id);
    filterDog.length > 0
    ? res.status(200).json(filterDog)
    : res.status(404).send(`Dog not found`)
}

module.exports = { idDogs }