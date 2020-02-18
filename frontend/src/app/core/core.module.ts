import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListPreviewComponent } from './components/entity-preview-list/entity-preview-list.component';
import { EntityDetailsComponent } from './components/entity-details/entity-details.component';

@NgModule({
  declarations: [
    EntityListPreviewComponent, 
    EntityDetailsComponent,
  ],
  exports: [
    EntityListPreviewComponent, 
    EntityDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
