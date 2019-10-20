import { Component, OnInit } from '@angular/core';
import { SpeechServiceService } from '../../services/speech-service.service';
import { Speech } from '../../models/speech'

@Component({
  selector: 'app-speech-list',
  templateUrl: './speech-list.component.html',
  styleUrls: ['./speech-list.component.css']
})
export class SpeechListComponent implements OnInit {
  speeches: Speech[];
  

  constructor(private speechService: SpeechServiceService) { }

  ngOnInit() {
    this.getSpeeches();
  }

  private getSpeeches() {
    this.speeches = [];
    this.speechService.getSpeeches()
      .subscribe((speeches: Speech[]) => {
        this.speeches = speeches;
    });
  }

}