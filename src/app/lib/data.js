import dbConnect from "./dbConnect.js";
import { User } from "./user.model.js";

export const fetchUsers = async (q) => {
  // console.log(search);
  const regex = new RegExp(q, "i");
  try {
    dbConnect();
    const users = await User.find({
      username: { $regex: regex },
      title: { $regex: regex },
    });
    return users;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
};
