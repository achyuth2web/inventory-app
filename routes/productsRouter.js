const { Router } = require("express")
const productsRouter = Router();
const productsController = require("../controllers/productsController")

productsRouter.get("/:categoryId/show", productsController.getProducts)
productsRouter.get("/:categoryId/new", productsController.createProductGet)
productsRouter.post("/new", productsController.createProductPost)
productsRouter.get("/:productId/edit", productsController.updateProductGet)
productsRouter.post("/update", productsController.updateProductPost)
productsRouter.get("/:productId/delete", productsController.deleteProductGet);

module.exports = productsRouter;