import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  // strictQuery means to prevent unknown field
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) return console.log('Missing MongoDB URL');
  if (isConnected) return console.log('MongoDB connection already established');

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
