import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'core-entity-preview-list',
  templateUrl: './entity-preview-list.component.html',
  styleUrls: ['./entity-preview-list.component.css']
})

export class EntityListPreviewComponent implements OnInit {
  @Input() entities: any[];
  @Input() properties: any[];
  @Input() title: string;
  @Input() subtitle: string;

  @Output() callForUpdate = new EventEmitter();
  
  constructor() { 
    if(!this.title)
      this.title="Generic List"
  }
  
  ngOnInit() { }

  private clickOnEntity(entity: any){
    this.callForUpdate.emit(entity)
  }

}
