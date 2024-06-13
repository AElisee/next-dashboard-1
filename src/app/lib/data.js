import dbConnect from "./dbConnect.js";
import { Product } from "./product.model.js";
import { User } from "./user.model.js";
import { ITEMS_PER_PAGE } from "./utils.js";

export const fetchUsers = async (search, page) => {
  const regex = new RegExp(search, "i");

  try {
    dbConnect();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (page - 1));
    return { count, users };
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};


export const fetchProducts= async (search, page) => {
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
