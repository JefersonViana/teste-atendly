import { IRegister } from '../interfaces/IRegister';
import UserModel from '../models/UserModel';
import { hashPassword } from './../utils/bcrypt';
import generateToken from './../utils/jwt';

export default class RegisterService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  public async createRegister({ name, email, password }: IRegister) {
    try {
      const user = await this.userModel.findRegisterByEmail(email);
      if (user) {
        return { status: 'ERROR', data: { message: 'User already exists' } };
      }
      const hashedPassword = await hashPassword(password);
      const register = await this.userModel.createRegister({ name, email, password: hashedPassword });
      if (!register) {
        return { status: 'ERROR', data: { message: 'Error para criar usuário!' } };
      }
      return { status: 'SUCCESSFUL', data: { message: "Usuário cadastrado com sucesso!" } };
    } catch (error: any) {
      return { status: 'ERROR', data: { message: error.message } };
    }
  }
}