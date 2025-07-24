import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const uri = process.env.MONGO_DB_URI; // Read Mongo URI from environment
    if (!uri) {
      throw new Error("MongoDB URI is not defined!");
    }

    const DB_OPTIONS = {
      dbName: "chatApp", // Your database name
    };

    await mongoose.connect(uri, DB_OPTIONS); // Connect to MongoDB
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error); // Log error if it fails
    process.exit(1); // Exit the application on failure to connect
  }
};

export default connectToMongoDB;
