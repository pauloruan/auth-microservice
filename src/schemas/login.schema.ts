import { z } from 'zod';
import regex from '../helpers/regex.helper';
import messages from '../helpers/messages.helper';

const loginSchema = z.object({
  email: z.string().email(messages.LOGIN_FAILED),
  password: z
    .string()
    .min(8, messages.PASSWORD_LENGTH)
    .regex(regex.password, messages.LOGIN_FAILED)
});

export default loginSchema;
