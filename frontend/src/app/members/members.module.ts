import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MembersListComponent } from './components/members-list/members-list.component';
import {MembersDetailsComponent} from './components/members-details/members-details.component';

const routes: Routes = [
  { 
    path: '', 
    component: MembersListComponent,
    children: [
      {
        path: 'members/:id',
        component: MembersDetailsComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    MembersListComponent,
    MembersDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule
  ]
})
export class MembersModule { }