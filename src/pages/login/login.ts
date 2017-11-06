import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { ActionSheetController, AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import * as $ from 'jquery';
import { NativeAudio } from '@ionic-native/native-audio';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { usuario } from '../../clases/usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario = {} as usuario;  
  email: string;
  pw: string;
  userProfile: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtr: ToastController, public ActCtr: ActionSheetController,
    private aute: AngularFireAuth, private alert: AlertController, public audio: NativeAudio, private googlePlus: GooglePlus,
    private facebook : Facebook) {
    this.audio.preloadSimple('btn', 'assets/sounds/btn.mp3'); 
     
  }
  rapido()
  {
     this.usuario.mail = "admin@admin.com";
     this.usuario.password = "administrador";
  }

  async login() {

    this.audio.play('btn');
    if (this.usuario.mail == null || this.usuario.password == null) {
      let tost = this.toastCtr.create({
        message: 'Error, complete los campos',
        duration: 3000,
        position: 'middle'
      });
      tost.present();
    }
    else {
      try {
        var result = this.aute.auth.signInWithEmailAndPassword(this.usuario.mail, this.usuario.password).then(result => {

          this.navCtrl.setRoot(HomePage, {
            mail: this.usuario.mail,
            pass: this.usuario.password
            
          });

        }).catch(error => {
          console.error(error);
          let tost = this.toastCtr.create({
            message: 'Error mostro',
            duration: 3000,
            position: 'middle'
          });
          tost.present();
        });
        {

        }

        console.log(result);
      }
      catch (error) {
        console.error(error);
        let tost = this.toastCtr.create({
          message: error.message,
          duration: 3000,
          position: 'middle'
        });
        tost.present();
      }

    }
  } 

  google(): void {
    this.googlePlus.login({
      'webClientId': '269696208664-7vfdsbjccq8l42326l5folj6rh2igu6m.apps.googleusercontent.com',
      'offline': true
    }).then( res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then( success => {          
          this.navCtrl.setRoot(HomePage,{
            user : success
          });
        })
        .catch( error => alert("Firebase failure: " + JSON.stringify(error)));
      }).catch(err => alert("Error: " + err));
  }

 
  facebookLogin(){
    this.facebook.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {            
            this.userProfile = success;            
            this.navCtrl.setRoot(HomePage,{
              user : success
            });
        })
        .catch((error) => {
            alert("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { alert(error) });
}





ionViewDidLoad() {
  console.log('ionViewDidLoad LoginPage');
}

}
