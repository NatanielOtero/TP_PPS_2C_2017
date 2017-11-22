import { EncuestaEstadisticaPage } from '../encuesta-estadistica/encuesta-estadistica';
import { AdministracionPage } from '../administracion/administracion';
import { AlumnosPage } from '../alumnos/alumnos';
import { ArchivosPage } from '../archivos/archivos';
import { EmpleadosPage } from '../empleados/empleados';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { EncuestasPage } from '../encuestas/encuestas';
import { AsistenciaPage } from '../asistencia/asistencia';
import { PerfilPage } from '../perfil/perfil';
import { Alta } from "../../entidades/alta";
import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  adm: boolean = true;
  ad : boolean = true;
  alum : boolean = true;
  prof : boolean = true;
  tipo : string;
  user:Alta;
  scannedCode = null;
  constructor(public alertCtrl: AlertController, public toastCtr : ToastController ,public navCtrl: NavController,public navParams: NavParams,private qrScanner: QRScanner) {
   this.tipo = navParams.get('tipo');
   this.user = navParams.get('usuario');

   switch (this.tipo) {
     case "alumno":
       this.alum = false;
       break;
       case "profesor":
       this.prof = false;
       break;
       case "administrativo":
       this.ad = false;
       break;
       case "administrador":
       this.adm = false;
       break;   
     default:
       break;
   }
      
   
  }
  verificarPrivilegios()
  {

  }

    ruteo(pagina : string)
    {
        switch (pagina) {
          case "asist":
            this.navCtrl.push(AsistenciaPage);
            break;
          case "enc":
            this.navCtrl.push(EncuestasPage, {usuario: this.user});
            break;
            case "encEst":
            this.navCtrl.push(EncuestaEstadisticaPage, {usuario: this.user});
            break;
          case "est":
            this.navCtrl.push(EstadisticasPage);
            break;
          case "perfil":
          this.navCtrl.push(PerfilPage, {usuario: this.user});
          break;
          case "alt":
          this.navCtrl.push(EmpleadosPage);
          break;
          case "arch":
          this.navCtrl.push(ArchivosPage);
          break;
          case "al":
          this.navCtrl.push(AlumnosPage);
          break;
          case "adm":
          this.navCtrl.push(AdministracionPage);
          break;
          default:
            break;
        }
    }
    codigoQR()
    {
      this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
         if (status.authorized) {
           // camera permission was granted
    
    
           // start scanning
           let scanSub = this.qrScanner.scan().subscribe((text: string) => {
             console.log('Scanned something', text);
    
             this.qrScanner.hide(); // hide camera preview
             scanSub.unsubscribe(); // stop scanning
           });
    
           // show camera preview
           this.qrScanner.show();
    
           // wait for user to scan something, then the observable callback will be called
    
         } else if (status.denied) {
           // camera permission was permanently denied
           // you must use QRScanner.openSettings() method to guide the user to the settings page
           // then they can grant the permission from there
         } else {
           // permission was denied, but not permanently. You can ask for permission again at a later time.
         }
      })
      .catch((e: any) =>{  let tost = this.toastCtr.create({
        message: 'Error: ' + e,
        duration: 3000,
        position: 'middle'
      });
      tost.present();
    });
    }

}

