import { LoadingService } from './loading.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="loading" [class.hidden]="!loading">Loading...</div>
    <div>
      <h1>Angular Loading Test</h1>

      <child-component></child-component>

      <footer>by Rafael Odon (rafaelodon.com)</footer>
    </div>
  `,
  styles: [`
    .hidden{
      display: none;
    }

    #loading {      
      position: fixed;                  
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;                           
      color: red;
      background-color: black;
      opacity: 0.5;
      font-size: 5em;      
      text-align: center;            
    }    
  `]
})
export class AppComponent {
  
  constructor( private loadingService: LoadingService ){}

  get loading(){
    return this.loadingService.isLoading();
  }
}
