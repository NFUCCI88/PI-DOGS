const {Router} = require("express");
const getTemperaments = require("../controllers/getTemperaments");

const temperamentsRouter = Router();


temperamentsRouter.get("/", getTemperaments);


module.exports = temperamentsRouter;

