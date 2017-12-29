import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vieww',
  templateUrl: './vieww.component.html',
  styleUrls: ['./vieww.component.css']
})
export class ViewwComponent implements OnInit {
  private title: string;
  private  text: string;
  constructor() {
    this.title = 'El mejor projecto de Angular del Mundo';
    this.text = 'Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and ' +
      'server-side rendering.\n' +
      '\n' +
      'Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, ' +
      'Immutable.js or another push-model.\n' +
      '\n';
  }

  ngOnInit() {
  }

}
