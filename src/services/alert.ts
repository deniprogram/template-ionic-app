import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Constants } from '../constants';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {

  public message: string;
  public title: string;

  constructor(public constants: Constants, public alert: AlertController) {}

  confirm(title?: string, message?: string, cb?) {
    this.title = title;
    this.message = message || 'Tem certeza que deseja realizar essa operação ?';

    this.alert.create({
      title: this.title,
      message: this.message,
      buttons: [
        {
          text: 'NÃO',
          handler: () => {
            cb(false);
          }
        },
        {
          text: 'SIM',
          handler: () => {
            cb(true);
          }
        }
      ]
    }).present();
  }

  prompt(title?: string, message?: string, input?: string, cb?) {
    this.title = title;
    this.message = message || 'Tem certeza que deseja realizar essa operação ?';

    this.alert.create({
      title: this.title,
      message: this.message,
      inputs: [
        {
          name: input,
          placeholder: input
        },
      ],
      buttons: [
        {
          text: 'NÃO',
          handler: data => {
            cb(false);
          }
        },
        {
          text: 'Confirmar',
          handler: data => {
            cb(data);
          }
        }
      ]
    }).present();
  }
}
