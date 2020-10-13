import ElectronStore from "electron-store"

export default class BaseModel {
  store: ElectronStore

  constructor() {
    this.store = new ElectronStore()
  }
}
