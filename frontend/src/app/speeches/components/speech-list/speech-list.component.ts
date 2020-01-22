import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Speech } from 'src/app/models/speech';

@Component({
  selector: 'speeches-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.css']
})
export class SpeechListComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  title = "Resume"
  subtitle = "Should be the date"
  // properties = [
  //   { "name": "Firstname", "value": "first_name" },
  //   { "name": "Lastname", "value": "last_name" }
  // ]
  // speeches: Speech[];

  constructor() { }

  ngOnInit() { }

}