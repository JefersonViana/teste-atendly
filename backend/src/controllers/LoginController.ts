import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const { status, data } = await this.loginService.login({email, password });
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(mapStatusHTTP(status)).json(data);
  }
}