import { model, Schema } from 'mongoose';
import RegisterUser from '../@types/RegisterUser';

const UserSchema = new Schema<RegisterUser>({
  id: { type: String, required: false, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = model<RegisterUser>('User', UserSchema);

export default User;
