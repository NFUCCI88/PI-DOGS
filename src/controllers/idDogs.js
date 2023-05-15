const  getAllDogs   = require("../utils")

const idDogs = async (req, res)=>{
    const {id} = req.params; // Desestructuramos el id enviado en los params

    const allDogs = await getAllDogs();// Obtenemos los perros formateados de la API y db
    const filterDog = allDogs.filter(dog =>dog.id == id);// Buscamos el perro por el id enviado
    filterDog.length > 0
    ? res.status(200).json(filterDog)// Si se encuentra el perro, lo retornamos
    : res.status(404).send(`Dog not found`)// Si no se encuentra el perro, retornamos un mensaje de error
}

module.exports = idDogs;