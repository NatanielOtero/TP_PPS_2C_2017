import { Alta } from '../../entidades/alta';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ActionSheetController, AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import * as baby from 'babyparse';
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
  id: number;
  opcion: string;
  mostrar: boolean = false;
  uno: boolean = true;
  varios: boolean = true;
  logo: any;
  csvData: any[] = [];
  public mat: string;
  public cant: Array<any> = new Array<any>();
  public Items: AngularFireList<any>;
  public items: Observable<any>;
  band: boolean = false;
  public csvItem: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase, private http: Http) {
    this.alta.edad = "sin definir";
    this.alta.email = "sin definir";
    this.alta.sexo = "sin definir";
    this.alta.tipo = "alumno";
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
      const itemRef = this.afDB.object('/prueba/' + lastId + "/");
      itemRef.set(this.alta);
    } catch (error) {
      console.log(error);
      console.log(this.id);
      console.log(lastId);
      console.log(this.alta);
      console.log("inicio" + JSON.stringify(this.usuarios));

    }
  }

  private readCsvData() {
    this.http.get(this.logo)
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
      );
  }

  ionViewDidLoad() {
    this.usuariosList = this.afDB.list('/prueba');
    this.usuariosObs = this.usuariosList.valueChanges();
    this.usuariosObs.subscribe(
      user => this.usuarios = user,
    );
    console.log("inicio" + JSON.stringify(this.usuarios));
  }

  private handleError(err) {
    console.log('something went wrong: ', err);
  }

  private extractData(res) {
    let csvData = res['_body'] || '';
    let parsedData = baby.parse(csvData, {
      header: false,
      dynamicTyping: true,
      encoding: "UTF-8"
    }).data;

    this.csvData = parsedData;

    console.log("despues CSV", this.formatParsedObject(this.csvData, false));
  }

  formatParsedObject(arr, hasTitles) {
    //console.log("array",arr);
    let legajo,
      nom,
      cursa,
      obj = [];

    for (var j = 0; j < arr.length - 1; j++) {
      var items = arr[j][0];
      var items1 = arr[j][1];
      let array = items.split(";");
      let array1 = items1.split(";");

      console.log(this.mat);
      for (var i = 0; i < this.cant.length; i++) {
        if (this.cant[i].tipo == 'alumno') {


          if (array[0] == this.cant[i].legajo) {
            if (this.cant[i].actividad == "inactivo") {
              this.Items = this.afDB.list("/prueba/" + i);
              this.Items.set("/actividad", "activo");
            }

            this.band = true;
            //this.materias = this.cant[i].materias;
          }
        }
      }

      if (!this.band) {
        this.Items = this.afDB.list("/prueba/" + (j + this.cant.length));
        this.Items.set("/pass", array[0]);
        this.Items.set("/legajo", array[0]);
        this.Items.set("/tipo", "alumno");
        this.Items.set("/sexo", "sin definir");
        this.Items.set("/edad", "sin definir");
        this.Items.set("/email", "sin definir");
        this.Items.set("/usuario", array[1] + array1[0]);
        this.Items.set("/id", (j + this.cant.length));
        this.Items.set("/actividad", "activo");
        console.log("este usuario no existia");
      }
      else {
        this.band = false;
        console.log("este usuario existe");
      }

      obj.push({
        legajo: array[0],
        ape: array[1],
        nom: array1[0],
        dia: array1[1]
      });
    }
    this.csvItem = obj;
    console.log("hola", this.cant);
    this.leerDB();
  }

  async leerDB() {
    this.Items = this.afDB.list('/prueba/');
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => this.cant = cantidad);
  }
}
