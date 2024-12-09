import { SignOptions, sign } from 'jsonwebtoken';
import { IRegister } from '../interfaces/IRegister';

const config: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const secret = process.env.SECRET_KEY as string;

export default function generateToken(register: IRegister): string {
  const token = sign(register, secret, config);
  return token;
}