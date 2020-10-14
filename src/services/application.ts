import { dialog, ipcMain } from 'electron';
import PodcastStation from '../models/podcast_station';

ipcMain.handle('testDialog', async (event, data) => {
  const podcastStation: PodcastStation = new PodcastStation();
  console.log(data);
  dialog.showMessageBox({
    title: podcastStation.name,
    message: data
  });
});
