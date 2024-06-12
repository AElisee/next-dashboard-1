import dbConnect from "./dbConnect.js";
import { User } from "./user.model.js";

export const fetchUsers = async () => {
  try {
    dbConnect();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};
