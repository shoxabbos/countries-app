import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public data: any;

  constructor(
    public navCtrl: NavController, 
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.data = params.data;
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
