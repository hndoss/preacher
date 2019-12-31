import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../../../services/member-service.service';
import { Member } from '../../../models/member'

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})
export class MembersDetailsComponent implements OnInit {

  memberInfo = {};

  constructor(private memberService: MemberServiceService) { }

  ngOnInit() {

   
  }

  private getMemberInfo(id: string){
    this.memberService.getMemberInfo(id).subscribe(
      res=>{
        console.log(res);
        this.memberInfo = res;
      }
    );
  }

  submitId(id : HTMLInputElement){
    this.getMemberInfo(id.value);
    return false;
  }
}



