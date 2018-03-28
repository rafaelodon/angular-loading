import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/do';

import { LoadingService } from './loading.service';

@Injectable()
export class HttpService {

    constructor( private loadingService: LoadingService, private http: Http ) { }

    get(url: string): Observable<Response> {        
        return this.watch(this.http.get(url));
    }  
    
    //fazer também o post, put, delete ...

    private watch(response: Observable<Response>): Observable<Response> {
         
        this.loadingService.showLoading();

        return response.do(
            next => {
                this.loadingService.hideLoading();
            }, 
            error => {   
                //faça aqui seu tratamento de erro
                this.loadingService.hideLoading();
            }            
        );
    }
}
