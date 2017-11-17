

import { AlumnosPage } from '../alumnos/alumnos';
import { ArchivosPage } from '../archivos/archivos';
import { EmpleadosPage } from '../empleados/empleados';
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { EncuestasPage } from '../encuestas/encuestas';
import { AsistenciaPage } from '../asistencia/asistencia';
import { PerfilPage } from '../perfil/perfil';
import { Alta } from "../../entidades/alta";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController,public navParams: NavParams) {
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
            this.navCtrl.push(EncuestasPage);
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
          default:
            break;
        }
    }

}

