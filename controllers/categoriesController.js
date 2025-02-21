const db = require("../db/queries");

async function getCategories(req, res) {
    const categories = await db.getAllCategories();
    res.render("index", { title: "Welcome to My Store", categories: categories });
}

async function createCategoryGet(req, res) {
    res.render("categories/new", { title: "Create Category" })
}

async function updateCategoryGet(req, res) {
    const category = await db.getCategory(req.params.categoryId);
    res.render("categories/edit", { title: "Edit Category", category: category })
}

async function createCategoryPost(req, res) {
  await db.insertCategory(req.body);
  res.redirect("/");
}

async function updateCategoryPost(req, res) {
    await db.updateCategory(req.body);
  res.redirect("/");
}

async function deleteCategoryGet(req, res) {
    await db.deleteCategory(req.params.categoryId)
    res.redirect("/")
}

module.exports = {
    getCategories,
    createCategoryGet,
    createCategoryPost,
    updateCategoryGet,
    updateCategoryPost,
    deleteCategoryGet
}