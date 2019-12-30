import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityDetailsComponent } from './components/entity-details/entity-details.component';

@NgModule({
  declarations: [
    EntityListComponent, 
    EntityDetailsComponent
  ],
  exports: [
    EntityListComponent, 
    EntityDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
