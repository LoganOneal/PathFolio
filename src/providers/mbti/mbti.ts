import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// ratings go from r1(the worst) to r5(the best)
@Injectable()
export class MbtiProvider {

  responseMap = {
    "1": {
      number: "1",
      type: "Math",
      q: "How would you rate your mathmatic abilties?",
      r1: "Terrible",
      r2: "Bad",
      r3: "Okay",
      r4: "Good",
      r5: "Excellent"
    },
    "2": {
      number: "2",
      type: "Design",
      q: "Question About Design:",
      r1: "1",
      r2: "2",
      r3: "3",
      r4: "4",
      r5: "5"
    },
    "3": {
      number: "3",
      type: "Coding",
      q: "Question About Coding Abilities:",
      r1: "1",
      r2: "2",
      r3: "3",
      r4: "4",
      r5: "5"
    },
    "4": {
      number: "4",
      type: "Cybersecurity",
      q: "Question About Networking/Cybersecurity",
      r1: "1",
      r2: "2",
      r3: "3",
      r4: "4",
      r5: "5"
    },
    "5": {
      number: "5",
      type: "Art",
      q: "Question About Art Abilities / enjoyment of art",
      r1: "1",
      r2: "2",
      r3: "3",
      r4: "4",
      r5: "5"
    }
  }

  constructor(public http: Http) {
    console.log('Hello MbtiProvider Provider');
  }

}
