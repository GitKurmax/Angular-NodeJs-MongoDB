import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, filter, catchError, skip } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  constructor(
    private http: HttpClient
  ) { }

  getAll(type): Observable<any> {
    return this.http.get(environment.apiUrl + type);
  }

  // edit(obj): Observable<any> {
  //   return this.dataService.api(obj).pipe(
  //     tap(resp => {
  //       return resp;
  //     }));
  // }

  add(type, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(environment.apiUrl + type, data, httpOptions);
  }

  delete(type, id): Observable<any> {
    console.log(typeof id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(environment.apiUrl + type, id, httpOptions);
  }

}
