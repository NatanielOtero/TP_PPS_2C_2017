import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,ViewController } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  tuto : boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public viewCtrl: ViewController) {
  }

  MostrarTutorial(myEvent) {
    let popover = this.popoverCtrl.create(TutorialPage,{"imagenes":["../../assets/imgs/home.png"]},{cssClass: 'contact-popover-Menu'});
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
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

}
