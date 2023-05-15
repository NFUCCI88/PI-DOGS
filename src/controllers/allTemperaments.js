
const { Temperament } = require("../db")
const axios = require("axios")
const {YOUR_API_KEY} = process.env;

const allTemperaments = async () => {
    try {
        const checkTemperaments = await Temperament.findAll();// Buscamos si ya existen temperamentos en la base de datos
        if(!checkTemperaments.length) {// Si no existen temperamentos, los creamos

            const dogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`);// Obtenemos los perros de la api
            const temperaments = dogsApi.data.map((dog) =>{// Mapeamos los temperamentos
                return { name : dog.temperament};
       
        });
        // Separamos los nombres de los temperamentos en un array
        splitedTemperaments = temperaments.map((temp)=> temp.name?.split(", "));
        temperamentsInOneArray = splitedTemperaments.join(",").split(",");// Unimos todos los temperamentos en un solo array
        const removeDuplicates = [...new Set(temperamentsInOneArray)];// Eliminamos los temperamentos duplicados
        const temperamentsToDB = removeDuplicates.map((temp) =>{// Preparamos los temperamentos para enviarlos a la base de datos
            return {name: temp}
        });
        // Enviamos los temperamentos a la base de datos
         await Temperament.bulkCreate(temperamentsToDB);
        await Temperament.destroy({
            where: {
                name:null || "",// Eliminamos los temperamentos que no tienen nombre
            },
        });
        
       
    } 

   
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = allTemperaments;