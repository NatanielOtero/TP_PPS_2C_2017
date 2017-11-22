import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResponderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-responder',
  templateUrl: 'responder.html',
})
export class ResponderPage {

  encuesta : any;
  preguntas : any[];
  respuestas : any[] = new Array<any>();
  respondio : any;
  opciones : any[] = new Array<any>();
  indice : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB : AngularFireDatabase) {
    this.encuesta = this.navParams.get('encuesta');
    console.log(" encuesta  :" + JSON.stringify( this.encuesta));
    console.log(" preguntas sin json  :" + this.encuesta.Preguntas);
    this.preguntas = this.encuesta.Preguntas;
    console.log(" preguntas :" + JSON.stringify( this.preguntas));
    this.respondio = this.navParams.get('user');
    this.indice = this.navParams.get('indice');

   
  }
  enviar()
  {
   
    console.log(this.respondio);
    console.log(this.encuesta);
    console.log(this.respuestas);
    let result : any = {};
    result.alumno = this.respondio;
    result.profesor = this.encuesta.Profesor;
    result.curso = this.encuesta.curso;
    result.materia = this.encuesta.materia;
    result.encuesta = this.encuesta.nombre;
    result.id = this.indice;
    let Items = this.afDB.list('/Resultados/');
    Items.set("/" + this.indice + " /" , result);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ResponderPage');
  }

}
