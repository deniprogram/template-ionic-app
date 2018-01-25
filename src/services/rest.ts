import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Constants } from '../constants';
import { LoadingController } from 'ionic-angular';
import { StorageService } from './local_storage';

@Injectable()
export class RestProvider {

  constructor(public http: Http, public constants: Constants, public loadingCtrl: LoadingController, public storageService: StorageService) {}

  loading() {
    return this.loadingCtrl.create({
      content: "Carregando"
    });
  }

  get(url_request, show_load:boolean = true) {
    const contentLoad = this.loading();

    if (show_load) {
      contentLoad.present();
    }

    return new Promise((resolve, reject) => {
        this.storageService.getToken().then((token) => {
          const headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('token', token);
          this.http.get(this.constants.getConstants().URL_API + url_request,{
                headers:headers,
                method:'GET'
          }).map(res => res.json())
            .subscribe(
              data => {
                resolve(data);
                contentLoad.dismiss();
              },
              error => {
                reject(error);
                contentLoad.dismiss();
              }
            );
        });
    });
  }

  delete(url_request) {
    const contentLoad = this.loading();
    contentLoad.present();

    return new Promise((resolve, reject) => {
        this.storageService.getToken().then((token) => {
          const headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('token', token);
          this.http.delete(this.constants.getConstants().URL_API + url_request,{
                headers:headers,
                method:'DELETE'
          }).map(res => res.json())
            .subscribe(
              data => {
                resolve(data);
                contentLoad.dismiss();
              },
              error => {
                reject(error);
                contentLoad.dismiss();
              }
            );
        });
    });
  }

  post(url_request, data) {
    const contentLoad = this.loading();
    contentLoad.present();

    return new Promise((resolve, reject) => {
      this.storageService.getUser().then((user) => {
        if (user) {
          data.current_user = user;
        }
        this.storageService.getToken().then((token) => {
          const headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('token', token);

          this.http.post(this.constants.getConstants().URL_API + url_request, data, {
            headers:headers,
            method:'POST'
          }).map(
            (res:Response) => {return res.json();}
          ).subscribe(
            data => {
              contentLoad.dismiss();
              resolve(data);
            },
            error => {
              contentLoad.dismiss();
              reject(error.json());
            }
          );
        });
      });
    });
  }

  put(url_request, data) {
    const contentLoad = this.loading();
    contentLoad.present();

    return new Promise((resolve, reject) => {
      this.storageService.getUser().then((user) => {
        data.current_user = user;
        this.storageService.getToken().then((token) => {
          const headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('token', token);

          this.http.put(this.constants.getConstants().URL_API + url_request, data, {
            headers:headers
          }).map(
            (res:Response) => {return res.json();}
          ).subscribe(
            data => {
              resolve(data);
              contentLoad.dismiss();
            },
            error => {
              contentLoad.dismiss();
              reject(error.json());
            }
          );
        });
      });
    });
  }

}
