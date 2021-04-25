import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from './repositories/SettingsRepository';

const routes = Router();

routes.post('/settings', async (request, response) => {
  const { chat, username } = request.body;
  const settingsRepositoy = getCustomRepository(SettingsRepository);
  const settings = settingsRepositoy.create({
    chat,
    username,
  });

  await settingsRepositoy.save(settings);

  return response.json(settings);
});

export { routes };
