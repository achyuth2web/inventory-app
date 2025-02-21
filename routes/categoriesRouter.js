const { Router } = require("express")
const categoriesRouter = Router();
const categoriesController = require("../controllers/categoriesController")

categoriesRouter.get("/new", categoriesController.createCategoryGet)
categoriesRouter.post("/new", categoriesController.createCategoryPost)
categoriesRouter.get("/:categoryId/edit", categoriesController.updateCategoryGet)
categoriesRouter.post("/update", categoriesController.updateCategoryPost)
categoriesRouter.get("/:categoryId/delete", categoriesController.deleteCategoryGet);

module.exports = categoriesRouter;