import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourIntroPage } from './tour-intro';

@NgModule({
  declarations: [
    TourIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(TourIntroPage),
  ],
  exports: [
    TourIntroPage
  ]
})
export class TourIntroPageModule {}
