import { MenuPage } from '../menu/menu';
import { Component } from '@angular/core';
import { NavController,  PopoverController,ViewController  } from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import { VideoPlayer } from '@ionic-native/video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tuto : boolean = true;
  email : any;
  pw : any;
 

  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController,public viewCtrl: ViewController,private videoPlayer: VideoPlayer) {

  }
  MostrarTutorial(myEvent) {
    let popover = this.popoverCtrl.create(TutorialPage,{"imagenes":["../../assets/imgs/log.png"]},{cssClass: 'contact-popover-Login'});
    popover.present({
      ev: myEvent
    });
  }
 
  login()
  {
   this.navCtrl.setRoot(MenuPage);
  }
}


