import { Component } from '@angular/core';
import { ActionSheetController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';
import { Chart } from 'chart.js';

import { Materia } from '../../entidades/materia';

@IonicPage()
@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {

  usuarioActual: any;
  perfilActual: any;
  Respuestas: AngularFireList<any>;
  respuesta: Observable<any>;
  public Items: AngularFireList<any>;
  public items: Observable<any>;

  ListaRespuestas: Array<any> = [];
  codigo = this.navParams.get("codigo");
  estado = false;
  check = false;
  Encuesta: string = "";
  pregunta: string = "";

  tipo = "";
  pieChartLabels: Array<string> = [];
  pieChartData: Array<number> = [];
  pieChartType: string = 'pie';
  pieChartColor: Array<any> = [];

  public Results: AngularFireList<any>;
  public results: Observable<any>;
  elegir: boolean = false;
  alumno = {} as Materia;
  cursaPPS4A: boolean = false;
  cursaPPS4B: boolean = false;
  cursaLAB44A: boolean = false;
  cursaLAB44B: boolean = false;
  encues: any[] = new Array<any>();
  listaEncuestas: any[];
  materias: any[] = new Array<any>();
  cursos: any[] = new Array<any>();
  preguntas: any[] = new Array<any>();
  opciones: any[] = new Array<any>();
  respuestas: any[] = new Array<any>();
  indice: any;
  bandera: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, afDB: AngularFireDatabase) {
    /*var encuesta = this.codigo.split("-");
    this.Encuesta = encuesta[0];
    this.usuarioActual = JSON.parse(localStorage.getItem("usuario"));
    this.perfilActual = this.usuarioActual.perfil;
    this.Items = afDB.list('Encuestas');
    this.items = this.Items.valueChanges();
    this.items.subscribe(
      quest => {
        for (let i = 0; i < quest.length; i++) {
          if (quest[i].Codigo == this.codigo) {
            this.tipo = quest[i].Preguntas[0].tipo;
            this.pregunta = quest[i].Preguntas[0].question;
            if (quest[i].Preguntas[0].tipo == 'P') {
              this.Respuestas = afDB.list('Respuestas');
              this.respuesta = this.Respuestas.valueChanges();
              this.respuesta.subscribe(
                rest => {
                  for (let x = 0; x < rest.length; x++) {
                    if (rest[x].cuestionario == this.codigo) {
                      this.ListaRespuestas.push(rest[x].respuestas[0].respuesta);
                    }
                  }
                }
              );
            }
            else {
              this.pregunta = quest[i].Preguntas[0].question;
              if (quest[i].Preguntas[0].tipo == 'U') {
                for (let y = 0; y < quest[i].Preguntas[0].opciones.length; y++) {
                  this.ListaRespuestas.push({ "respuesta": quest[i].Preguntas[0].opciones[y], "cantidad": 0 });
                  //this.pieChartData.push();
                  this.pieChartLabels.push(quest[i].Preguntas[0].opciones[y]);
                }
              }
              if (quest[i].Preguntas[0].tipo == 'M') {
                this.ListaRespuestas.push({ "respuesta": "SÍ", "cantidad": 0 });
                this.ListaRespuestas.push({ "respuesta": "NO", "cantidad": 0 });
                this.pieChartLabels.push("SÍ");
                this.pieChartLabels.push("NO");
                this.check = true;
              }
              this.Respuestas = afDB.list('Respuestas');
              this.respuesta = this.Respuestas.valueChanges();
              this.ObtenerCantidades();
            }
            break;
          }
        }
      }
    );*/
    this.Items = afDB.list('Encuestas');
    this.Results = afDB.list('Resultados');
    this.results = this.Results.valueChanges();
    var tiempoActual = Date.now();
    this.items = this.Items.valueChanges();
    this.items.subscribe(
      quest => {
        for (let i = 0; i < quest.length; i++) {
          for (var y = 0; y < this.materias.length; y++) {
            if (quest[i].materia == this.materias[y]) {
              for (var x = 0; x < this.cursos.length; x++) {
                if (quest[i].curso == this.cursos[x]) {
                  /////Cargar encuestas, ver que encuestas mostrar y como. volver 21/11/17
                  if (quest[i].tipo == "U")
                  {
                    this.results.subscribe(result => {
                      for (var j = 0; j < result.length; j++) {
                        console.log(result[j].encuesta, quest[i].Nombre)
                        if (result[j].encuesta == quest[i].Nombre) {
                          //console.log('hola',result[j].alumno[this.usuarioActual.legajo]);
                          this.bandera = true;
                        }
                      }
                      if (this.bandera) {
                        this.bandera = false;
                      }
                      else {
                        this.alumno.tipo = quest[i].tipo;
                        this.alumno.quest = quest[i].Nombre;
                        this.encues.push(this.alumno.quest);
                        this.listaEncuestas = quest;
                      }
                    });
                  }
                }
              }
            }
          }
        }
      }
    );
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ObtenerCantidades() {
    this.respuesta.subscribe(
      rest => {
        for (let i = 0; i < rest.length; i++) {
          if (rest[i].cuestionario == this.codigo) {
            if (!this.check) {
              for (let y = 0; y < this.ListaRespuestas.length; y++) {
                if (this.ListaRespuestas[y].respuesta == rest[i].respuestas[0].respuesta) {
                  this.ListaRespuestas[y].cantidad++;
                }
              }
            }
            else {
              if (rest[i].respuestas[0].respuesta == true) {
                this.ListaRespuestas[0].cantidad++;
              }
              else {
                this.ListaRespuestas[1].cantidad++;
              }
            }
            /*this.Aula.Numero = aula[i].Numero;
            this.Aula.Materia = aula[i].Materia;
            this.Aula.Profesor = aula[i].Profesor;
            this.Aula.Alumnos = [];
            for(let y=0;y<aula[i].Alumnos.length;y++)
            {
              this.Aula.Alumnos.push(aula[i].Alumnos[y]);
            }
            //this.Aula.Alumnos = aula[i].Alumnos;
            break;*/
          }
        }
        for (let z = 0; z < this.ListaRespuestas.length; z++) {
          this.pieChartData.push(this.ListaRespuestas[z].cantidad);
          /*switch(z)
          {
            case 0:
            this.pieChartData.push(1);
            break;
            case 1:
            this.pieChartData.push(1);
            break;
            case 2:
            this.pieChartData.push(4);
            break;
            case 3:
            this.pieChartData.push(1);
            break;
            case 4:
            this.pieChartData.push(1);
            break;
          }*/
        }
        this.mostrar();
      }
    );
  }
  mostrar() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: this.pieChartType,
      //type: "pie",
      data: {
        labels: this.pieChartLabels,
        //labels: ["A","B","C","D","E"],
        datasets: [{
          label: this.pieChartLabels,
          //data:[4,5,6,7,8],
          data: this.pieChartData,
          backgroundColor: [
            'rgba(0, 0, 0, 0.3)',
            'rgba(230, 0, 0, 0.4)',
            'rgba(0, 255, 0, 0.4)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(230, 44, 44, 1)',
            'rgba(0, 107, 0, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 2
        }]
      },
      /*options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }*/
    });
    this.estado = true;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadisticaEncuestaPage');
  }
}
