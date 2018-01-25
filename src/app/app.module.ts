import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Contacts } from '@ionic-native/contacts';
import { Sim } from '@ionic-native/sim';

// MODULES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { MenuPageModule } from '../pages/menu/menu.module';
import { TourIntroPageModule } from '../pages/tour-intro/tour-intro.module';


// SERVICES
import { UserProvider } from '../providers/user/user';
import { Constants } from '../constants';
import { RestProvider } from '../services/rest';
import { MessageService } from '../services/message';
import { AlertService } from '../services/alert';
import { PhoneService } from '../services/phone';
import { StorageService } from '../services/local_storage';
import { CardService } from '../services/card';
import { UtilsService } from '../services/utils';

// DIRECTIVES
import { Mask } from '../directive/mask';

@NgModule({
  declarations: [
    MyApp,
    Mask,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      monthNames: ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Septembro", "Outubro", "Novembro", "Dezembro"]
    }),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    MenuPageModule,
    TourIntroPageModule,
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    Constants,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    RestProvider,
    MessageService,
    AlertService,
    PhoneService,
    StorageService,
    CardService,
    UtilsService,
    SocialSharing,
    Contacts,
    Sim
  ]
})
export class AppModule {}
