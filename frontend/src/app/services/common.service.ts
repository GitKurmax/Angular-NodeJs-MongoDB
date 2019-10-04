import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, filter, catchError, skip, map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private _users = new BehaviorSubject([]);
  public users= this._users.asObservable();

  private _action = new BehaviorSubject('');
  public action = this._action.asObservable();


  constructor(
    private http: HttpClient
  ) { }

  getAll(type){
    this.http.get(environment.apiUrl + type)
      .subscribe(response => {
        const endData = [];
        for (let key in response) {
          endData.push(response[key]);
        }
        this._users.next(endData);
      });
  }

  edit(type, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.http.put(environment.apiUrl + type, data, httpOptions)
      .subscribe(data => {
        this._action.next('edit');
      });
  }

  add(type, data): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(environment.apiUrl + type, data, httpOptions);
  }

  delete(type, id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.http.post(environment.apiUrl + type, {id: id}, httpOptions)
      .subscribe(data => {
        this._action.next('delete');
      });;
  }

  cancelAction() {
    this._action.next('');
  }
}
