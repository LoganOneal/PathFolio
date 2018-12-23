import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MbtiProvider } from '../../providers/mbti/mbti';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  step = 1;
  responseMap: any;
  mathCount = 0;
  designCount = 0;
  codeCount = 0;
  cyberCount = 0;
  artCount = 0;
  results = [];

  constructor(public navCtrl: NavController,
              public mbtiProvider: MbtiProvider) {
    this.responseMap = this.mbtiProvider.responseMap;

  }

  resetQuiz() {
    this.step = 1;
    this.mathCount = 0;
    this.designCount = 0;
    this.codeCount = 0;
    this.cyberCount = 0;
    this.artCount = 0;
    this.results = [];
  }

  buttonPressed(i, type) {
    console.log("button " + i + "pressed")
    console.log(Object.keys(this.responseMap).length)
    console.log(this.step);

    if (this.responseMap[this.step].type == "Math") {
      this.mathCount += this.mathCount + i;
    }
    if (this.responseMap[this.step].type == "Design") {
      this.designCount += i;
    }
    if (this.responseMap[this.step].type == "Coding") {
      this.codeCount += i;
    }
    if (this.responseMap[this.step].type == "Cybersecurity") {
      this.cyberCount += i;
    }
    if (this.responseMap[this.step].type == "Art") {
      this.artCount += i;
    }

    if (this.step < Object.keys(this.responseMap).length) {
      this.step++
    } else {
      this.results = [this.mathCount, this.designCount, this.codeCount, this.cyberCount, this.artCount]
      console.log("quiz finished, you are " + this.results);
      console.log(this.results)
        }

  }
  
};