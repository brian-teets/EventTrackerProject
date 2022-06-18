import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // this is the non-prod / dev environment
import { Water } from '../models/water';

@Injectable({
  providedIn: 'root'
})
export class WaterService {

  private url = environment.baseUrl + 'api/water';

  constructor(private http: HttpClient) { }

  index(): Observable<Water[]> {
    return this.http.get<Water[]>(this.url).pipe();
  }



}
