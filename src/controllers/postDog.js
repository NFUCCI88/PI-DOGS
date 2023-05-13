const { Dog, Temperament} = require("../db");





const postDog = async (req, res) =>{
    const {name, heightMin, heightMax, weightMin, weightMax, img, lifeSpanMin, lifeSpanMax, temperament} = req.body;
    try {
        const newDog = await Dog.create({
            name: name, 
            heightMin: heightMin, 
            heightMax: heightMax, 
            weightMin: weightMin, 
            weightMax: weightMax, 
            img: img,
            lifeSpanMin:lifeSpanMin,
            lifeSpanMax: lifeSpanMax,
                });

        const getTemperament= await Temperament.findAll({
            where:{
                id:temperament,
            }

        });
        await newDog.addTemperament(getTemperament)
        res.status(201).json(newDog)
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {postDog}