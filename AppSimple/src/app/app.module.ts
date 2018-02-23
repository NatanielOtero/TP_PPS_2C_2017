import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { VideoPlayer } from '@ionic-native/video-player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    TutorialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    TutorialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
