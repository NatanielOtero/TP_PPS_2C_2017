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
  logo: any;
  opcion : string;
  fecha : string;
  mostrar : boolean = true;
  public Items: AngularFireList<any>;
  public items: Observable<any>;
  asist : Array<any> = new Array<any>();
  
 
  constructor(public navCtrl: NavController, private http: Http, public afDB: AngularFireDatabase) {
    
    this.fecha = new Date().toLocaleDateString().toString();
    console.log(this.fecha);
  }

   leerDB() {
    this.Items = this.afDB.list('/' + this.opcion + "/");
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => this.cant = cantidad);
  }
  c()
  {
    console.log(this.asist);
  }
  f()
  {
    this.crearLista();
    if(this.cant != null)
    {
      this.mostrar = false;
    }
    else
    {
      alert("carga la base papu");
    }
    console.log(this.cant);
  }
    crearLista()
    {
      this.leerDB();
      for (var i = 0; i < this.cant.length; i++) {
            
        this.asist[i] = this.cant[i];
       this.asist[i].vino = false;
     
        
      }
      console.log(this.asist);
    }

    guardar()
    {
      const itemsRef = this.afDB.list('/' + this.opcion + '/' + this.fecha + '/');
      itemsRef.push(this.asist);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AsistenciaPage');
  }
}
