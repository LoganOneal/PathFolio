import { Component } from '@angular/core';

/**
 * Generated class for the AltClassComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'alt-class',
  templateUrl: 'alt-class.html'
})
export class AltClassComponent {

  text: string;

  constructor() {
    console.log('Hello AltClassComponent Component');
    this.text = 'Hello World';
  }

}
