import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ClassProvider } from '../../providers/classes/classes';
@Component({
  selector: 'page-path',
  templateUrl: 'path.html'
})
export class PathPage {
  final: string;

  responseMap: any;
  constructor(public navCtrl: NavController, public classProvider: ClassProvider, public navParams: NavParams) {
    this.responseMap = this.classProvider.responseMap;
    this.final = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('received: ' + this.final);
  }

              
}

