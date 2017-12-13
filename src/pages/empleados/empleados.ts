import { Http } from '@angular/http';
import { Alta } from '../../entidades/alta';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ActionSheetController, AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import * as baby from 'babyparse';
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
  idioma = localStorage.getItem("idioma");

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase, private http: Http, public toastCtr: ToastController) {
    this.alta.edad = "sin definir";
    this.alta.email = "sin definir";
    this.alta.sexo = "sin definir";
    this.alta.usuario = "sin definir";
    this.alta.tipo = "profesor";

    this.leerDB();
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
          if(this.idioma == 'espanol')
          {
            let tost = this.toastCtr.create({
              message: "introduzca un legajo",
              duration: 2000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'frances')
          {
            let tost = this.toastCtr.create({
              message: "entrer un fichier",
              duration: 2000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'ingles')
          {
            let tost = this.toastCtr.create({
              message: "Enter the file",
              duration: 2000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'ruso')
          {
            let tost = this.toastCtr.create({
              message: "введите файл",
              duration: 2000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'aleman')
          {
            let tost = this.toastCtr.create({
              message: "Gib eine Datei ein",
              duration: 2000,
              position: 'middle'
            });
            tost.present();
          }
          if(this.idioma == 'portugues')
          {
            let tost = this.toastCtr.create({
              message: "insira um arquivo",
              duration: 2000,
              position: 'middle'
            });
            tost.present();
          }
          
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
              if(this.idioma == "espanol")
              {
                let tost = this.toastCtr.create({
                  message: "ingrese un usuario valido con mas de 6 caracteres",
                  duration: 2000,
                  position: 'middle'
                });
                tost.present();
              }
              if(this.idioma == "frances")
              {
                let tost = this.toastCtr.create({
                  message: "entrez un utilisateur valide avec plus de 6 caractères",
                  duration: 2000,
                  position: 'middle'
                });
                tost.present();
              }
              if(this.idioma == "ingles")
              {
                let tost = this.toastCtr.create({
                  message: "enter a valid user with more than 6 characters",
                  duration: 2000,
                  position: 'middle'
                });
                tost.present();
              }
              if(this.idioma == "ruso")
              {
                let tost = this.toastCtr.create({
                  message: "введите действительного пользователя с более чем 6 символами",
                  duration: 2000,
                  position: 'middle'
                });
                tost.present();
              }
              if(this.idioma == "aleman")
              {
                let tost = this.toastCtr.create({
                  message: "Geben Sie einen gültigen Benutzer mit mehr als 6 Zeichen ein",
                  duration: 2000,
                  position: 'middle'
                });
                tost.present();
              }
              if(this.idioma == "portugues")
              {
                let tost = this.toastCtr.create({
                  message: "insira um usuário válido com mais de 6 caracteres",
                  duration: 2000,
                  position: 'middle'
                });
                tost.present();
              }
            }
          }
          else {
            this.band = false;
            if(this.idioma == 'espanol')
            {
              let tost = this.toastCtr.create({
                message: "ya existe ese legajo",
                duration: 2000,
                position: 'middle'
              });
              tost.present();
            }
            if(this.idioma == 'frances')
            {
              let tost = this.toastCtr.create({
                message: "ce fichier existe déjà",
                duration: 2000,
                position: 'middle'
              });
              tost.present();
            }
            if(this.idioma == 'ingles')
            {
              let tost = this.toastCtr.create({
                message: "that file already exists",
                duration: 2000,
                position: 'middle'
              });
              tost.present();
            }
            if(this.idioma == 'ruso')
            {
              let tost = this.toastCtr.create({
                message: "этот файл уже существует",
                duration: 2000,
                position: 'middle'
              });
              tost.present();
            }
            if(this.idioma == 'aleman')
            {
              let tost = this.toastCtr.create({
                message: "Diese Datei existiert bereits",
                duration: 2000,
                position: 'middle'
              });
              tost.present();
            }
            if(this.idioma == 'portugues')
            {
              let tost = this.toastCtr.create({
                message: "esse arquivo já existe",
                duration: 2000,
                position: 'middle'
              });
              tost.present();
            }
          }
        }
      }
      else {
        this.bandera = true;
        if(this.idioma == 'espanol')
        {
          let tost = this.toastCtr.create({
            message: "no es un numero",
            duration: 2000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'frances')
        {
          let tost = this.toastCtr.create({
            message: "Ce n'est pas un nombre",
            duration: 2000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'ingles')
        {
          let tost = this.toastCtr.create({
            message: "It is not a number",
            duration: 2000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'ruso')
        {
          let tost = this.toastCtr.create({
            message: "Это не число",
            duration: 2000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'aleman')
        {
          let tost = this.toastCtr.create({
            message: "Es ist keine Nummer",
            duration: 2000,
            position: 'middle'
          });
          tost.present();
        }
        if(this.idioma == 'portugues')
        {
          let tost = this.toastCtr.create({
            message: "não é um número",
            duration: 2000,
            position: 'middle'
          });
          tost.present();
        }
        
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
