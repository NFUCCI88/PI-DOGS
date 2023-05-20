const { Dog, Temperament} = require("../db");




// Creamos un nuevo perro con los datos enviados en el body
const postDog = async (req, res) =>{
    const {name, heightMin, heightMax, weightMin, weightMax, life_span, img, temperament} = req.body;// Creamos un nuevo perro con los datos enviados en el body
    try {
        const newDog = await Dog.create({
            name: name, 
            heightMin: heightMin, 
            heightMax: heightMax,
            weightMin: weightMin,
            weightMax: weightMax,
            img: img,
            life_span: life_span,
            });
// Buscamos los temperamentos que se enviaron en el body
        const getTemperament= await Temperament.findAll({
            where:{
                id:temperament,
            }

        });
        // Asignamos los temperamentos al perro creado
        await newDog.addTemperament(getTemperament)
        res.status(201).json(newDog)// Retornamos el perro creado
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = postDog;