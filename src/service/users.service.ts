import redis from '../lib/cache';
import User from '../models/User';

export async function getUsers(): Promise<any[]> {
  try {
    const cachedUsers = await redis.get('users:all');
    if (cachedUsers) {
      return JSON.parse(cachedUsers);
    }
    const users = await User.find({}, { password: 0, __v: 0 }).sort({
      name: 1
    });
    await redis.set('users:all', JSON.stringify(users));
    return users;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export async function getUserById(id: string): Promise<any> {
  try {
    const cachedUser = await redis.get(`user:${id}`);
    if (cachedUser) {
      return JSON.parse(cachedUser);
    }
    const user = await User.findOne({ _id: id }, { password: 0, __v: 0 });
    await redis.set(`user:${id}`, JSON.stringify(user));
    return user;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
