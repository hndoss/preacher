import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Speech } from '../models/speech';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeechServiceService {
  private apiUrl =  "http://localhost:8000/api/v1/speeches/speech";

  constructor(private http: HttpClient) { }

  public getSpeeches(): Observable<Speech[]>{
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => {
          let speeches: Speech[] = [];
          res.forEach(object => {
            let speech = new Speech(object.id, object.title, object.preacher);
            speeches.push(speech)
          });
          return speeches;
        })
      );
  }

}