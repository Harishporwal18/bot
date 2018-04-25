import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
//import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the WeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  location : {
	  city : any,
	  state :any
  };
  weather: any;
  forecast: any;
  constructor(public navCtrl: NavController,private weatherProvider: WeatherProvider,private geolocation : Geolocation ) {
	  
	    this.geolocation.getCurrentPosition().then((resp) => {
				 console.log(resp);
				}).catch((error) => {
				  console.log('Error getting location', error);
				});
  }
  
  ionViewWillEnter(){
	  
	 /* this.storage.get('location').then((val) => {
		  if(val != null)
		  {
			  this.location = JSON.parse(val);
			 
		  }
		  else
		  {
			  this.location = 
			  {
				  city :'Mumbai',
				  state : 'Maharashtra'
			  } 
		  }
		   
		  this.weatherProvider.getWeather(this.location.city,this.location.state)
		  .subscribe(weather => {
			  this.weather = weather.current_observation;
		  });
	  });*/
	  this.location = 
			  {
				  city :'Mumbai',
				  state : 'Maharashtra'
			  } 
	this.weatherProvider.getWeather(this.location.city,this.location.state)
		  .subscribe(weather => {
			  this.weather = weather.current_observation;
		  });
	  
  }

}
