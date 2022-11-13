import LoginUser from '../@types/LoginUser';
import { comparePassword } from '../helpers/hash.helper';
import { generateToken } from '../helpers/jwt.helper';
import User from '../models/User';

export default async function loginService({
  email,
  password
}: LoginUser): Promise<any> {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User does not exist');
    }
    const isPasswordValid = comparePassword(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    const accessToken = generateToken(user.email, user._id);
    return { accessToken };
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
