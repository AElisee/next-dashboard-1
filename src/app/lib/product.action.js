"use server";
import { redirect } from "next/navigation.js";
import dbConnect from "./dbConnect.js";
import { revalidatePath } from "next/cache.js";
import { Product } from "./product.model.js";

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
