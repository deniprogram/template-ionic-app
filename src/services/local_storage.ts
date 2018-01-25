import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageService {

  constructor(private storage: Storage) {}

  getUser() {
    return this.storage.get('user');
  }

  setUser(data) {
    this.storage.set('user', data);
  }

  getToken() {
    return this.storage.get('token');
  }

  setToken(data) {
    this.storage.set('token', data);
  }

  setUudiPro(data) {
   this.storage.set('uudi_pro', data);
  }

  getUudiPro() {
    return this.storage.get('uudi_pro');
  }

  clearAll() {
    return this.storage.clear();
  }

  setFirstAccess() {
    return this.storage.set('access', true);
  }

  getFirstAccess() {
    return this.storage.get('access');
  }
}
