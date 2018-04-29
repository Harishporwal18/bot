import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { TabsPage } from '../pages/tabs/tabs';
import { WeatherPage } from '../pages/weather/weather';
import { DetailPage } from '../pages/detail/detail';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { WeatherProvider } from '../providers/weather/weather';
import { Geolocation } from '@ionic-native/geolocation';
import { DataProvider } from '../providers/data/data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
	TabsPage,
	WeatherPage,
	DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule, HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
	TabsPage,
	WeatherPage,
	DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WeatherProvider,
	Geolocation,
    DataProvider
  ]
})
export class AppModule {}
