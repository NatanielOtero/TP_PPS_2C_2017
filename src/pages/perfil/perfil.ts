import { HomePage } from '../home/home';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Alta } from '../../entidades/alta';
import { Datos } from "../../entidades/datos";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { storage, initializeApp } from "firebase";
import { Observable } from 'rxjs/Observable';





/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})


export class PerfilPage {

  user = {} as Alta;
  perfil = {} as Datos;
  foto = {} as any;
  fotos = {} as any;
  perfilList = {} as AngularFireList<any>;
  perfilObs = {} as Observable<any>;  
  hide = false;
  hide1 = false;
  hide2 = false;
  



  constructor(
    public navCtrl   : NavController,
    public navParams : NavParams,
    private miFbase  : AngularFireDatabase,
    private afAuth   : AngularFireAuth,
    public toast     : ToastController
    

  ) {
    this.user.email = this.navParams.get('mail');
    this.user.pass = this.navParams.get('pass');
    this.perfil.mail = this.user.email;
    this.perfil.pw = this.user.pass;
    


    console.log(this.user.email + "  -  " + this.user.pass);
  }


  mostrar(op : string)
  {    

      switch (op) {
        case "usuario":
          this.hide = true;
          break;

        case "edad":
          this.hide1 = true;        
          break;

        case "sexo":
          this.hide2 = true;
          break;
      
        default:
          break;
      }

  }


  ionViewDidLoad() {

  }

}
