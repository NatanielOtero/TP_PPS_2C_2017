import { Alumno } from '../../entidades/alumnos';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  alumnos : any[];
  pepe = {} as Alumno;
  lolo = {} as Alumno;
  lele = {} as Alumno;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.alumnos = new Array<any>();

    this.pepe.nombre = "pepe";
    this.pepe.apellido = "pepe";
    this.pepe.turno = "mañana";
    this.pepe.vino = false;

    this.lolo.nombre = "lolo";
    this.lolo.apellido = "lolo";
    this.lolo.turno = "mañana";
    this.lolo.vino = false;

    this.lele.nombre = "lele";
    this.lele.apellido = "lele";
    this.lele.turno = "mañana";
    this.lele.vino = false;


    this.alumnos.push(this.pepe);
    this.alumnos.push(this.lele);
    this.alumnos.push(this.lolo);
    
  

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaPage');
  }
 

}
