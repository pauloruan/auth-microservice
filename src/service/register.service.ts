import RegisterUser from '../@types/RegisterUser';
import { hashPassword } from '../helpers/hash.helper';
import { generateToken } from '../helpers/jwt.helper';
import redis from '../lib/cache';
import User from '../models/User';

export default async function registerService({
  name,
  email,
  password
}: RegisterUser): Promise<any> {
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error('User already exists');
    }
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });
    await redis.del('users:all');
    await user.save();
    const token = generateToken(user.email, user._id);
    return { token };
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
