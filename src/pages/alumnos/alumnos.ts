import { Alta } from '../../entidades/alta';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ActionSheetController, AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';


/**
 * Generated class for the AlumnosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alumnos',
  templateUrl: 'alumnos.html',
})
export class AlumnosPage {

  alta = {} as Alta;
  public usuariosList: AngularFireList<any>;
  public usuariosObs: Observable<any>;
  public usuarios: Array<any>;
  id : number;
  opcion :string;
  mostrar : boolean = false;
  uno : boolean = true;
  varios : boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase) {
    this.alta.edad = "sin definir";
    this.alta.email = "sin definir";    
    this.alta.sexo = "sin definir";
    this.alta.usuario = "sin definir";
    this.alta.tipo = "alumno";
  }

  f()
  {
    switch (this.opcion) {
      case "uno":
        this.uno = false;
        this.varios = true;
        break;
      case "var":
      this.uno = true;
      this.varios = false;
      break;
      default:
        break;
    }
  }
  enviar(){   
 

    for (var index = 0; index < this.usuarios.length; index++) {
      var element = this.usuarios[index].id;
      this.id = element;
      console.log(element);
      console.log(this.id);
    }

   var lastId = (this.id + 1);
   this.alta.id = lastId;
  

   console.log(this.id);
   console.log(lastId);   
   console.log(this.alta);
   console.log("inicio" + JSON.stringify(this.usuarios));
   try {
    const itemRef = this.afDB.object('/prueba/' + lastId  + "/");
    itemRef.set(this.alta);
   } catch (error) {
     console.log(error);
     console.log(this.id);
     console.log(lastId);   
     console.log(this.alta);
     console.log("inicio" + JSON.stringify(this.usuarios));
    
   }
   
   
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
