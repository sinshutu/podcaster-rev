import { app, protocol, BrowserWindow, ipcMain, dialog } from 'electron'
import PodcastStation from '../models/podcast_station'

ipcMain.handle('testDialog', async (event, data) => {
  let podcast_station: PodcastStation = new PodcastStation()
dialog.showMessageBox({title: podcast_station.name, message: podcast_station.name})
})