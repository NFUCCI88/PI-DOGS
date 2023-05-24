const { Dog, Temperament} = require("../db");


// Creamos un nuevo perro con los datos enviados en el body
const updateDog = async (req, res) =>{
    const {id} = req.params;
    const {name, heightMin, heightMax, weightMin, weightMax, life_span, img, temperament} = req.body;
    try {
        const newDog = await Dog.update({
            name: name, 
            heightMin: heightMin, 
            heightMax: heightMax,
            weightMin: weightMin,
            weightMax: weightMax,
            img: img,
            life_span: life_span
            },
            {
                where:{
                    id,
                },
            }
            );
// Buscamos los temperamentos que se enviaron en el body
        const getTemperament= await Temperament.findAll({
            where:{
                id:temperament,
            }
        });
        // Eliminamos los temperamentos del perro
	    const dog = await Dog.findByPk(id);
	    await dog.setTemperaments([]);

        // Asignamos los temperamentos al perro creado
        await dog.addTemperament(getTemperament)
        res.status(201).json(dog)// Retornamos el perro creado
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = updateDog;