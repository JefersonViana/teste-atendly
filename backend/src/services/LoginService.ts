import { ILogin, IRegister } from '../interfaces/IRegister';
import RegisterModel from '../models/UserModel';
import { comparePassword, hashPassword } from './../utils/bcrypt';
import generateToken from './../utils/jwt';

export default class RegisterService {
  private registerModel: RegisterModel;

  constructor() {
    this.registerModel = new RegisterModel();
  }

  public async login({ email, password }: ILogin) {
    try {
      const user = await this.registerModel.findRegisterByEmail(email);

      if (!user) {
        return { status: 'ERROR', data: { message: 'Usuário não existe' } };
      }
      if (!await comparePassword(password, user.dataValues.password)) {
        return { status: 'ERROR', data: { message: 'Email ou senha incorretos' } };
      }
      console.log(user.dataValues);
      const token = generateToken(user.dataValues);

      return { status: 'SUCCESSFUL', data: { token } };
    } catch (error: any) {
      return { status: 'ERROR', data: { message: error.message } };
    }
  }
}