import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Rest } from '../../providers/rest';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: string[];
  errorMessage: string;

  constructor(
    public navCtrl: NavController, 
    public rest: Rest, 
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController
  ) {

  }

  presentModal(data) {
    let modal = this.modalCtrl.create(AboutPage, data);
    modal.present();
  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    let loader = this.loadingCtrl.create({
      content: "Iltimos kuting...",
      duration: 30000
    });
    loader.present();

    this.rest.getCountries().subscribe(countries => {
      this.countries = countries;
      loader.dismiss();
    }, error => {
      this.errorMessage = <any>error
    });
  }

}
