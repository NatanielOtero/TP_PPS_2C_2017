import { Materia } from '../../entidades/materia';
import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta-estadistica',
  templateUrl: 'encuesta-estadistica.html',
})
export class EncuestaEstadisticaPage {

  usuarioActual: any;

  public Items: AngularFireList<any>;
  public items: Observable<any>;
  public Results: AngularFireList<any>;
  public results: Observable<any>;
  public Cuestionario: any;
  public Cuestionarios: Array<any>;
  public display = false;
  public respuestas: Array<string> = [];
  public preguntas: Array<string> = [];
  alumno = {} as Materia;
  cursaPPS4A: boolean = false;
  cursaPPS4B: boolean = false;
  cursaLAB44A: boolean = false;
  cursaLAB44B: boolean = false;
  encues: any[] = new Array<any>();
  materias: any[] = new Array<any>();
  cursos: any[] = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDB: AngularFireDatabase, public alertCtrl: AlertController) {



    this.usuarioActual = this.navParams.get("usuario");
    //console.log(this.usuarioActual);
    this.encontrarAlumno();
    this.Items = afDB.list('Encuestas');
    this.Results = afDB.list('Respuestas');
    this.results = this.Results.valueChanges();

    this.items = this.Items.valueChanges();
    this.items.subscribe(
      quest => {
        for (let i = 0; i < quest.length; i++) {
          for (var y = 0; y < this.materias.length; y++) {
            if (quest[i].materia == this.materias[y]) {
              for (var x = 0; x < this.cursos.length; x++) {
                if (quest[i].curso == this.cursos[x]) {
                  /////Cargar encuestas, ver que encuestas mostrar y como. volver 21/11/17
                  console.log(quest[i]);
                }
              }
              /* this.Cuestionario = quest[i];
               console.log(this.Cuestionario);
               this.display = true;
               for(let j=0; j < quest[i].Preguntas.length;j++)
               {
                 this.respuestas.push("");
                 this.preguntas.push(quest[i].Preguntas[j].question);
               }
               console.log(this.respuestas);
               break;*/
            }
          }
        }
      }
    );

  }

  async encontrarAlumno() {
    this.Items = this.afDB.list("PPS/4A");
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => {
      for (var i = 0; i < cantidad.length; i++) {
        if (this.usuarioActual.legajo == cantidad[i].legajo) {
          this.cursaPPS4A = true;
          //console.log(this.cursaPPS4A);
          this.materias.push("PPS");
          this.cursos[0] = "4A";
        }
      }
    });

    this.Items = this.afDB.list("PPS/4B");
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => {
      for (var i = 0; i < cantidad.length; i++) {

        if (this.usuarioActual.legajo == cantidad[i].legajo) {
          this.cursaPPS4B = true;
          this.materias.push("PPS");
          this.cursos.push("4B");
        }
      }
    });

    this.Items = this.afDB.list("LAB4/4A");
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => {
      for (var i = 0; i < cantidad.length; i++) {
        if (this.usuarioActual.legajo == cantidad[i].legajo) {
          this.cursaPPS4B = true;
          this.materias.push("LAB4");
          if(this.cursos[0] == "4A")
            break;
          else  
            this.cursos.push("4A");
        }
      }
    });

    this.Items = this.afDB.list("LAB4/4B");
    this.items = this.Items.valueChanges();
    this.items.subscribe(cantidad => {
      for (var i = 0; i < cantidad.length; i++) {
        if (this.usuarioActual.legajo == cantidad[i].legajo) {
          this.cursaPPS4B = true;
          this.materias.push("LAB4");
          if(this.cursos[0] == "4B")
            break;
          else  
            this.cursos.push("4B");
        }
      }
    });

    /* this.Items = this.afDB.list("PPS/4B");
     this.items = this.Items.valueChanges();
     this.items.subscribe(cantidad => this.cant = cantidad);
     this.Items = this.afDB.list("LAB4/4A");
     this.items = this.Items.valueChanges();
     this.items.subscribe(cantidad => this.cant = cantidad);
     this.Items = this.afDB.list("LAB4/4B");
     this.items = this.Items.valueChanges();
     this.items.subscribe(cantidad => this.cant = cantidad);*/
  }
  enviar() {
    console.log(this.cursaPPS4A);
    console.log(this.cursaPPS4B);
    console.log(this.cursaLAB44B);
    console.log(this.cursaLAB44A);
    console.log(this.materias);
    console.log(this.cursos);
    //console.log(this.respuestas);
    //console.log(this.preguntas);
    /* var item: any = {};
     //var objeto: any = {};
     item.Alumno = this.usuarioActual.nombre+" "+ this.usuarioActual.apellido;
     item.cuestionario = this.codigo;
     var respuestas: Array<any> = [];
     for(let i=0;i<this.preguntas.length;i++)
     {
       //objeto.respuesta = this.respuestas[i];
       //objeto.pregunta = this.preguntas[i];
       //console.log(objeto);
       respuestas.push({respuesta:this.respuestas[i],pregunta:this.preguntas[i]});
     }
     item.respuestas = respuestas;
     console.log(respuestas);
     this.Results.push(item);*/
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaPage');
  }

}