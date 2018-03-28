import { HttpModule } from '@angular/http';
import { LoadingService } from './loading.service';
import { HttpService } from './http.service';
import { ChildComponent } from './child.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [    
    HttpService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
