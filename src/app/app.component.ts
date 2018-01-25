import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { TourIntroPage } from '../pages/tour-intro/tour-intro';
import { StorageService } from '../services/local_storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storageService: StorageService) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.loadPageInit();
    });
  }

  loadPageInit() {
    let self = this;
    this.storageService.getFirstAccess()
    .then((hasFirstAccess) => {
      if (hasFirstAccess) {
        this.storageService.getUser().then((val) => {
          if (val) {
            self.rootPage = MenuPage;
          } else {
            self.rootPage = HomePage;
          }
        });
      } else {
        this.storageService.setFirstAccess();
        self.rootPage = TourIntroPage;
      }
    });
  }
}
