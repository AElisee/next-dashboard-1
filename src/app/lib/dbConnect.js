import mongoose from "mongoose";
const dbConnect = async () => {
  const connection = {};

  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("Connecting on mongoDb");
  } catch (error) {
    throw new Error(error);
  }
};

export default dbConnect;
