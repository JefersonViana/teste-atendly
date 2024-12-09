import { Request, Response } from 'express';
import ProfileService from '../services/ProfileService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class ProfileController {
  private profileService: ProfileService;

  constructor() {
    this.profileService = new ProfileService();
  }

  public async getUser(req: Request, res: Response): Promise<Response> {
    const { payload } = req.body;
    // console.log('PAYLOAD 50', payload);
    const { status, data } = await this.profileService.getUser(payload);
    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data);
    }
    return res.status(mapStatusHTTP(status)).json(data);
  }
}