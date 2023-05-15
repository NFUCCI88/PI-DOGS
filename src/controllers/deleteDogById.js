const { Dog  } = require("../db")


const deleteDogById = async (req, res) => {
	const { id } = req.params; // Desestructuramos el id enviado en los params
	const dog = await Dog.findByPk(id);//Buscamos al perro por id
	
	try {
		const deleteDog = await dog.destroy() // Eliminamos el perro
		if (deleteDog) { // Si se elimina el perro, lo retornamos
			return res.status(200).json(dog);
		} else {
			// Si no se encuentra el perro, retornamos un mensaje de error
			return res.status(404).json({ message: "Dog not found." });
		}
	} catch (error) {
		return res.status(500).json({ message: "Internal server error." });
	}
};



module.exports = deleteDogById;