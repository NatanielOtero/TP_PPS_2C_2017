<<<<<<< HEAD
import { EmpleadosPage } from '../empleados/empleados';
=======
import { ArchivosPage } from '../archivos/archivos';
>>>>>>> origin/master
import { EstadisticasPage } from '../estadisticas/estadisticas';
import { EncuestasPage } from '../encuestas/encuestas';
import { AsistenciaPage } from '../asistencia/asistencia';
import { PerfilPage } from '../perfil/perfil';
import { usuario } from "../../clases/usuario";
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
  adm: boolean = true;
  ad : boolean = true;
  alum : boolean = true;
  prof : boolean = true;
  tipo : string;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
   this.tipo = navParams.get('tipo');

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
=======
  user = {} as usuario;

  constructor(
    public navCtrl   : NavController,
    public navParams : NavParams
             )
  {
   
    this.user.mail = this.navParams.get('mail');
    this.user.password = this.navParams.get('pass');
    console.log(this.user.mail +"  -  "+ this.user.password);
>>>>>>> origin/master

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
<<<<<<< HEAD
          case "perfil":
          this.navCtrl.push(PerfilPage);
          break;
          case "alt":
          this.navCtrl.push(EmpleadosPage);
          break;
=======
          case "edit":
            this.navCtrl.push(PerfilPage, {
              mail: this.user.mail,
              pass: this.user.password
              
            });
            break;
          case "arch":
            this.navCtrl.push(ArchivosPage);
>>>>>>> origin/master
          default:
            break;
        }
    }

}
