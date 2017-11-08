import { zip } from 'rxjs/observable/zip';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as baby from 'babyparse';
import 'rxjs/add/operator/map';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
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
  col1 : any[][] = [];
  col2 : any[][] = [];
  public cant : Array<any> = new Array<any>();

  public Items: AngularFireList<any>;
  public items: Observable<any>;

  constructor(public navCtrl: NavController, private http: Http,public afDB: AngularFireDatabase) {
    this.leerDB();
    
    /*this.Items = afDB.list('prueba');
    this.items = this.Items.valueChanges();
    this.items.subscribe(
        quest => this.cant = quest
    );*/
    
    
  }

  formatParsedObject(arr, hasTitles) {
    //console.log("array",arr);
    let legajo,
      nom,
      cursa,
      obj = [];
      
    for (var j = 0; j < arr.length-1; j++) {
      var items = arr[j][0];
      var items1 = arr[j][1];
      let array = items.split(";");
      let array1 = items1.split(";");
      
      this.Items = this.afDB.list("/prueba/" + j);
      this.Items.set("/pass", array[0]);
      this.Items.set("/usuario", array[0]);
      obj.push({
        legajo: array[0],
        ape: array[1],
        nom: array1[0],
        dia: array1[1]
      });
    }
    this.csvItem = obj;
    console.log("hola",this.cant);
  }
  
  async leerDB()
  {
    this.Items = this.afDB.list('/prueba');
    this.items = this.Items.valueChanges();
    await this.items.subscribe(cantidad => this.cant = cantidad);
    console.log('cantidad', JSON.stringify(this.cant));
  }

  private readCsvData() {
    this.http.get('assets/PPS -4A-2c2017.csv')
    .subscribe(
    data => this.extractData(data),
    err => this.handleError(err)
    );
  }
  
  private extractData(res) {
    let csvData = res['_body'] || '' ;
    let parsedData = baby.parse(csvData,{
      header: false,
      dynamicTyping: true,
      encoding: "UTF-8"
    }).data;
  
    this.csvData = parsedData;

    console.log("despues CSV",this.formatParsedObject(this.csvData,false));
  }
  
  downloadCSV() 
  {
    let csv = baby.unparse({
      fields: this.headerRow,
      data: this.csvData
    });
  
    // Dummy implementation for Desktop download purpose
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "newdata.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  private handleError(err) {
    console.log('something went wrong: ', err);
  }
  
  trackByFn(index: any, item: any) {
    return index;
  }
  
  //#endregion

}
