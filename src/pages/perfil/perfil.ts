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

  user = {} as Alta;
  perfil = {} as Datos;
  usuarios = [];
  perfilDaa = {} as AngularFireObject<any>;
  perfilData = {} as Observable<any>;  
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
    this.user = this.navParams.get('usuario');
    this.perfil.mail = this.user.email;
    this.perfil.pw = this.user.pass;
    this.perfil.usuario = this.user.usuario; 
    this.perfil.edad = this.user.edad;
    this.perfil.sexo = this.user.sexo;
    
    


    console.log(this.user.email + "  -  " + this.user.pass);

    this.perfilData = miFbase.object('usuarios/'+ this.user.legajo).valueChanges();
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

  editar(op : string)
  {
    switch (op) {
      case "usuario":
         this.editarPerfil("usuario", this.perfil.usuario);
        break;
  
      case "edad":
         this.editarPerfil("edad", this.perfil.edad);       
        break;
  
      case "sexo":
      this.editarPerfil("sexo", this.perfil.sexo);    
        break;
    
      default:
        break;
    }
  }

  editarPerfil(path : string, dato : any)
  {
    if(dato != null && dato != "")
    {
      this.miFbase.object('usuarios/' + this.user.legajo + "/" + path).set(dato)
            .then(() => { 
              this.hide = false;
              this.hide1 = false;
              this.hide2 = false;        
              
            });
    }
    else
    {
      let tost = this.toast.create({
        message: 'No ingresaste nada.',
        duration: 2000,
        position: 'bottom'
      });
      tost.present();
  
      this.hide = false;
      this.hide1 = false;
      this.hide2 = false;    
    }
  }

  ionViewDidLoad() {

  }

}
