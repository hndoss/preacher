import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../../services/member-service.service';
import { Member } from '../../models/member'

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  name: any = "hola";

  constructor(private memberService: MemberServiceService) { }

  ngOnInit() {
    this.getMembers();
  }

  private getMembers() {
    this.members = [];
    this.memberService.getMembers()
      .subscribe((members: Member[]) => {
        this.members = members;
    });
  }

}