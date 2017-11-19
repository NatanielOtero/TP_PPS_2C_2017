import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { PerfilPage } from '../perfil/perfil';
import { ActionSheetController, AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';
import * as $ from 'jquery';
import { NativeAudio } from '@ionic-native/native-audio';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { Observable } from 'rxjs/Rx';
import { Alta } from '../../entidades/alta';
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

  email: any;
  pw: string;
  user: Alta;
  userProfile: any = null;
  public usuariosList : AngularFireList<any>;
  public usuariosObs : Observable<any>;
  public usuarios : Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtr: ToastController, public ActCtr: ActionSheetController,
    private aute: AngularFireAuth, private alert: AlertController, public audio: NativeAudio, private googlePlus: GooglePlus,
    private facebook : Facebook,public afDB: AngularFireDatabase) {
    this.audio.preloadSimple('btn', 'assets/sounds/btn.mp3'); 
     
  }
  rapido()
  {
     this.email = "nata.kapo@hotmail.com";
     this.pw = "123456";
  }

  async login() {    
    this.audio.play('btn');

    
    if (this.email == null || this.pw == null) {
      let tost = this.toastCtr.create({
        message: 'Error, complete los campos',
        duration: 3000,
        position: 'middle'
      });
      tost.present();
    }
    else {     
        try {
          var result = this.aute.auth.signInWithEmailAndPassword(this.email, this.pw).then(result => {
  
           console.log(" login " + JSON.stringify( this.usuarios));
           try {
            let privilegio = this.verificarPrivilegio(result.email);
            let user = this.obtenerUsuario(result.email);
            console.log("es :" + privilegio);
            console.log(result);
            console.log("nombre :" + result.displayName); 
            console.log(user);                      
            this.navCtrl.setRoot(HomePage,{
              tipo: privilegio,
              usuario: user
            });
           } catch (error ) {
            let tost = this.toastCtr.create({
              message: error,
              duration: 3000,
              position: 'middle'
            });
            tost.present();
           }
          
          }).catch(error => {
            console.error(error);
            let tost = this.toastCtr.create({
              message: 'Error, usuario invalido',
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
          try {
            let user = this.obtenerUsuario(success.email);
            let privilegio = this.verificarPrivilegio(success.email);
            this.navCtrl.setRoot(HomePage,{
              tipo : privilegio,
              usuario : user
            });
          } catch (error) {
            let tost = this.toastCtr.create({
              message: error,
              duration: 3000,
              position: 'middle'
            });
            tost.present();
          }        
       
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
          try {
            let user = this.obtenerUsuario(success.email);
            let privilegio = this.verificarPrivilegio(success.email);
            this.navCtrl.setRoot(HomePage,{
              tipo : privilegio,
              usuario : user
            });
          } catch (error) {
            let tost = this.toastCtr.create({
              message: error,
              duration: 3000,
              position: 'middle'
            });
            tost.present();
          }        
        })
        .catch((error) => {
            alert("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { alert(error) });
}





ionViewDidLoad() {
  this.usuariosList = this.afDB.list('/prueba');
  this.usuariosObs = this.usuariosList.valueChanges();
  this.usuariosObs.subscribe(
      user => this.usuarios = user,
    );
    console.log("inicio"+  JSON.stringify( this.usuarios));
}
obtenerUsuario(email : string)
{
  for (var i = 0; i < this.usuarios.length; i++) {
    if(email == this.usuarios[i].email)
    {
      return this.usuarios[i];
    }
    
  }
  throw new Error("Usuario invalido");
}

verificarPrivilegio(email : string)
{
  for (var i = 0; i < this.usuarios.length; i++) {
    if(email == this.usuarios[i].email)
    {
      return this.usuarios[i].tipo;
    }
    
  }
  throw new Error("Usuario invalido");
  
}





}
