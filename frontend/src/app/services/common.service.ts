import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, filter, catchError, skip } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private dataService: DataService) { }

  getAll(obj): void {
    this.dataService.api(obj).subscribe();
  }

  edit(obj): Observable<any> {
    return this.dataService.api(obj).pipe(
      tap(resp => {
        return resp;
      }));
  }

  add(obj): Observable<any> {
    return this.dataService.api(obj).pipe(
      tap(resp => {
        return resp;
      }));
  }

  delete(obj): Observable<any> {
    return this.dataService.api(obj).pipe(
      tap(resp => {
        return resp;
      }));
  }

}
