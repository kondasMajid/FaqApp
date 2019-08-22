import { Component } from '@angular/core';
// import {Customer} from './components/Customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// tslint:disable-next-line: no-inferrable-types
name: string = 'John Doe';
showName: boolean = true;
value:number = 45;
  constructor() {}


}
