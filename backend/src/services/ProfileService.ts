import { IRegister } from '../interfaces/IRegister';
import RegisterModel from '../models/UserModel';
// import generateToken from './../utils/jwt';

export default class RegisterService {
  private registerModel: RegisterModel;

  constructor() {
    this.registerModel = new RegisterModel();
  }

  public async getUser(payload: IRegister) {
    try {
      const user = await this.registerModel.findRegisterByEmail(payload.email);

      return { status: 'SUCCESSFUL', data: user?.dataValues };
    } catch (error: any) {
      return { status: 'ERROR', data: { message: error.message } };
    }
  }
}