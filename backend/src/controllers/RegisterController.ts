import { Request, Response } from 'express';
import RegisterService from '../services/RegisterService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class RegisterController {
  private registerService: RegisterService;

  constructor() {
    this.registerService = new RegisterService();
  }

  public async createRegister(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const { status, data } = await this.registerService.createRegister({name, email, password });
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(mapStatusHTTP(status)).json(data);
  }
}