import { HttpModule } from '@angular/http';
import { InicioPage } from '../pages/inicio/inicio';
import { RegistroPage } from '../pages/registro/registro';
import { EmpleadosPage } from '../pages/empleados/empleados';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { EncuestasPage } from '../pages/encuestas/encuestas';
import { AsistenciaPage } from '../pages/asistencia/asistencia';
import { LoginPage } from '../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { NativeAudio } from '@ionic-native/native-audio';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AsistenciaPage,
    EncuestasPage,
    EstadisticasPage,
    PerfilPage,
    EmpleadosPage,
    RegistroPage,
    InicioPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
     HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PerfilPage,
    AsistenciaPage,
    EncuestasPage,
    EstadisticasPage,
    PerfilPage,
    EmpleadosPage,
    RegistroPage,
    InicioPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    GooglePlus,
    Facebook,
    
    
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
