import * as _ from 'lodash';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { UserProvider } from '../../providers/user/user';
import { MessageService } from '../../services/message';
import { Validators, FormBuilder } from '@angular/forms';
import { StorageService } from '../../services/local_storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  menuPage = MenuPage;
  data_user: any = {};
  result_login: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public formBuilder: FormBuilder, public message: MessageService, private storageService: StorageService, public modalCtrl: ModalController) {
    this.data_user = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const data = this.data_user.value;
    this.userProvider.login(data)
    .then((result) => {
      this.result_login = result;
      this.storageService.setToken(this.result_login.data.token);
      this.storageService.setUser(this.result_login.data.user);

      this.navCtrl.setRoot(MenuPage)
    }).catch((error) => {
      this.message.error(_.get(error, 'data.message'));
    });
  }

}
