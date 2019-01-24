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

  
  classes = [
    {
      title: 'Digital Arts & Design 1',
      description: 'This core course provides an overview of the graphics andmedia industries. This course is focused on introducing visual, conceptual, technical and design skills used in the creation of computer graphics, motion graphics, film and video, and animation.',
      alt: 'Intro to Animation and Simulation',
    },
    {
      title: 'Digital Arts & Design 2',
      description: 'This course focuses on visual, conceptual, and technical design skills used in the digital publishing of computer graphics, motion graphics, film and video, and animation. Emphasis will be placed on finding collaborative design solutions to design problems along with the study of the conceptualization of a message and the process it must go through to accurately and effectively reach its audience. The student will explore various applications of design through extensive study of design principles, visual elements, digital color issues, typography, style, composition, and various problem solving skills.',
      alt: 'Intro to Animation and Simulation',
    },
    {
      title: 'Digital Arts & Design 3',
      description: 'In this course students develop understanding of digital design principles and application of the “Integrated Design Process” as a means of strategic communication. Students will develop skills to interface the creative process, technologies and business objectives to communicate with targeted audiences. Students will develop problem solving skills and creative thinking (analytical and intuitive) related to digital design and an array of original designs for print and online applications that leverage technologies and software applications such as...Adobe Creative Suite, Macromedia’s Dream- weaver, Flash and Fireworks to achieve effective communications.',
      alt: 'Intro to Animation and Simulation 3',
    }
  ];

  ionViewDidLoad() {
    console.log('received: ' + this.final);
  }

              
}

