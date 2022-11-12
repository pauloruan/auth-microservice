import { hashPassword } from '../../helpers/hash.helper';
import { generateToken } from '../../helpers/jwt.helper';
import User from '../../models/User';
import RegisterUser from '../../types/RegisterUser';

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
    await user.save();
    const token = generateToken(user.email, user._id);
    return { token };
  } catch (error) {
    throw new Error((error as Error).message);
  }
}