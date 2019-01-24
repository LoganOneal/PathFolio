import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// ratings go from r1(the worst) to r5(the best)
@Injectable()
export class ClassProvider {

  responseMap = {
    "1": {
      c1: {
        title: "Digital Arts & Design 1",
        desc: "sdfdsfdsfdsfdsfsd"
      },
      c2: {
        title: "Digital Arts & Design 2",
        desc: "sdfdsfdsdsfdsfdsffdsfdsfsd"
      }
    },
    "2": {
      c1: {
        title: "Danother",
        desc: "sdfdsfdsfdsfdsfsd"
      },
      c2: {
        title: "Digital dsfsd & Design 1",
        desc: "sdfdsfdsfdsfdsfsd"
      }
    },
  }

  constructor(public http: Http) {
    console.log('Hello MbtiProvider Provider');
  }

}
