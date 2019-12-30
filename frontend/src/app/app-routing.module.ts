import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'members', 
    loadChildren: './members/members.module#MembersModule'
  },
  {
    path: 'speeches',
    loadChildren: './speeches/speeches.module#SpeechesModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }