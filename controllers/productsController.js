const db = require("../db/queries");

async function getProducts(req, res) {
    const categoryId = req.params.categoryId;
    const categ = await db.getCategory(categoryId);
    const products = await db.getAllProductsByCategory(categoryId);
    res.render("products/show", { title: `Products of ${categ.name}`, products: products, categoryId: categoryId });
}

async function createProductGet(req, res) {
    const categoryId = req.params.categoryId;
    const category = await db.getCategory(categoryId);
    res.render("products/new", { title: `Create Product for ${category.name}`, categoryId: categoryId })
}

async function updateProductGet(req, res) {
    const product = await db.getProduct(req.params.productId);
    const category = await db.getCategory(product.category_id);
    res.render("products/edit", { title: "Edit Product for ${category.name}", product: product })
}

async function createProductPost(req, res) {
  await db.insertProduct(req.body);
  const categoryId = req.body.categoryId;
  res.redirect(`/products/${categoryId}/show`);
}

async function updateProductPost(req, res) {
    const categoryId = req.body.categoryId;
    await db.updateProduct(req.body);
  res.redirect(`/products/${categoryId}/show`);
}

async function deleteProductGet(req, res) {
    await db.deleteProduct(req.params.productId)
    res.redirect("/")
}

module.exports = {
    getProducts,
    createProductGet,
    createProductPost,
    updateProductGet,
    updateProductPost,
    deleteProductGet
}