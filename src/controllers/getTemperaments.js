const {Temperament} = require("../db")

const getTemperaments = async (req, res) =>{
try {
    const temperaments = await Temperament.findAll();// Obtenemos los temperamentos y los retornamos
    return res.status(200).json(temperaments)
} catch (error) {
    res.status(500).json({message: "Internal server error"});
}
};

module.exports = getTemperaments;