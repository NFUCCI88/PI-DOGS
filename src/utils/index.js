const {Dog, Temperament} = require("../db");
const axios = require("axios")
const {YOUR_API_KEY} = process.env;

const getDogsDb = async ()=>{
    const dogsDb = await Dog.findAll({// Hacemos una búsqueda en la base de datos de todos los perros
        include: {
            model: Temperament,// Incluimos los nombres de cada temperamento que tenga el perro
            attributes: ["name"],// Solo queremos que se muestre el nombre del temperamento
            through: {
                attributes: [], // No queremos que se muestre información de la tabla intermedia
              },
        }
    })

    const DogsDbClean = dogsDb.map((dog)=>{ // Formateamos los datos de los perros obtenidos haciendo un map por cada perro
        return{
            id: dog.id,
			name: dog.name,
			img: dog.img,
			heightMin: dog.heightMin,
			heightMax: dog.heightMax,
			weightMin: dog.weightMin,
			weightMax: dog.weightMax,
			lifeSpanMin: dog.lifeSpanMin,
            lifeSpanMax: dog.lifeSpanMax,
            temperament: dog.temperaments.map(temp => temp.name)// Hacemos un map por cada temperamento que tenga el perro
        }
    })

    return DogsDbClean;
} 

const getDogsApi = async() => {
// Hacemos la petición a la API y guardamos los perros obtenidos en una variable
    const dogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)
    const dogsApiCLean= dogsApi.data?.map(dog => {// Formateamos los datos de los perros obtenidos haciendo un map por cada perro
       
          return {
             id:dog.id,
             img:dog.image.url,
             name: dog.name,
             height:dog.height,
             weight:dog.weight,
             lifeSpan:dog.life_span,
             temperament: dog.temperament,
             from: "API"
             
          };
    })
    return dogsApiCLean;
    };

    const getAllDogs = async()=>{ 
         const dogsDb = await getDogsDb();             
         const dogsApi = await getDogsApi();
         return [...dogsDb, ...dogsApi] 

    }

    const deleteDog = async (id) => {
        const dog = await Dog.findByPk(id); // Buscamos el perro por id
        await dog.destroy(); // Eliminamos el perro
    
        return dog; // Retornamos el perro eliminado
    };



module.exports = {getAllDogs, deleteDog }