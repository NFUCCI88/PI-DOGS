const { getAllDogs  } = require("../utils")

const searchNameDog = async (req, res, next) =>{
    const {name} = req.query;
    if(name){
        const allDogs = await getAllDogs();
        const filterDogs = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
        filterDogs.length > 0
        ? res.status(200).json(filterDogs)
        : res.status(404).send(`Dog not found`);
    } else {
       next()
    };

};

module.exports = {searchNameDog}