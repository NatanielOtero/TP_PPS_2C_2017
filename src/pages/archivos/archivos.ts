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
  csvData: any[] = [];
  headerRow: any[] = [];

  constructor(public navCtrl: NavController, private http: Http) {
    this.readCsvData();
  }

  private readCsvData() {
    this.http.get('assets/PPS -4A-2c2017.csv')
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

    /*this.headerRow = parsedData[0];
 
    parsedData.splice(0, 1);*/
    this.csvData = parsedData;
  }

  downloadCSV() {
    let csv = baby.unparse({
      fields: this.headerRow,
      data: this.csvData
    });
    var blob = new Blob([csv]);
    var a = document.createElement("a");
    a.href = 'assets/PPS -4A-2c2017.csv';
    a.download = "newdata.csv";
    if(document.body.appendChild(a))
    {
      alert('se descargo correctamente');
    }
    a.click();
    document.body.removeChild(a);
  }

  private handleError(err) {
    console.log('something went wrong: ', err);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

}
