const { Router } = require("express")
const indexRouter = Router();
const categoriesController = require("../controllers/categoriesController")

indexRouter.get("/", categoriesController.getCategories)

module.exports = indexRouter;