const express = require("express")
const path = require("node:path")
require("dotenv").config();

const app = express()

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);
const categoriesRouter = require("./routes/categoriesRouter");
app.use("/categories", categoriesRouter);
const productsRouter = require("./routes/productsRouter");
app.use("/products", productsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening port ${PORT}`));