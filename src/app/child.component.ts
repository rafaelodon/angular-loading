import { HttpService } from './http.service';
import { LoadingService } from './loading.service';
import { Component } from '@angular/core';

@Component({
  selector: 'child-component',
  template: `
    <button (click)="onClick()">Perform a slow request...</button>
    <p>{{message}}</p>
  `  
})
export class ChildComponent {
  
  message:String = "";

  constructor( private httpService: HttpService ){}

  onClick(){
    this.message = "";
    this.httpService.get("http://www.fakeresponse.com/api/?sleep=1").subscribe(
      next => this.message = "Done!"
    );
  }
}
