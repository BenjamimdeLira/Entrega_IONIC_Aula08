import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TabsPage } from '../tabs/tabs';
import { ContactPage } from '../contact/contact';
import { FilmePage } from '../filme/filme';

/**
 *
 * Nome: Benjamim de Lira Siqueira Melo RA:816112054
 */

@IonicPage()
@Component({
  selector: 'page-crud',
  templateUrl: 'crud.html',
  
})
export class CrudPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrudPage');
  }

  goToTabsFilme (){
    this.navCtrl.push(FilmePage);
  }

}