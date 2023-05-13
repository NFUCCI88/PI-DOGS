const {Dog, Temperament} = require("../db");
const axios = require("axios")
const {YOUR_API_KEY} = process.env;

const getDogsDb = async ()=>{
    const dogsDb = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: [],
              },
        }
    })

    const DogsDbClean = dogsDb.map((dog)=>{ 
        return{
            id: dog.id,
            name: dog.name,
            height: dog.height,
            lifeSpan: dog.age + " years",
            img: dog.img,
            temperament: dog.temperaments.map(temp => temp.name)
        }
    })

    return DogsDbClean;
} 

const getDogsApi = async() => {

    const dogsApi = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${YOUR_API_KEY}`)
    const dogsApiCLean= dogsApi.data?.map(dog => {
       
          return {
             id:dog.id,
             img:dog.image.url,
             name: dog.name,
             height:dog.height,
             Weight:dog.Weight,
             LifeSpan:dog.Life_Span,
             temperament: dog.temperament,
             from: "API"
             
          };
    })
    return dogsApiCLean;
    };

    const getAllDogs = async()=>{ 
         const dogsDb = await getDogsDb();             //aca es la tabla intermedia
         const dogsApi = await getDogsApi();
         return [...dogsDb, ...dogsApi] 

    }


module.exports = {getAllDogs }