import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PathPage } from '../pages/path/path';
import { LandingPage } from '../pages/landing/landing';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';

import { MbtiProvider } from '../providers/mbti/mbti';
import { ClassProvider } from '../providers/classes/classes';

import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { FlashCardComponent } from '../components/flash-card/flash-card';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PathPage,
    ProgressBarComponent,
    FlashCardComponent,
    LandingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PathPage,
    LandingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MbtiProvider, ClassProvider
  ]
})

export class AppModule {}
  