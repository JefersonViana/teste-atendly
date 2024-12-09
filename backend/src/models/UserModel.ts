import SequelizeRegister from "../database/models/SequelizeRegister";
import { IRegister } from "../interfaces/IRegister";

export default class UserModel {
  private model = SequelizeRegister;

  public async findRegisterByEmail(email: string) {
    const dbData = await this.model.findOne({ where: { email } });
    return dbData;
  }

  public async createRegister(register: IRegister) {
    const dbData = await this.model.create(register);
    return dbData;
  }
}