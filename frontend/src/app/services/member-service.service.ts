import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Member } from '../models/member';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService {
  private apiUrl = "http://localhost:8000/api/v1/members/preachers";

  constructor(private http: HttpClient) { }


  public getMembers(): Observable<Member[]> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        map(res => {
          let members: Member[] = [];
          res.forEach(object => {
            let member = new Member(object.id, object.first_name, object.last_name, object.phone_number, object.sex);
            members.push(member)
          });
          return members;
        })
      );
  }


// Function #1 for get a Member
  public getOneMember(id: string) {
    return this.getMembers().pipe(
      map((members: Member[]) => members.find(member => member.id === id))
    );
  }

// Searcher by id member
  public getMemberInfo(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


// Function #2 for get a Member
  public getMember(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`)
      .pipe(
        map(res => {

          let member = new Member(res.member.id, res.member.first_name, res.member.last_name,
            res.member.phone_number, res.member.sex);

          return member;
        })
      );
  }


}
