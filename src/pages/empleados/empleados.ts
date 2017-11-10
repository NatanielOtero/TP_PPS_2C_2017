import { Alta } from '../../entidades/alta';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ActionSheetController, AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

/**
 * Generated class for the EmpleadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleados',
  templateUrl: 'empleados.html',
})
export class EmpleadosPage {

  alta = {} as Alta;
  public usuariosList: AngularFireList<any>;
  public usuariosObs: Observable<any>;
  public usuarios: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
  }

  enviar(){
   for (var i = 0; i < this.usuarios.length; i++) {
     var id = this.usuarios[i].id;    
   }  
   var lastId = id + 1;
   this.alta.id = lastId;
   const itemRef = this.afDB.object('prueba/' + lastId  + "/");
   itemRef.set(this.alta);
  }

  ionViewDidLoad() {
    this.usuariosList = this.afDB.list('/prueba');
    this.usuariosObs = this.usuariosList.valueChanges();
    this.usuariosObs.subscribe(
      user => this.usuarios = user,
    );
    console.log("inicio" + JSON.stringify(this.usuarios));
  }

}
