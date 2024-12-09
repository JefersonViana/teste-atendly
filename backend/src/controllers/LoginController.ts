import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  private loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const { status, data } = await this.loginService.login({email, password });
    if (status !== 'SUCCESSFUL') {
      return res.status(200).json(data);
    }
    return res.status(200).json(data);
  }
}