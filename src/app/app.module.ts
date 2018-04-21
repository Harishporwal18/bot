import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChatPage } from '../pages/chat/chat';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

/*var config = {
    apiKey: "AIzaSyAbFFCl02j4sntP94t6T1c_8BFKA199RMA",
    authDomain: "chatbot-71bfc.firebaseapp.com",
    databaseURL: "https://chatbot-71bfc.firebaseio.com",
    projectId: "chatbot-71bfc",
    storageBucket: "",
    messagingSenderId: "840642246335"
  };*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
	HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
