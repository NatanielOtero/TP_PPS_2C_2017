import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ActionSheetController, AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { Datos } from '../../entidades/datos';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  legajo: any;
  pw: any;
  public usuariosList: AngularFireList<any>;
  public usuariosObs: Observable<any>;
  public usuarios: Array<any>;
  mostrar: boolean = false;
  idioma = localStorage.getItem("idioma");
  us = {} as Datos;
  validati: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtr: ToastController, public ActCtr: ActionSheetController,
    private aute: AngularFireAuth, private alert: AlertController, public audio: NativeAudio,
    public afDB: AngularFireDatabase) {
  }


  ionViewDidLoad() {
    this.usuariosList = this.afDB.list('/prueba');
    this.usuariosObs = this.usuariosList.valueChanges();
    this.usuariosObs.subscribe(
      user => this.usuarios = user,
    );
    console.log("inicio" + JSON.stringify(this.usuarios));
  }

  reg() {
    for (var i = 0; i < this.usuarios.length; i++) {
      if (this.legajo == this.usuarios[i].legajo && this.pw == this.usuarios[i].legajo) {
        if (this.usuarios[i].email == "sin definir" || this.usuarios[i].sexo == "sin definir" || this.usuarios[i].edad == "sin definir") {
          this.mostrar = true;
        }
        else {
          if(this.idioma == 'espanol')
          {
            let tost = this.toastCtr.create({
              message: "El usuario ya esta activo",
              duration: 3000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'frances')
          {
            let tost = this.toastCtr.create({
              message: "L'utilisateur est déjà actif",
              duration: 3000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'ingles')
          {
            let tost = this.toastCtr.create({
              message: "The user is already active",
              duration: 3000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'ruso')
          {
            let tost = this.toastCtr.create({
              message: "Пользователь уже активен",
              duration: 3000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'aleman')
          {
            let tost = this.toastCtr.create({
              message: "Der Benutzer ist bereits aktiv",
              duration: 3000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'portugues')
          {
            let tost = this.toastCtr.create({
              message: "O usuário já está ativo",
              duration: 3000,
              position: 'middle'
            });
            tost.present();
          }
          

        }
      }

    }
  }
  enviar() {
    this.usuariosList = this.afDB.list('/prueba');
    this.usuariosObs = this.usuariosList.valueChanges();
    this.usuariosObs.subscribe(
      user => console.log(user),
    );
    console.log("inicio" + JSON.stringify(this.usuarios));

    if (this.us == null || this.us.mail == null || this.us.pw == null)  {
      if(this.idioma == 'espanol')
      {
        let tost = this.toastCtr.create({
          message: "Error, complete los campos",
          duration: 3000,
          position: 'middle'
        });
        tost.present();
      }
      if(this.idioma == 'frances')
      {
        let tost = this.toastCtr.create({
          message: "Erreur, complétez les champs",
          duration: 3000,
          position: 'middle'
        });
        tost.present();
      }
      if(this.idioma == 'ingles')
      {
        let tost = this.toastCtr.create({
          message: "Error, complete the fields",
          duration: 3000,
          position: 'middle'
        });
        tost.present();
      }
      if(this.idioma == 'ruso')
      {
        let tost = this.toastCtr.create({
          message: "Ошибка, заполните поля",
          duration: 3000,
          position: 'middle'
        });
        tost.present();
      }
      if(this.idioma == 'aleman')
      {
        let tost = this.toastCtr.create({
          message: "Fehler, füllen Sie die Felder aus",
          duration: 3000,
          position: 'middle'
        });
        tost.present();
      }
      if(this.idioma == 'portugues')
      {
        let tost = this.toastCtr.create({
          message: "Erro, complete os campos",
          duration: 3000,
          position: 'middle'
        });
        tost.present();
      }
      
    }
    else {
      if (this.us.pw == this.validati) {
        console.log(this.us);
        for (var i = 0; i < this.usuarios.length; i++) {
          if (this.legajo == this.usuarios[i].legajo) {
            try {
              this.usuarios[i].edad = this.us.edad;
              this.usuarios[i].email = this.us.mail;
              this.usuarios[i].pass = this.us.pw;
              this.usuarios[i].sexo = this.us.sexo;
             
              const itemRef = this.afDB.object('prueba/' + i + "/");
              itemRef.update({ edad: this.us.edad, email: this.us.mail, pass: this.us.pw, sexo: this.us.sexo });

              const result = this.aute.auth.createUserWithEmailAndPassword(this.us.mail, this.us.pw).then(result => console.log(result)).catch(error => console.error(error));
              console.log(result);
            } catch (error) {

            }
          }

        }



      }
      else
      {
        if(this.idioma == 'espanol')
        {
          let tost = this.toastCtr.create({
            message: "Las constraseñas no coinciden",
            duration: 3000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'frances')
        {
          let tost = this.toastCtr.create({
            message: "Les mots de passe ne correspondent pas",
            duration: 3000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'ingles')
        {
          let tost = this.toastCtr.create({
            message: "Passwords do not match",
            duration: 3000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'ruso')
        {
          let tost = this.toastCtr.create({
            message: "Пароли не совпадают",
            duration: 3000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'aleman')
        {
          let tost = this.toastCtr.create({
            message: "Passwörter stimmen nicht überein",
            duration: 3000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'portugues')
        {
          let tost = this.toastCtr.create({
            message: "As senhas não correspondem",
            duration: 3000,
            position: 'middle'
          });
          tost.present();
        }
      }
    }
  }


}

