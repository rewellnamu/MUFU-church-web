import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSermons(): Observable<any> {
    return this.http.get('data/sermons.json');
  }

  getEvents(): Observable<any> {
    return this.http.get('data/events.json');
  }
}
