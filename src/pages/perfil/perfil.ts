import { Perfil } from '../../entidades/perfil';
import { HomePage } from '../home/home';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Alta } from '../../entidades/alta';
import { Datos } from "../../entidades/datos";
import { AngularFireDatabase, AngularFireList , AngularFireObject} from "angularfire2/database";
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

  alum ={} as Perfil ; 
  public cant: Array<any> = new Array<any>();  
  public Items: AngularFireList<any>;
  public items: Observable<any>; 
  modificar : boolean = true;


  constructor(
    public navCtrl   : NavController,
    public navParams : NavParams,
    public afDB: AngularFireDatabase,  
    public toastCtr     : ToastController
    

  ) {
    
    this.alum = this.navParams.get("usuario");
    this.alum.foto = "../assets/imgs/male.png";

    
   
  
 

    console.log(this.alum);

   
  }
 
  guardar()
  {
    const itemRef = this.afDB.object('/prueba/' + this.alum.id + "/");
    itemRef.set(this.alum).then(success =>{ let tost = this.toastCtr.create({
      message: 'Datos guardados',
      duration: 3000,
      position: 'middle'
    });
    tost.present();}).catch(er => console.error(er));
    this.modificar = true;

  }
  mod()
  {
    this.modificar = false;
  }
  


  ionViewDidLoad() {

  }

}
