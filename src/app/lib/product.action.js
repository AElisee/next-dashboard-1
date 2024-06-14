"use server";
import { redirect } from "next/navigation.js";
import dbConnect from "./dbConnect.js";
import { revalidatePath } from "next/cache.js";
import { Product } from "./product.model.js";
import { ITEMS_PER_PAGE } from "./utils.js";

// get all products
export const fetchProducts = async (search, page) => {
  const regex = new RegExp(search, "i");

  try {
    dbConnect();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { count, products };
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

// get single product
export const fetchSingleProduct = async (id) => {
  try {
    dbConnect();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw new Error("Failed to fetch product");
  }
};

// create product
export const addProduct = async (FormData) => {
  const { title, price, color, size, stock, category, description } =
    Object.fromEntries(FormData);

  try {
    dbConnect();

    const newProduct = new Product({
      title,
      price,
      color,
      size,
      stock,
      category,
      description,
    });

    await newProduct.save();
  } catch (error) {
    throw new Error("Failed to add product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

// update product
export const UpdateProduct = async (FormData) => {
  const { id, title, price, color, size, stock, category, description } =
    Object.fromEntries(FormData);
  try {
    dbConnect();

    const upDateFields = {
      title,
      price,
      color,
      size,
      stock,
      category,
      description,
    };

    Object.keys(upDateFields).forEach(
      (key) =>
        (upDateFields[key] === "" || undefined) && delete upDateFields[key]
    );

    await Product.findByIdAndUpdate(id, upDateFields);
  } catch (error) {
    throw new Error("Failed to update product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};


// delete product
export const deleteProduct = async (FormData) => {
  const { id } = Object.fromEntries(FormData);

  try {
    dbConnect();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete product");
  }

  revalidatePath("/dashboard/products");
};
