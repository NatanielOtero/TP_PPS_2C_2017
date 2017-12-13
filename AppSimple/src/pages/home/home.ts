import { MenuPage } from '../menu/menu';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tuto : boolean = true;
  email : any;
  pw : any;

  constructor(public navCtrl: NavController,) {

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
   this.navCtrl.setRoot(MenuPage);
  }
}


