import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  url='http://api.openweathermap.org/data/2.5/weather?s&appid=';
  key='a437213272f8b5ad2261c8dca2eca058';


  constructor(private http: HttpClient) { }


  getClima(ciudad:string): Observable<any>{

    const URL = this.url + this.key + '&q=' + ciudad;
    return this.http.get(URL);

  }
}
