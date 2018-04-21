import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Databaseservice } from "../../providers/databaseservice/databaseservice";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
	
	  messages :any =[];
	  message :any =[];
	  mobileno :any;
	  stage:any = 1;
	  
_chatSubscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
	 /* this.http.get('http://hrsenterprises.in/kisan/api.php?step=1&lang=en').subscribe(data => {
		this.welcome = data.json();
		console.log(data.json());
	});*/
   this.botqueries();
    
  
  }
  
   sendMessage()
  {
	  this.messages.push({
	msg : this.message,
	owner:'user'
		});
	
	if(this.stage == 2)
	{
		/*let headers 	: any		= new HttpHeaders();
	  headers = headers.set('Content-Type', 'application/json; charset=utf-8');
         let  options 	: any		= { "q":this.message};
       let    url       : any      	= "http://hrsenterprises.in/kisan/api.php";

      this.http.post(url, JSON.stringify(options),headers).subscribe((data) =>
      {
        console.log(data);
		this.messages.push({
			msg:data,
			owner: 'Bot'
		});
        console.log("enter successfully");
      },
      (error) =>
      {
        // this.sendNotification('Something went wrong!');
        console.log("error");
      });
	  */
	  this.http.post("http://hrsenterprises.in/kisan/api.php", "q="+this.message).subscribe(data => {
			console.log(data);
		}, error => {
			console.log(error);
		});
	}
	this.message = '';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  botqueries()
  {
	  if(this.stage == 1)
	  {
		this.http.get('http://hrsenterprises.in/kisan/api.php?step=1&lang=en').map(res => res.json()).subscribe(data => {
		this.messages.push({
		msg : data,
		owner:'bot'
			});
		});
	  
		this.stage = 2;
	}	
  }	
 }

