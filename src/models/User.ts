import { Schema, model } from 'mongoose';
import RegisterUser from '../types/RegisterUser';

const UserSchema = new Schema<RegisterUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = model<RegisterUser>('User', UserSchema);

export default User;