import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../../../services/member-service.service';
import { Member } from '../../../models/member'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'members-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})
export class MembersDetailsComponent implements OnInit {

  private member: any;
  memberInfo = {};
  

  constructor(
    private memberService: MemberServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) {  }

  ngOnInit() {

   /* this.member = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.memberService.getMember(params.get('id')))
    );*/

    this.route.params.subscribe(params => {
      let id = params.id;
      this.getMember(id);
    })


  }

  private getMember(id: string){
    this.member = {};
    this.memberService.getMember(id)
      .subscribe(
        (member: Member)=>{
          this.member = Member;
          console.log("Getting member");
        }
      )
  }


 /* private getMemberInfo(id: string) {
    this.memberService.getMemberInfo(id).subscribe(
      res => {
        console.log(res);
        this.memberInfo = res;
      }
    );
  }

  submitId(id: HTMLInputElement) {
    this.getMemberInfo(id.value);
    return false;
  }*/
}



