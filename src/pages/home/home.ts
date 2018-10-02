import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PyEPage } from '../py-e/py-e';
import { CsPage } from '../cs/cs';
import { ComPage } from '../com/com';
import { RoboPage } from '../robo/robo';
import { PappsPage } from '../papps/papps';

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
  PAPPS=PappsPage;

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
  clickROB(){
    this.navCtrl.push(this.Robo)
  }
  clickpapps(){
    this.navCtrl.push(this.PAPPS)
  }

}
