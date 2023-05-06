const express = require("express");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Homepage</h1><a href="api/product">product</a>`);
});

app.get("/api/product", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get("/api/product/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send(`<h1>Product not found</h1>`);
  }
  return res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProduct = [...products];
  if (search) {
    sortedProduct = sortedProduct.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }
  res.status(200).json(sortedProduct)
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
 