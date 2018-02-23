import { Http } from '@angular/http';
import { Alta } from '../../entidades/alta';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ActionSheetController, AlertController, IonicPage, NavController, NavParams, ToastController,PopoverController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import * as baby from 'babyparse';
import { NativeAudio } from '@ionic-native/native-audio';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { TutorialPage } from '../tutorial/tutorial';

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
  id: number;
  opcion: string;
  mostrar: boolean = false;
  uno: boolean = true;
  varios: boolean = true;
  public Items: AngularFireList<any>;
  public items: Observable<any>;
  band: boolean = false;
  public csvItem: any[] = [];
  logo: any;
  csvData: any[] = [];
  public mat: string;
  public cant: Array<any> = new Array<any>();
  bandera: boolean = true;
  numero: string;
  tuto : boolean = true;
  tuto1 : boolean = true;
  tuto2 : boolean = true;
  tuto3 : boolean = true;
  tuto4 : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams , public popoverCtrl:PopoverController , public viewCtrl : ViewController ,public afDB: AngularFireDatabase, private http: Http, public toastCtr: ToastController,private audio : NativeAudio) {
    this.alta.edad = "sin definir";
    this.alta.email = "sin definir";
    this.alta.sexo = "sin definir";
    this.alta.usuario = "sin definir";
    this.alta.tipo = "profesor";
    this.audio.preloadSimple('help', 'assets/sounds/idea.mp3');
  
    this.leerDB();
  }
  tutorial(myEvent)
  {
    this.audio.play('help');
    let popover = this.popoverCtrl.create(TutorialPage,{"imagenes":["../../assets/imgs/emp1.png","../../assets/imgs/emp2.png","../../assets/imgs/emp3.png","../../assets/imgs/emp4.png"]},{cssClass: 'contact-popover-Alu'});
    popover.present({
      ev: myEvent
    });
  } 
 

  f() {
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

  enviar() {

    for (var index = 0; index < this.usuarios.length; index++) {
      var element = this.usuarios[index].id;
      this.id = element;
    }

    var lastId = (this.id + 1);
    this.alta.id = lastId;
    this.alta.actividad = 'activo';
    try {
      for (let i = 0; i < this.numero.length; i++) {
        console.log(this.numero[i]);
        if (this.numero[i] == '.' || this.numero[i] == 'e' || this.numero[i] == ',' || this.numero[i] == " ") {
          console.log("entre");
          this.bandera = false;
        }
      }
      if (this.bandera) {
        this.alta.legajo = Number(this.numero);
        if (this.alta.legajo == 0) {
          let tost = this.toastCtr.create({
            message: "introduzca un legajo",
            duration: 2000,
            position: 'middle'
          });
          tost.present();
        }
        else {
          for (var i = 0; i < this.cant.length; i++) {
            console.log(this.cant[i].legajo);
            if (this.alta.legajo == this.cant[i].legajo) {
              this.band = true;
            }
          }
          if (!this.band) {
            if (this.alta.usuario != "sin definir" && this.alta.usuario.length >= 6) {
              const itemRef = this.afDB.object('/prueba/' + lastId + "/");
              itemRef.set(this.alta);
            }
            else {
              let tost = this.toastCtr.create({
                message: "ingrese un usuario valido con mas de 6 caracteres",
                duration: 2000,
                position: 'middle'
              });
              tost.present();
            }
          }
          else {
            this.band = false;
            let tost = this.toastCtr.create({
              message: "ya existe ese legajo",
              duration: 2000,
              position: 'middle'
            });
            tost.present();
          }
        }
      }
      else {
        this.bandera = true;
        let tost = this.toastCtr.create({
          message: "no es un numero",
          duration: 2000,
          position: 'middle'
        });
        tost.present();
      }
    } catch (error) {

    }
  }

  ionViewDidLoad() {
    this.usuariosList = this.afDB.list('/prueba');
    this.usuariosObs = this.usuariosList.valueChanges();
    this.usuariosObs.subscribe(
      user => this.usuarios = user,
    );
  }

  private readCsvData() {
    console.log("hola1");
    this.http.get(this.logo)
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err),
    );
  }
  private handleError(err) {
  }
  private extractData(res) {
    let csvData = res['_body'] || '';
    let parsedData = baby.parse(csvData, {
      header: false,
      dynamicTyping: true,
      encoding: "UTF-8",

    }).data;
    console.log("hola2");
    this.csvData = parsedData;
    console.log("despues CSV", this.formatParsedObject(this.csvData, false));
  }

  handleUpload(e) {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      //this.materia = e.target.files;
      console.log("hola");
      reader.onload = (e: any) => {
        this.logo = e.target.result;
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  formatParsedObject(arr, hasTitles) {
    console.log("array", arr);
    let legajo,
      nom,
      cursa,
      obj = [];

    for (var j = 0; j < arr.length - 1; j++) {
      console.log(arr[j][0]);
      let array = arr[j][0];
      let items1 = arr[j][1];
      //let array = items.split(";");
      let array1 = items1.split(",");

      for (var i = 0; i < this.cant.length; i++) {

        if (array[0] == this.cant[i].legajo) {
          if (this.cant[i].actividad == "inactivo") {
            this.Items = this.afDB.list("/prueba/" + i);
            this.Items.set("/actividad", "activo");
          }

          this.band = true;
          //this.materias = this.cant[i].materias;
        }

      }

      if (!this.band) {
        this.Items = this.afDB.list("/prueba/" + (j + this.cant.length));
        this.Items.set("/pass", array);
        this.Items.set("/legajo", array);
        this.Items.set("/tipo", this.alta.tipo);
        this.Items.set("/sexo", "sin definir");
        this.Items.set("/edad", "sin definir");
        this.Items.set("/email", "sin definir");
        this.Items.set("/usuario", array1[0] + " " + array1[1]);
        this.Items.set("/id", (j + this.cant.length));
        this.Items.set("/actividad", "activo");
      }
      else {
        this.band = false;
      }

      obj.push({
        legajo: array[0],
        ape: array[1],
        nom: array1[0],
        dia: array1[1]
      });
    }
    this.csvItem = obj;
    this.leerDB();
  }

  async leerDB() {
    this.Items = this.afDB.list('/prueba/');
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => this.cant = cantidad);
  }

  delete(id)
  {
    if(this.cant[id].actividad == "activo")
    {
      this.Items = this.afDB.list("/prueba/" + id);
      this.Items.set("/actividad", "inactivo");
      this.leerDB();
    }
    else
    {
      this.Items = this.afDB.list("/prueba/" + id);
      this.Items.set("/actividad", "activo");
      this.leerDB();
    }
  }
}
