import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PyEPage } from '../py-e/py-e';
import { CsPage } from '../cs/cs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia=HistoriaPage;
  dibujo=DibujoPage;
  pye=PyEPage;
  CS=CsPage;

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

}
