import { z } from 'zod';
import registerSchema from '../schemas/register.schema';

type RegisterUser = z.infer<typeof registerSchema>;

export default RegisterUser;
