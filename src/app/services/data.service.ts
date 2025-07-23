import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSermons(): Observable<any> {
    return this.http.get('assets/data/sermons.json').pipe(
      timeout(5000),
      catchError(error => {
        console.error('Error loading sermons:', error);
        return of([]);
      })
    );
  }

  getEvents(): Observable<any> {
    return this.http.get('assets/data/events.json').pipe(
      timeout(5000),
      catchError(error => {
        console.error('Error loading events:', error);
        return of([]);
      })
    );
  }
}