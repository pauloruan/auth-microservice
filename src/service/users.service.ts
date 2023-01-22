import User from '../models/User';

export async function getUsers(): Promise<any[]> {
  try {
    const users = await User.find({}, { password: 0, __v: 0 }).sort({
      name: 1
    });
    return users;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getUserById(id: string): Promise<any> {
  try {
    const user = await User.findOne({ _id: id }, { password: 0, __v: 0 });
    return user;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
