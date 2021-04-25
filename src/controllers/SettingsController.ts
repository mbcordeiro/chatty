import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;
    const settingsRepositoy = getCustomRepository(SettingsRepository);
    const settings = settingsRepositoy.create({
      chat,
      username,
    });

    await settingsRepositoy.save(settings);

    return response.json(settings);
  }
}

export { SettingsController };
