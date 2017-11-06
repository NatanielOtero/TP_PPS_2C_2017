import { zip } from 'rxjs/observable/zip';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as baby from 'babyparse';
import 'rxjs/add/operator/map';

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

  constructor(public navCtrl: NavController, private http: Http) {
    this.readCsvData();
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
       /*if (items.indexOf("") === -1) {
        obj.push({
          legajo: items[0],
          nom: items[1]
        });
      }*/
      /*console.log(arr[j][0].indexOf(";"));
      console.log(arr[j][1].indexOf(";"));*/
      
      obj.push({
        legajo: array[0],
        ape: array[1],
        nom: array1[0],
        dia: array1[1]
      });
    }
    this.csvItem = obj;
    console.log(this.csvItem);
  }


  //#region Gustavo
  
  
  
  
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
