const {Router} = require("express");
const {searchNameDog} = require("../controllers/searchNameDog");
const {allDogs} = require("../controllers/allDogs");
const {idDogs} = require("../controllers/idDogs");
const {postDog} = require("../controllers/postDog");
const {validatePost} = require("../middlewares/validatePost")
const {deleteDogById} = require("../controllers/deleteDogById");
const {updateDog} = require("../controllers/updateDog");

const dogsRouter = Router();

dogsRouter.get("/", searchNameDog , allDogs);

dogsRouter.get("/:id", idDogs);

dogsRouter.post("/", validatePost, postDog);

dogsRouter.delete("/:id", deleteDogById);

dogsRouter.put("/:id", validatePost, updateDog)

module.exports = dogsRouter;