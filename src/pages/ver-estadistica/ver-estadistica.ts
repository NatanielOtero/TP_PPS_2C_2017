import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the VerEstadisticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-estadistica',
  templateUrl: 'ver-estadistica.html',
})
export class VerEstadisticaPage {
  estado = false;
  check = false;
  Encuesta: any[] = new Array<any>();
  pregunta: string = "";
  listEncuesta: any[] = new Array<any>();
  ListaRespuestas: Array<any> = [];
  tipo = "";
  pieChartLabels: Array<string> = [];
  pieChartData: Array<number> = [];
  pieChartType: string = 'pie';
  pieChartColor: Array<any> = [];
  encuesta : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.encuesta =  this.navParams.get('encuesta');
    console.log(this.encuesta);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerEstadisticaPage');
  }
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  /*ObtenerCantidades() {
    //this.results.subscribe(
      rest => {
        for (let i = 0; i < rest.length; i++) {
          if (rest[i].cuestionario == this.codigo) {
            if (!this.check) {
              for (let y = 0; y < this.ListaRespuestas.length; y++) {
                if (this.ListaRespuestas[y].results == rest[i].respuestas[0].results) {
                  this.ListaRespuestas[y].cantidad++;
                }
              }
            }
            else {
              if (rest[i].respuestas[0].results == true) {
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
            break;
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
          }
        }
        this.mostrar();
      }
    );
  }*/
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

}
