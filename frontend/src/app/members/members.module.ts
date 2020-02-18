import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { MembersListComponent } from './components/members-list/members-list.component';
import {MembersDetailsComponent} from './components/members-details/members-details.component';
import { MembersComponentComponent } from './components/members-component/members-component.component';

const routes: Routes = [
  { 
    path: '', 
    component: MembersComponentComponent,
    children: [
      {
        path: '', 
      component: MembersListComponent,
      },
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
    MembersDetailsComponent,
    MembersComponentComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class MembersModule { }