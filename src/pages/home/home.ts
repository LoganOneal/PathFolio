import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MbtiProvider } from '../../providers/mbti/mbti';

import { PathPage } from '../../pages/path/path';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  done = false;
  step = 1;
  responseMap: any;
  mathCount = 0;
  designCount = 0;
  codeCount = 0;
  cyberCount = 0;
  artCount = 0;
  webCount = 0;
  final = '';
  results = [];

  constructor(public navCtrl: NavController,
              public mbtiProvider: MbtiProvider) {
    this.responseMap = this.mbtiProvider.responseMap;
  }
  
  goTo() {
    this.navCtrl.push(PathPage, {
      data: this.final
    });
  }

// this is not used but here just in case
  resetQuiz() {
    this.step = 1;
    this.mathCount = 0;
    this.designCount = 0;
    this.codeCount = 0;
    this.cyberCount = 0;
    this.artCount = 0;
    this.webCount = 0;
    this.results = [];
  }
  findIndexOfGreatest(array) {
    var greatest;
    var indexOfGreatest;
    for (var i = 0; i < array.length; i++) {
      if (!greatest || array[i] > greatest) {
        greatest = array[i];
        indexOfGreatest = i;
      }
    }
    return indexOfGreatest;
  }


  buttonPressed(i) {
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
    if (this.responseMap[this.step].type == "Web") {
      this.artCount += i;
    }

    if (this.step < Object.keys(this.responseMap).length) {
      this.step++
    } else {
      // Order Matters: Math, Design, Coding, Cybersecurity, Art, Web Design...
      this.results = [this.mathCount, this.designCount, this.codeCount, this.cyberCount, this.artCount, this.webCount]
      
      // login to find which category won
      if (this.findIndexOfGreatest(this.results) == 0) {
         this.final = 'math';
      }
      if (this.findIndexOfGreatest(this.results) == 1) {
        this.final = 'design';
     }
     if (this.findIndexOfGreatest(this.results) == 2) {
      this.final = 'coding';
    }
   if (this.findIndexOfGreatest(this.results) == 3) {
    this.final = 'cyber';
    }
    if (this.findIndexOfGreatest(this.results) == 4) {
      this.final = 'art';
    }
    if (this.findIndexOfGreatest(this.results) == 5) {
      this.final = 'web';
    }

      console.log("quiz finished, you are " + this.results);
      console.log(this.results);
      console.log(this.final);
      //go to page with the found path
      this.done = true;
          }
  }
  
};