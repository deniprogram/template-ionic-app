import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Nav, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertService } from '../../services/alert';
import { StorageService } from '../../services/local_storage';
import { TourIntroPage } from '../tour-intro/tour-intro';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any, icon: string}>;
  currentUser = {};
  is_pro:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, private storageService: StorageService, public alertService: AlertService, public modalCtrl: ModalController) {
    this.pages = [
    ];
  }

  ionViewDidLoad() {
    this.storageService.getUser().then((user) => {
      this.currentUser = user;
    });
  }

  exitAplication() {
    this.alertService.confirm('Sair','Deseja realmente sair ?', (result) => {
      if (result) {
          this.clearStorage();
      }
    });
  }

  clearStorage() {
    this.storageService.clearAll().then((result) => {
      this.storageService.setFirstAccess();
      this.navCtrl.setRoot(HomePage);
    });
  }

  openTour() {
    this.navCtrl.push(TourIntroPage, { data: { review: true } });
  }


  openPage(page) {
    this.nav.setRoot(page.component);
  }

  menuOpened() {
    this.storageService.getUudiPro().then((plan) => {
      this.is_pro = plan;
    });
  }

  closeMenu() {
   this.menuCtrl.close();
  }

  toggleMenu() {
   this.menuCtrl.toggle();
  }

}
