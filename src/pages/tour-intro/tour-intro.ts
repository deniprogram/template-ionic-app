import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tour-intro',
  templateUrl: 'tour-intro.html'
})
export class TourIntroPage {

  homePage = HomePage;
  dataParams: any = this.navParams.get('data');
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLeave() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.popToRoot()
    }
  }

  isReview() {
    return this.dataParams && this.dataParams.review ? true : false;
  }

  closeTour() {
     this.navCtrl.pop();
  }

}
