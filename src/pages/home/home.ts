import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PyEPage } from '../py-e/py-e';
import { CsPage } from '../cs/cs';
import { ComPage } from '../com/com';
import { RoboPage } from '../robo/robo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia=HistoriaPage;
  dibujo=DibujoPage;
  pye=PyEPage;
  CS=CsPage;
  COM=ComPage;
  Robo=RoboPage;

  constructor(public navCtrl: NavController) {

  }
  clickHistoria(){
    this.navCtrl.push(this.historia);
  }
  clickDibujo(){
    this.navCtrl.push(this.dibujo);
  }
  clickPyE(){
    this.navCtrl.push(this.pye);
  }
  clickCs(){
    this.navCtrl.push(this.CS)
  }
  clickCom(){
    this.navCtrl.push(this.COM)
  }
  clickRob(){
    this.navCtrl.push(this.Robo)
  }

}
