import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../../../services/member-service.service';
import { Member } from '../../../models/member';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'members-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  title = "My Members"
  subtitle = "General list"
  properties = [
    { "name": "Firstname", "value": "first_name" },
    { "name": "Lastname", "value": "last_name" }
  ]
  members: Member[];

  constructor(
    private memberService: MemberServiceService,
    private router: Router
    ) 
  { }

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

  private showDetailsOfMember(entity) {
    console.log("Updating " + entity + " and triggering modal ");
    this.router.navigate([`${this.router.url}/${entity.id}`]);
  }

}