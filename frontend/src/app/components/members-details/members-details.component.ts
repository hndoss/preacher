import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from '../../services/member-service.service';
import { Member } from '../../models/member'

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})
export class MembersDetailsComponent implements OnInit {

  constructor(private memberService: MemberServiceService) { }

  ngOnInit() {
    
  }



}
