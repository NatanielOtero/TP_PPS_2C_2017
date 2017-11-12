import { zip } from 'rxjs/observable/zip';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as baby from 'babyparse';
import 'rxjs/add/operator/map';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from "firebase";

@Component({
  selector: 'page-archivos',
  templateUrl: 'archivos.html',
})
export class ArchivosPage {
  public csvItem: any[] = [];
  csvData: any[] = [];
  headerRow: any[] = [];
  col1: any[][] = [];
  col2: any[][] = [];
  band: boolean = false;
  band1: boolean = false;
  bandera: boolean = false;
  public cant: Array<any> = new Array<any>();
  logo: any;
  public Items: AngularFireList<any>;
  public items: Observable<any>;
  public materia: any[];
  public pruebaArray: Array<any> = new Array<any>();
  public pruebaLista: AngularFireList<any>;
  public pruebaObs: Observable<any>;
  public mat: string;
  public mat1: string;
  public mat2: string;
  public materias: any[];
  constructor(public navCtrl: NavController, private http: Http, public afDB: AngularFireDatabase) {
    this.leerDB();
    this.materias = new Array<any>();
    /*this.Items = afDB.list('prueba');
    this.items = this.Items.valueChanges();
    this.items.subscribe(
        quest => this.cant = quest
    );*/


  }
  handleUpload(e) {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      this.materia = e.target.files;

      reader.onload = (e: any) => {
        this.logo = e.target.result;
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  prueba() {
    console.log(this.cant);
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

      for (var i = 0; i < this.materia[0].name.length; i++) {
        if (this.materia[0].name[i] == "-" || this.materia[0].name[i] == " ") {
          if (this.materia[0].name[i] == "-") {
            this.mat = this.materia[0].name.split("-", 1);
          }
          else {
            this.mat = this.materia[0].name.split(" ", 1);
          }
        }
      }

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
            for (var z = 0; z < array.length; z++) {
              
              this.materias.push(this.cant[i].materias[z]);
            }
            for (var x = 0; x < this.materias.length; x++) {
              if (this.mat == this.cant[i].materias.x) {
                this.band1 = true;
              }
            }
            if (!this.band1) {
              this.Items.set("/materias/", this.mat);
            }
            else {
              this.band = false;
            }
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
        this.Items.set("/materias/", this.mat);
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

  private readCsvData() {
    this.http.get(this.logo)
      .subscribe(
      data => this.extractData(data),
      err => this.handleError(err)
      );
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

  delete(e) {
    console.log(e);
    for (var i = 0; i < this.cant.length; i++) {
      if (e == this.cant[i].legajo) {
        this.cant.splice(i, 1);
        this.Items = this.afDB.list("/prueba/" + i);
        this.Items.set("/actividad", "inactivo");
      }
    }
    console.log(this.cant);
  }

  private handleError(err) {
    console.log('something went wrong: ', err);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
      return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function (item) {
      ctr = 0;
      keys.forEach(function (key) {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];
        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  downloadCSV(args) {
    var data, filename, link;

    var csv = this.convertArrayOfObjectsToCSV({
      //data: this.stockData
      data: this.csvData
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
      csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  }
  //#endregion
}