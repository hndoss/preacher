import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Member } from '../models/member';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  private apiUrl =  "http://localhost:8000/api/v1/members/preachers";

  constructor(private http: HttpClient) { }

  public getMembers(): Observable<Member[]>{
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => {
          let members: Member[] = [];
          res.forEach(object => {
            let member = new Member(object.id, object.first_name, object.last_name, object.phone_number,object.sex);
            members.push(member)
          });
          return members;
        })
      );
  }
  public getMemberInfo(id: string){
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }  
  
  }

