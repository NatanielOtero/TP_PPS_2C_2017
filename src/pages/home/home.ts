import { ArchivosPage } from '../archivos/archivos';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { EncuestasPage } from '../encuestas/encuestas';
import { AsistenciaPage } from '../asistencia/asistencia';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {
   let user = this.navParams.get('user');
   console.log(user);
  }

    ruteo(pagina : string)
    {
        switch (pagina) {
          case "asist":
            this.navCtrl.push(AsistenciaPage);
            break;
          case "enc":
            this.navCtrl.push(EncuestasPage);
            break;
          case "est":
            this.navCtrl.push(EstadisticasPage);
            break;
          case "arch":
            this.navCtrl.push(ArchivosPage);
          default:
            break;
        }
    }

}
