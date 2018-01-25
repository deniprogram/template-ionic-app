import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Constants } from '../constants';
import { ToastController } from 'ionic-angular';

@Injectable()
export class MessageService {

  public message: string;
  public position: string;

  constructor(public constants: Constants, public toastCtrl: ToastController) {}

  showMessage(dataMessage) {
    this.message = dataMessage.message;
    this.position = dataMessage.position;

    this.toastCtrl.create({
      message: this.message,
      duration: 2000,
      position: this.position,
    }).present();
  }

  success(message?: string, position?: string) {
    const data_message = {
      message: message || 'Operação realizada com sucesso',
      position: position || 'middle',
      type: 'SUCCESS'
    }

    this.showMessage(data_message);
  }

  error(message?: string, position?: string) {
    const data_message = {
      message: message || 'Não foi possivel realizar essa operação',
      position: position || 'middle',
      type: 'ERROR'
    }

    this.showMessage(data_message);
  }
}
