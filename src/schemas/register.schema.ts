import { z } from 'zod';
import regex from '../helpers/regex.helper';
import messages from '../helpers/messages.helper';

const registerSchema = z.object({
  name: z
    .string()
    .min(3, messages.NAME_LENGTH)
    .regex(regex.name, messages.NAME_REGEX),
  email: z.string().email(messages.EMAIL_VALID),
  password: z
    .string()
    .min(8, messages.PASSWORD_LENGTH)
    .regex(regex.password, messages.PASSWORD_REGEX)
});

export default registerSchema;
