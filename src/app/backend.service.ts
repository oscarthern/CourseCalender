import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CourseCalender } from './course-calender';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private HttpClient: HttpClient) { }
  
  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

  private getKursListURL: string ='http://localhost:8080/restClient-1.0-SNAPSHOT/api/resource/events/';
  private postKursKalenderURL: string ='http://localhost:8080/restClient-1.0-SNAPSHOT/api/resource/toCanvas';
  private getSearchDataURL: string ='http://localhost:8080/restClient-1.0-SNAPSHOT/api/resource/searchData';

   handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      console.error('An error occurred:', error.error.message);
    } else {

      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError(
      'Something bad happened; please try again later.');
  };

  getSearchData(): Observable<any> {
    const url = `${this.getSearchDataURL}`;
    return this.HttpClient.get(url);
  }

  getKursList(signatur: string): Observable <CourseCalender> {
    return this.HttpClient
    .get<CourseCalender>(this.getKursListURL+signatur)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  postCanvasKalender(item: any): Observable <CourseCalender> {
    return this.HttpClient
    .post<CourseCalender>(this.postKursKalenderURL, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
}
