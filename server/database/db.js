import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.qtukqol.mongodb.net/`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error while connecting with the database", error);
  }
};
export default Connection;
