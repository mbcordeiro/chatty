import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsServices {
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepositoy = getCustomRepository(SettingsRepository);
    const settings = settingsRepositoy.create({
      chat,
      username,
    });

    await settingsRepositoy.save(settings);

    return settings;
  }
}

export { SettingsServices };
