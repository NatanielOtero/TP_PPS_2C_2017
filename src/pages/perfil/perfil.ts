import { Perfil } from '../../entidades/perfil';
import { HomePage } from '../home/home';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Alta } from '../../entidades/alta';
import { Datos } from "../../entidades/datos";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth, AngularFireAuthProvider, AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { storage, initializeApp } from "firebase";
import { Observable } from 'rxjs/Observable';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { LoadingController} from 'ionic-angular';

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

  alum = {} as Perfil;
  public cant: Array<any> = new Array<any>();
  public Items: AngularFireList<any>;
  public items: Observable<any>;
  modificar: boolean = true;
  indice: any = 0;
  storage: Array<any> = new Array<any>();
  fotos: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase, public toastCtr: ToastController, private camera: Camera, private loadingCtrl : LoadingController) {
    this.alum = this.navParams.get("usuario");
    this.traerImagenes();
    console.log(this.storage);
    if(this.storage.length == 0)
    {
      this.alum.foto = "../assets/imgs/male.png";
    }
    else
    {
      for (var i = 0; i < this.cant.length; i++) {
        console.log(this.cant);
        if(this.cant[i] == true)
        {
          this.alum.foto = this.storage[i];
          
        }
      }
    }
  }

  guardar() {
    const itemRef = this.afDB.object('/prueba/' + this.alum.id + "/");
    itemRef.set(this.alum).then(success => {
      let tost = this.toastCtr.create({
        message: 'Datos guardados',
        duration: 3000,
        position: 'middle'
      });
      tost.present();
    }).catch(er => console.error(er));
    this.modificar = true;

  }
  mod() {
    this.modificar = false;
  }

  ionViewDidLoad() {

  }

  async tomarFoto() {
    //try {
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    await this.camera.getPicture(options).then((ImageData) => {
      const image = "data:image/jpeg;base64," + ImageData;
      const pictures = storage().ref('/perfil/' + this.alum.id + '/' + this.indice + '/');
      pictures.putString(image, 'data_url');
      const itemsRef = this.afDB.list('/prueba/' + this.alum.id + '/');
      itemsRef.set('fotos/' + this.indice, false);
    }, (err) => {
      let tost = this.toastCtr.create({
        message: err.message,
        duration: 3000,
        position: 'middle'
      });
    });
    this.traerImagenes();
  }

  async traerImagenes() {

    let loading = this.loadingCtrl.create({
      spinner: 'bubbles'
    });

    loading.present();

    const itemsRef = this.afDB.list('/prueba/' + this.alum.id + '/fotos');

    this.items = itemsRef.valueChanges();
    this.items.subscribe(fotos => this.cant = fotos);
    this.indice = this.cant.length;
    
    setTimeout(() => {
    if (this.cant.length > 0) {
      for (var i = 0; i < this.cant.length; i++) {
        console.log("perfil/" + this.alum.id + '/' + i);
        const picture = storage().ref("perfil/" + this.alum.id + '/' + i);
        picture.getDownloadURL().then(data => this.storage.push(data));
        
      }
      
    }
   }, 500);
    setTimeout(() => {
      loading.dismiss();
    }, 3000);

  }

}
