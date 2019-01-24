import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//switched the rootpage to home page so you cant see tabs, to change this just switch rootpage = TabPage
//import { HomePage } from '../pages/home/home';
import { PathPage } from '../pages/path/path';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LandingPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();  
    });
  }
}
