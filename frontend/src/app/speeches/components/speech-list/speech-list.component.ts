import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Speech } from 'src/app/models/speech';

@Component({
  selector: 'speeches-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.css']
})
export class SpeechListComponent implements OnInit {
  calendarOptions: any;
  title = "Resume"
  subtitle = "Should be the date"
  // speeches: Speech[];

  constructor() { }

  ngOnInit() { 

    this.calendarOptions = {
      customButtons: {
        print: {
          text: 'Print',
        click: () => this.print()
        }
      },
      header: {
        left: 'prev, next, today, ',
        center: 'title',
        right: 'print'
      },
      plugins: [
        dayGridPlugin, 
        interactionPlugin
      ]
    }

  }

  handleDateClick(arg) {
    console.log("clicked on a day.")
  }

  print(){
    console.log("clicked on a custom button.")
  }

}