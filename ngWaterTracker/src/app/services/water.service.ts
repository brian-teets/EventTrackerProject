import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment'; // this is the non-prod / dev environment
import { Water } from '../models/water';

@Injectable({
  providedIn: 'root'
})
export class WaterService {

  private url = environment.baseUrl + 'api/water';

  constructor(private http: HttpClient) { }

  index(): Observable<Water[]> {
    return this.http.get<Water[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
            'WaterService.index(): error finding list of Water log entries: ' + err
          )
        );
      })
    );
  }

  // show function to display an individual todo by its id
  show(id: number): Observable<Water>{
    return this.http.get<Water>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
            'WaterService.show(): error finding Water log entry by Id: ' + err
          )
        );
      })
    );
  }

  create(water: Water): Observable<Water> {
    return this.http.post<Water>(this.url, water).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
            'TodoService.create(): error creating Todo: ' + err
          )
        );
      })
    );
  }

  destroy(id: number): Observable<void>{
    return this.http.delete<void>(this.url +'/'+ id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error(
            'WaterService.delete(): error deleting Water log entry: ' + err
          )
        );
      })
    );
  }


}
