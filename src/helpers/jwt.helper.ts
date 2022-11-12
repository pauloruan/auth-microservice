import 'dotenv/config';
import { sign, verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET ?? 'secret';

export function generateToken(email: string, _id: any): string {
  const token = sign({ email }, secret, {
    subject: _id.toString(),
    expiresIn: '7d'
  });
  return token;
}

export function verifyToken(token: string): any {
  const decoded = verify(token, secret);
  return decoded;
}
