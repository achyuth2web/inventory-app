const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories ORDER BY id ASC");
  return rows;
}

async function insertCategory(category) {
  await pool.query(
    "INSERT INTO categories (name, description) VALUES ($1, $2)",
    [category.categoryName, category.description]
  );
}

async function getCategory(categoryId) {
  const category = await pool.query(
    `SELECT * FROM categories WHERE id = $1`, [categoryId]
  );
  return category.rows.length > 0 ? category.rows[0] : null;
}

async function updateCategory(category) {
  await pool.query(
    `UPDATE categories
         SET name = $1, description = $2, updated_at = NOW()
         WHERE id = $3`,
    [category.categoryName, category.description, category.categoryId]
  );
}

async function deleteCategory(categoryId) {
  await pool.query(`DELETE FROM categories WHERE id = $1`, [categoryId]);
}

async function getAllProductsByCategory(categoryId) {
  const { rows } = await pool.query(
    `SELECT * FROM products WHERE category_id = $1`, [categoryId]
  );
  return rows;
}

async function insertProduct(product) {
  await pool.query(
    "INSERT INTO products (category_id, name, price, color, item_size, description) VALUES ($1, $2, $3, $4, $5, $6)",
    [
      product.categoryId,
      product.productName,
      product.price,
      product.color,
      product.size,
      product.description,
    ]
  );
}

async function getProduct(productId) {
  const product = await pool.query(
    `SELECT * FROM products WHERE id = $1`, [productId]
  );
  return product.rows.length > 0 ? product.rows[0] : null;
}

async function updateProduct(product) {
  await pool.query(
    `UPDATE products
         SET name = $1, price = $2, color = $3, item_size = $4, description = $5, updated_at = NOW()
         WHERE id = $6`,
    [
      product.productName,
      product.price,
      product.color,
      product.size,
      product.description,
      product.productId,
    ]
  );
}

async function deleteProduct(productId) {
  await pool.query(`DELETE FROM products WHERE id = $1`, [productId]);
}

module.exports = {
  getAllCategories,
  getCategory,
  insertCategory,
  updateCategory,
  deleteCategory,
  getAllProductsByCategory,
  getProduct,
  insertProduct,
  updateProduct,
  deleteProduct
};
