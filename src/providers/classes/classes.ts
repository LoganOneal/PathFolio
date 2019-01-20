import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// ratings go from r1(the worst) to r5(the best)
@Injectable()
export class ClassProvider {

  responseMap = {
    "Design": {
      c1: {
        title: "Digital Arts & Design 1",
        desc: "sdfdsfdsfdsfdsfsd"
      },
      c2: {
        title: "Digital Arts & Design 2",
        desc: "sdfdsfdsdsfdsfdsffdsfdsfsd"
      }
    },
    "Coding": {
      c1: {
        title: "Digital Arts & Design 1",
        desc: "sdfdsfdsfdsfdsfsd"
      },
      c2: {
        title: "Digital Arts & Design 1",
        desc: "sdfdsfdsfdsfdsfsd"
      }
    },
  }

  constructor(public http: Http) {
    console.log('Hello MbtiProvider Provider');
  }

}
