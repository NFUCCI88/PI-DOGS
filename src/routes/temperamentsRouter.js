const {Router} = require("express");
const {allTemperaments} = require("../controllers/allTemperaments");

const temperamentsRouter = Router();


temperamentsRouter.get("/", allTemperaments);


module.exports = temperamentsRouter;

