import { HomePage } from '../home/home';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usuario } from "../../clases/usuario";
import { perfil } from "../../clases/perfil";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { storage, initializeApp } from "firebase";




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

  user = {} as usuario;
  perfil = {} as perfil;
  foto = {} as any;
  perfilData: AngularFireObject<perfil>



  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private miFbase: AngularFireDatabase,
    private afAuth: AngularFireAuth

  ) {
    this.user.mail = this.navParams.get('mail');
    this.user.password = this.navParams.get('pass');
    this.perfil.mail = this.user.mail;
    this.perfil.password = this.user.password;
    


    console.log(this.user.mail + "  -  " + this.user.password);
  }




obtenerFoto(e)
{
  this.foto = e.target.files[0];
}

  editar() {

    var storageRef = storage().ref(); 

    storageRef.child('/fotos/' + this.perfil.mail + '/' + this.foto.name)
    .put(this.foto)
    .then((snapshot) =>{
      console.log("FILE: " + this.foto.name);
    });

    this.afAuth.authState.subscribe(auth => {
      this.miFbase.object(`usuarios/${auth.uid}`).set(this.perfil)
        .then(() => this.navCtrl.setRoot(HomePage,{
          mail: this.user.mail,
          pass: this.user.password}));
  });
}

  ionViewDidLoad() {

  }

}
