import RegisterModel from '../models/RegisterModel';

export default class RegisterService {
  private registerModel: RegisterModel;

  constructor() {
    this.registerModel = new RegisterModel();
  }

  public async createRegister({ name, email, password }: any) {
    try {
      const register = await this.registerModel.createRegister({ name, email, password });
      return { status: 'SUCCESSFUL', data: register };
    } catch (error: any) {
      return { status: 'ERROR', data: { message: error.message } };
    }
  }
}