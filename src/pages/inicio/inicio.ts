import { RegistroPage } from '../registro/registro';
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
} from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { MapsProvider } from '../../provider/maps-provider';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  idioma = localStorage.getItem("idioma");
  //map : GoogleMap;
  mapaGeo : boolean = true;
  menuCosas : boolean = false;

  constructor(private MP : MapsProvider,public LoadingCtrl : LoadingController, public navCtrl: NavController, public navParams: NavParams,public geolocation : Geolocation) {
    if (this.idioma == null) 
    {
      localStorage.setItem("idioma","espanol");
      this.idioma = localStorage.getItem("idioma");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  login()
  {
    this.navCtrl.push(LoginPage);
  }
  regis()
  {
    this.navCtrl.push(RegistroPage);
  }

  cambiarIdiomaGeo()
  {
    this.mapaGeo = false;
    this.menuCosas = true;
    this.geolocation.getCurrentPosition().then((geoposition : Geoposition) => {
      this.getPosition(geoposition);
    })
  }

  getPosition(position): void
  { 
    let paisDondeEstoy = "";
    //position.coords.latitude,position.coords.longitude
    this.MP.getDireccion(position.coords.latitude,position.coords.longitude).then(data => {
      paisDondeEstoy = data.results[data.results.length-1].address_components[0].long_name;
      console.log(data.results);
      console.log(data.results.length-1);

      switch(paisDondeEstoy)
      {
        case "Argentina":
        case "Uruguay":
        case "Chile":
        case "Paraguay":
        case "Bolivia":
        case "Colombia":
        case "España":
          this.cambiarIdioma('espanol');
          break;
        case "Brasil":
        case "Portugal":
          this.cambiarIdioma('portugues');
          break;
        case "Alemania":
          this.cambiarIdioma('aleman');
          break;
        case "Rusia":
          this.cambiarIdioma('ruso');
          break;
        case "Francia":
          this.cambiarIdioma('frances');
          break;
        case "Estados Unidos":
        case "Reino Unido":
          this.cambiarIdioma('ingles');
          break;
      }
    });

    
  }

  cambiarIdioma(idioma)
  {
    switch (idioma) 
    {
      case "ingles":
        localStorage.setItem("idioma",idioma);
        let loaderIng = this.LoadingCtrl.create({
          content: "Wait a moment...",
          duration: 3000
        });
        loaderIng.present().then(()=>{
          window.location.reload()
        });
        break;
      case "espanol":
        localStorage.setItem("idioma",idioma);
        
        let loaderEsp = this.LoadingCtrl.create({
          content: "Espere un momento...",
          duration: 3000
        });
        loaderEsp.present().then(()=>{
          window.location.reload();
        });

        break;
      case "frances":
        localStorage.setItem("idioma",idioma);
        
        let loaderFranc = this.LoadingCtrl.create({
          content: "Attendez un moment...",
          duration: 3000
        });
        loaderFranc.present().then(()=>{
          window.location.reload();
        });
        break;
      case "portugues":
        localStorage.setItem("idioma",idioma);
        let loaderPort = this.LoadingCtrl.create({
          content: "Espere um momento...",
          duration: 3000
        });
        loaderPort.present().then(()=>{
        window.location.reload();
        });
        break;
      case "aleman":
        localStorage.setItem("idioma",idioma);
        let loaderAlem = this.LoadingCtrl.create({
          content: "Warte einen moment...",
          duration: 3000
        });
        loaderAlem.present().then(()=>{
          window.location.reload();
        });
        break;
      case "ruso":
        localStorage.setItem("idioma",idioma);
        let loaderRuso = this.LoadingCtrl.create({
          content: "Подождите минуту...",
          duration: 3000
        });
        loaderRuso.present().then(()=>{
          window.location.reload()
        });        
        break;
      default:
        break;
    }
  }
}
