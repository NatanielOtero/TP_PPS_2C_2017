import { ArchivosPage } from '../archivos/archivos';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { EncuestasPage } from '../encuestas/encuestas';
import { AsistenciaPage } from '../asistencia/asistencia';
import { PerfilPage } from '../perfil/perfil';
import { usuario } from "../../clases/usuario";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {} as usuario;

  constructor(
    public navCtrl   : NavController,
    public navParams : NavParams
             )
  {
   
    this.user.mail = this.navParams.get('mail');
    this.user.password = this.navParams.get('pass');
    console.log(this.user.mail +"  -  "+ this.user.password);

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
          case "edit":
            this.navCtrl.push(PerfilPage, {
              mail: this.user.mail,
              pass: this.user.password
              
            });
            break;
          case "arch":
            this.navCtrl.push(ArchivosPage);
          default:
            break;
        }
    }

}
