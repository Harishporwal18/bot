import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from  '../../providers/data/data';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

    diets: any = 0;
	id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public data : DataProvider) {
	  //this.diets = this.data.getByID(this.navParams.get('id'));
	  //console.log(this.diets);
	  if(!this.data.getByID(this.navParams.get('id')))
		  console.log('not reading');
	  else
		 this.diets = this.data.getByID(this.navParams.get('id'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
