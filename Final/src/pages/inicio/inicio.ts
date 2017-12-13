import { RegistroPage } from '../registro/registro';
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
tuto : boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  tutorial()
  {
    if(this.tuto==true)
    {
      this.tuto = false;
    }
    else
    {
      this.tuto = true;
    }
  } 
  login()
  {
    this.navCtrl.push(LoginPage);
  }
  regis()
  {
    this.navCtrl.push(RegistroPage);
  }
}
