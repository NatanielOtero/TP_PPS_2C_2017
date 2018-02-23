import { NativeAudio } from '@ionic-native/native-audio';
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
import { Component, PACKAGE_ROOT_URL } from '@angular/core';
import { NavController, NavParams,PopoverController,ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FaltasPage } from '../faltas/faltas';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  adm: boolean = true;
  ad: boolean = true;
  alum: boolean = true;
  prof: boolean = true;
  tipo: string;
  user: Alta;
  imgs :any[];
  scannedCode = null;
  constructor(public popoverCtrl: PopoverController,public viewCtrl: ViewController,public alertCtrl: AlertController,private audio : NativeAudio ,public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = navParams.get('tipo');
    this.user = navParams.get('usuario');
    this.audio.preloadSimple('btn', 'assets/sounds/btn.mp3')
    this.audio.preloadSimple('help', 'assets/sounds/idea.mp3');
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
  
  verificarPrivilegios() {

  }
  tuto : boolean = true;
  tutorial(myEvent)
  {
    this.audio.play('help');

    switch (this.tipo) {
      case "alumno":
      this.imgs = ["../../assets/imgs/menuAl.png"];
        break;
      case "profesor":
      this.imgs = ["../../assets/imgs/menuProfe.png"];
        break;
      case "administrativo":
      this.imgs = ["../../assets/imgs/menuAd.png"];
        break;
      case "administrador":
      this.imgs = ["../../assets/imgs/menu.png"];
        break;
      default:
        this.imgs = ["../../assets/imgs/menu.png"];
        break;
    }
    let popover = this.popoverCtrl.create(TutorialPage,{"imagenes": this.imgs},{cssClass: 'contact-popover-Menu'});
    popover.present({
      ev: myEvent
    });
  } 
  ruteo(pagina: string) {
    this.audio.play('btn');
    switch (pagina) {
      case "asist":
        this.navCtrl.push(AsistenciaPage);
        break;
      case "enc":
        this.navCtrl.push(EncuestasPage, { usuario: this.user });
        break;
      case "encEst":
        this.navCtrl.push(EncuestaEstadisticaPage, { usuario: this.user });
        break;
      case "est":
        this.navCtrl.push(EstadisticasPage, { usuario: this.user });
        break;
      case "perfil":
        this.navCtrl.push(PerfilPage, { usuario: this.user });
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
      case "fal":
        this.navCtrl.push(FaltasPage, { usuario: this.user });
        break;
      default:
        break;
    }
  }
}

