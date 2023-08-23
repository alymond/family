import mongoose from "mongoose";
import 'dotenv/config'


export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL);

    mongoose.connection.on('error', (error) => {
      throw error;
  });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}



