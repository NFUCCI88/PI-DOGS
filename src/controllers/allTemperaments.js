const { getAllDogs  } = require("../utils")
const { Temperament } = require("../db")

const allTemperaments = async (req, res) => {
    try {
        const checkTemperaments = await Temperament.findAll();
        if(!checkTemperaments.length) {

        }
        const dogsApi = await getAllDogs();
        const temperaments = dogsApi.map((dog) =>{
            return { name : dog.temperament};
        });

        splitedTemperaments = temperaments.map((temp)=> temp.name?.split(", "));
        temperamentsInOneArray = splitedTemperaments.join(",").split(",");
        const removeDuplicates = [...new Set(temperamentsInOneArray)];
        const temperamentsToDB = removeDuplicates.map((temp) =>{
            return {name: temp}
        });

        await Temperament.bulkCreate(temperamentsToDB);
        await Temperament.destroy({
            where: {
                name:null || "",
            },
        });
        res.status(200).json(temperamentsToDB)
    } catch (error) {
        throw new Error(error);
    };
};

module.exports = {allTemperaments}