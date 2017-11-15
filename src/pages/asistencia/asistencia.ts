import { Alumno } from '../../entidades/alumnos';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

/**
 * Generated class for the AsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asistencia',
  templateUrl: 'asistencia.html',
})
export class AsistenciaPage {
  public cant: Array<any> = new Array<any>();
  logo: any;
  opcion : string;
  fecha : string;
  public Items: AngularFireList<any>;
  public items: Observable<any>;
  
  constructor(public navCtrl: NavController, private http: Http, public afDB: AngularFireDatabase) {
    
    this.fecha = new Date().toLocaleDateString().toString();
  }

  async leerDB() {
    this.Items = this.afDB.list('/' + this.opcion + "/");
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => this.cant = cantidad);
  }

  f()
  {
    this.leerDB();
    console.log(this.cant);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaPage');
  }
}
