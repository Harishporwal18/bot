import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import * as $ from "jquery";


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
	messages :any =[];
	message:any=[];
	username ="";
  helpButton:any=[];
_chatSubscription;
helpB:any=[];

 stage = 1;
lang :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
	  this.lang = this.navParams.get('lang');
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this. receiveMessage();
  };


//**********************************************************


 sendMessage(){
//if(this.message==""){ this.message = ''; }



	  this.messages.push({
			msg: this.message,owner: 'user', username:""

	});

this.sendData(this.message,'','','', this.stage,this.lang);
	  
	this.message = '';
	this.username = '';


 }




 sendData(_a,_b,_c,_r,_s,_l) /// for sending data to database
  {

  	

//////////////////////////////////////////////////////////////////
$("#loader").show();
	  let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "q":_a, "b":_b, "r":_r,"l":_l,"s":_s  },
          url       : any      	= "http://hrsenterprises.in/kisan-api/webservice.php";

          //http://localhost/php/kisan/ionic/php/webservice.php

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         
        // this.sendNotification(`Congratulations the technology: ${name} was successfully added`);

$("#loader").hide();
        this.messages.push({
					msg:data.ans,owner: 'Bot',username:"-", stage : data.stage
				});

			this.stage = data.stage;
			if(data.button1 !=""){

    this.helpButton.push(data.button1);

}


 // scrolling upside//
       var  boxHeight = $("#chatMessages").height();
        $("#wrapper").animate({ scrollTop:boxHeight }, 1000); 

			console.log("enter successfully");

      },
      (error : any) =>
      {
        // this.sendNotification('Something went wrong!');
        console.log("error");
      });

  }

  /////////////////////////////////////////////////////////////////

  receiveMessage():void
  {


	  this.http
      .get('http://localhost/php/kisan/ionic/response.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         

		this.messages.push({
			msg:  data.email,owner: 'user'
						});

         
      },
      (error : any) =>
      {
         console.dir(error);
      });
  }

 

}
