import SequelizeRegister from "../database/models/SequelizeRegister";

export default class RegisterModel {
  private model = SequelizeRegister;

  public async createRegister(register: any) {
    const dbData = await this.model.create(register);
    return dbData;
  }
}