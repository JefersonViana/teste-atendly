import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

class ValidateLogin {
  static validateFields(req: Request, res: Response, next: NextFunction): Response | void {
    const fields = req.body;
    const requiredKeys = ['email', 'password'];
    for (let index = 0; index < requiredKeys.length; index += 1) {
      const notFoundKey = requiredKeys[index];
      if (!(notFoundKey in fields)) {
        return res.status(mapStatusHTTP('INVALID_DATA'))
          .json({ message: 'All fields must be filled' });
      }
    }
    if (!fields.email || !fields.password) {
      return res.status(mapStatusHTTP('INVALID_DATA'))
        .json({ message: 'All fields must be filled' });
    }
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(fields.email) || fields.password.length < 6) {
      return res.status(401).json({ message: 'Email ou senha incorretos' });
    }
    return next();
  }
}

export default ValidateLogin;