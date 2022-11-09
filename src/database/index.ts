import 'dotenv/config';
import mongoose from 'mongoose';

const URI = process.env.MONGO_URI ?? '';

export default function databaseConfig(): void {
  mongoose
    .connect(URI)
    .then(() => console.log('Database connected'))
    .catch((error) => console.log('Database connection failed', error.message));
}
