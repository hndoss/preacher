import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MembersListComponent } from './components/members-list/members-list.component';

const routes: Routes = [
  { 
    path: '', 
    component: MembersListComponent
  }
];

@NgModule({
  declarations: [
    MembersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule
  ]
})
export class MembersModule { }