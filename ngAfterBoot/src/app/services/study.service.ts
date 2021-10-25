import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Study } from 'src/app/models/study';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  private baseUrl = 'http://localhost:8087/';
  private url = environment.baseUrl + 'api/studies';




  constructor(
 private http: HttpClient,
 private datePipe: DatePipe,
  ) { }

  index():  Observable<Study[]>{
    return this.http.get<Study[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('StudyService.index(): Error retrieving Study list');
      })
    );
  }

  show(studyId: number): Observable<Study> {
    return this.http.get<Study>(this.url + '/' + studyId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('StudyService.show(): error retrieving Study show');
      })
    );
  }

  create(study: Study): Observable<Study> {
    console.log('adding study');
    return this.http.post<Study>(this.url, study).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('StudyService.create(): Error creating study');
      })
    );
  }

  update(study: Study){
    return this.http.put<Study>(`${this.url}/${study.id}`, study).pipe(
      catchError((err: any)=>{
        console.log(err);
        return throwError('TodoService.update(): Error updating Todo');
      })
      );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('StudyService.delete(): error deleting study with id' + id);
      })
    );
  }
}
