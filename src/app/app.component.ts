import { EncuestasPage } from '../pages/encuestas/encuestas';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { AdministracionPage } from '../pages/administracion/administracion';
import { ArchivosPage } from '../pages/archivos/archivos';
import { InicioPage } from '../pages/inicio/inicio';

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InicioPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => 
    {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      console.log(splashScreen);
      if (splashScreen) 
      {
        setTimeout(() => {
          splashScreen.hide();
        }, 100);
      }
    });
  }
}

