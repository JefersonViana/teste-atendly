import { IRegister } from '../interfaces/IRegister';
import RegisterModel from '../models/RegisterModel';
import { hashPassword } from './../utils/bcrypt';
import generateToken from './../utils/jwt';

export default class RegisterService {
  private registerModel: RegisterModel;

  constructor() {
    this.registerModel = new RegisterModel();
  }

  public async createRegister({ name, email, password }: IRegister) {
    try {
      const hashedPassword = await hashPassword(password);
      const register = await this.registerModel.createRegister({ name, email, password: hashedPassword });
      const newToken = generateToken(register.dataValues);

      return { status: 'SUCCESSFUL', data: { token: newToken } };
    } catch (error: any) {
      return { status: 'ERROR', data: { message: error.message } };
    }
  }
}