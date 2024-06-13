"use server";
import { redirect } from "next/navigation.js";
import dbConnect from "./dbConnect.js";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache.js";

export const addUser = async (FormData) => {
  const { username, email, password, address, phone, isAdmin, isActive } =
    Object.fromEntries(FormData);

  try {
    dbConnect();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      address,
      phone,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    throw new Error("Failed to add user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const UpdateUser = async (FormData) => {
  const { id, username, email, password, address, phone, isAdmin, isActive } =
    Object.fromEntries(FormData);
  try {
    dbConnect();

    const upDateFields = {
      username,
      email,
      password,
      address,
      phone,
      isAdmin,
      isActive,
    };

    if (password) {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);
      upDateFields.password = hashedPassword;
    }

    Object.keys(upDateFields).forEach(
      (key) =>
        (upDateFields[key] === "" || undefined) && delete upDateFields[key]
    );

    await User.findByIdAndUpdate(id, upDateFields);
  } catch (error) {
    throw new Error("Failed to update user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteUser = async (FormData) => {
  const { id } = Object.fromEntries(FormData);

  try {
    dbConnect();
    await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Failed to delete User");
  }

  revalidatePath("/dashboard/users");
};
