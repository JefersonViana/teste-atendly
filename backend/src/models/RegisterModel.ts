import SequelizeRegister from "../database/models/SequelizeRegister";
import { IRegister } from "../interfaces/IRegister";

export default class RegisterModel {
  private model = SequelizeRegister;

  public async createRegister(register: IRegister) {
    const dbData = await this.model.create(register);
    return dbData;
  }
}