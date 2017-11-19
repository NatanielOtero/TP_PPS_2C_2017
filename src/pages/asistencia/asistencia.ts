import { isEmpty } from 'rxjs/operator/isEmpty';
import { Asistencia } from '../../entidades/asist';
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
  public cant1: Array<any> = new Array<any>();
  logo: any;
  opcion: string;
  opcion1: string;
  fecha: any;
  mostrar: boolean = true;
  mostrar1: boolean = true;
  tomar: boolean = false;
  public Items: AngularFireList<any>;
  public items: Observable<any>;
  asist: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, private http: Http, public afDB: AngularFireDatabase) {
    //this.leer();
    this.fecha = new Date().toLocaleDateString().toString();
    this.fecha = this.fecha.split('/');
    console.log(this.fecha);
  }


  async leerDB() {

    this.Items = this.afDB.list('/lista/' + this.opcion + '-' + this.fecha[1] + '-' + this.fecha[0] + '-' + this.fecha[2] + '/' + this.opcion1);
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => this.cant = cantidad);
    this.leerMateria();
    setTimeout(() => {

      if (this.cant.length == 0) {
        this.leer();
      }
      else {
        this.tomar = true;
      }

    }, 500);

  }

  leer() {
    this.Items = this.afDB.list('/' + this.opcion + "/" + this.opcion1 + "/");
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => this.cant = cantidad);
  }

  leerMateria() {
    this.Items = this.afDB.list('/' + this.opcion + "/" + this.opcion1 + "/");
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => this.cant1 = cantidad);
  }

  f() {
    this.leer();
    this.mostrar = false;
  }
  g() {
    this.crearLista();

    this.mostrar1 = false;
    this.tomar = false;

  }

  crearLista() {
    //this.cant = new Array<any>();
    this.leerDB();
    for (var i = 0; i < this.cant.length; i++) {

      //this.asist[i] = this.cant[i];
      this.cant[i].vino = false;
    }

    console.log(this.asist);
  }


  guardar() {
    const itemsRef = this.afDB.list('/lista/');
    itemsRef.set(this.opcion + '-' + this.fecha[1] + '-' + this.fecha[0] + '-' + this.fecha[2] + '/' + this.opcion1, this.cant);
    for (var i = 0; i < this.cant1.length; i++) {
      if (this.cant[i].vino == false) {
        this.Items = this.afDB.list('/' + this.opcion + "/" + this.opcion1 + "/" + i);
        this.Items.set("/faltas", (this.cant1[i].faltas + 1));
        this.Items.set("/diasFaltas/" + (this.cant1[i].faltas + 1) + '/', this.fecha[1] + '-' + this.fecha[0]);
      }
    }
    this.tomar = true;
    this.leerDB();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaPage');
  }
}
