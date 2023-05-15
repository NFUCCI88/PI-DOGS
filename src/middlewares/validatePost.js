
const validatePost = (req, res, next) => {
    const {name, heightMin, heightMax, weightMin, weightMax, lifeSpanMin, lifeSpanMax, img, temperament} = req.body;
    if (!name) return res.status(400).send(`Missing name`);
    if (!heightMin) return res.status(400).send(`Missing height`);
    if (!heightMax) return res.status(400).send(`Missing height`);
    if (!weightMin) return res.status(400).send(`Missing weight`);
    if (!weightMax) return res.status(400).send(`Missing weight`);
    if (!img) return res.status(400).send(`Invalid URL image`);
    if (!lifeSpanMin) return res.status(400).send(`Missing life span`);
    if (!lifeSpanMax) return res.status(400).send(`Missing life span`);
    if (!temperament) return res.status(400).send(`Missing temperament/s`)
    next()
}


module.exports = validatePost;
