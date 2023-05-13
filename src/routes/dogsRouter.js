const {Router} = require("express");
const {searchNameDog} = require("../controllers/searchNameDog");
const {allDogs} = require("../controllers/allDogs");
const {idDogs} = require("../controllers/idDogs");
const {postDog} = require("../controllers/postDog");
const {validatePost} = require("../middlewares/validatePost")

const dogsRouter = Router();

dogsRouter.get("/", searchNameDog , allDogs);

dogsRouter.get("/:id", idDogs);

dogsRouter.post("/", validatePost, postDog);

module.exports = dogsRouter;