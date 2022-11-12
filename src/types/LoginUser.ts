import { z } from 'zod';
import loginSchema from '../schemas/login.schema';

type LoginUser = z.infer<typeof loginSchema>;

export default LoginUser;
