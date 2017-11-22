import { Component } from '@angular/core';
import { ActionSheetController,IonicPage, NavController, NavParams} from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList} from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-encuestas',
  templateUrl: 'encuestas.html',
})

export class EncuestasPage {

  usuarioActual : any;
  perfilActual : any;

  public formato : string = 'P';
  public cantidad : number = 2;
  public horas : number;

  public question : string = "";
  public nombre: string = "";
  public DateStart: Date;
  public DateEnd: Date;

  public option : Array<string> = ["","","","","",""];
  public respuesta : string = "";
  public materia: string = "";
  public encuesta : Array<any> = [];
  public cant : Array<number> = [1,2,3,4,5];
  public cant1 : Array<any> = new Array<any>();
  public indice: number;
  public curso : string;
  public tipo : string;

  public boton : boolean = false;
  otra : boolean = true;
  mostrar : boolean = false;
  cursar : boolean = true;
  datos : boolean = true;



  //items: Observable<any[]>;
  Items: AngularFireList<any>;
  items: Observable<any>;
  public Profesores: AngularFireList<any>;
  public profesores: Observable<any>;
  public Materias: Array<string>= [];
  constructor(public navCtrl: NavController,public actionSheetCtrl : ActionSheetController, afDB: AngularFireDatabase, public navParams: NavParams) {
    //this.items = afDB.list('Encuestas').valueChanges();

    this.Items = afDB.list('Encuestas');
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => this.indice = cantidad.length);
    this.usuarioActual = this.navParams.get("usuario");
    this.perfilActual = this.usuarioActual.tipo;
    this.Profesores = afDB.list('prueba');
    this.profesores = this.Profesores.valueChanges();
    //console.log(this.profesores);
    this.profesores.subscribe(profesor => {
      for (var i = 0; i < profesor.length; i++) {
        if(profesor[i].tipo == "profesor")
        {
          this.cant1.push(profesor[i]);
        }
      }
    });

  }

  AgregarQuestion()
  { 
    var item : any = {};
    item.question = this.question;
    item.indice = this.encuesta.length;
    switch(this.formato)
    {
      case 'P':
        this.tipo = 'P';
        this.encuesta.push(item);
        break;
      case 'U':
      this.tipo  = 'U';
        item.opciones = [];
        for(let i=1;i<=this.cantidad;i++)
        {
          item.opciones.push(this.option[i]);
          console.log(this.option);
        }
        this.encuesta.push(item);
        break;     
    }
    this.question = ""; 
    this.respuesta = "";
    this.cantidad = 2;
    this.formato = 'P';
    this.option = [];
   
  }
  
  SubirQuestion()
  { 
    var item : any = {};
    var tiempoActual = Date.now();
    var tiempoFin = tiempoActual + (this.horas* 3600000);
    item.Nombre = this.nombre;
    item.materia = this.materia;
    item.Profesor = this.usuarioActual.usuario;
    item.curso = this.curso;   
    item.FechaComienzo = new Date(tiempoActual).getDate()+"-"+(new Date(tiempoActual).getMonth()+1)+"-"+
    new Date(tiempoActual).getUTCFullYear()+"-"+new Date(tiempoActual).getHours()+"-"+new Date(tiempoActual).getMinutes();
    item.FechaFin = new Date(tiempoFin).getDate()+"-"+(new Date(tiempoFin).getMonth()+1)+"-"+
    new Date(tiempoFin).getUTCFullYear()+"-"+new Date(tiempoFin).getHours()+"-"+new Date(tiempoFin).getMinutes();
    item.TiempoFin = tiempoFin;
    item.tipo = this.tipo;
    item.Preguntas = this.encuesta;
    console.log(item);
    this.Items.set('/' + this.indice, item);
    console.log(this.usuarioActual);
    this.otra = false;
    this.boton = true;
    this.mostrar = true;
    this.datos = true;

  }

  f()
  {
    this.cursar = false;
  }
  g()
  {
    this.mostrar = true;
    this.datos = false;
  }
  otraE()
  {
    this.otra = true;
    this.boton = false;
    this.mostrar = false;
  }
 

  public mychange(event)
  {
    console.log(this.cantidad); // mymodel has the value before the change
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestasPage');
  }
}