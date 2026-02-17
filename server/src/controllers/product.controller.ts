import Product from "../models/Product.ts";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  console.log("getProducts hit"); // add this
  try {
    const products = await Product.find().sort("-createdAt");
    res.status(201).json(products);
  } catch (error) {
    res.status(400).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: "Product not found",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};
