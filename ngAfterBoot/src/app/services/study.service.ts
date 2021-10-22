import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Study } from 'src/app/models/study';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  private baseUrl = 'http://localhost:8087/';
  private url = this.baseUrl + 'api/studies';




  constructor(
 private http: HttpClient
  ) { }

  index():  Observable<Study[]>{
    return this.http.get<Study[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('StudyService.index(): Error retrieving Study list');
      })
    );
  }
}
