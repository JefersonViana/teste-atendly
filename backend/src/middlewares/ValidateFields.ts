import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';

class ValidateFields {
  static validateFields(req: Request, res: Response, next: NextFunction): Response | void {
    const fields = req.body;
    const requiredKeys = ['name', 'email', 'password'];
    for (let index = 0; index < requiredKeys.length; index += 1) {
      const notFoundKey = requiredKeys[index];
      if (!(notFoundKey in fields)) {
        return res.status(mapStatusHTTP('INVALID_DATA'))
          .json({ message: 'All fields must be filled' });
      }
    }
    if (!fields.name || !fields.email || !fields.password) {
      return res.status(mapStatusHTTP('INVALID_DATA'))
        .json({ message: 'All fields must be filled' });
    }
    const regex = /\S+@\S+\.\S+/;
    if (fields.name.length < 3 || !regex.test(fields.email) || fields.password.length < 6) {
      return res.status(401).json({ message: 'The fields must respect the following rules: "name" must be longer than 2 characters, "password" must be longer than 5 characters and "email" must be a valid email' });
    }
    return next();
  }
}

export default ValidateFields;