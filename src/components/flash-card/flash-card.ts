import { Component, Input } from '@angular/core';

@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  flipped: boolean = false;
  @Input() inputObject: any;

  switch(){
  }
  constructor() {
    console.log(this.inputObject);
  }

  flip(){
    this.flipped = !this.flipped;
  }

}