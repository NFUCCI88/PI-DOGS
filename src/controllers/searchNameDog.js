const getAllDogs = require("../utils")

const searchNameDog = async (req, res, next) =>{
    const {name} = req.query; //Desestructuramos el query enviado en la URL
    if(name){// Si se envía un query en la URL, filtramos los perros por el nombre enviado
        const allDogs = await getAllDogs();// Obtenemos los perros formateados
        const filterDogs = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));//filtro el nombre para mayúsculas o minúsculas
        filterDogs.length > 0
        ? res.status(200).json(filterDogs)// Si hay perros con ese nombre, los retornamos
        : res.status(404).send(`Dog not found`);// Si no hay perros con ese nombre, retornamos un mensaje de error
    } else {
       next()
    };

};

module.exports = searchNameDog;