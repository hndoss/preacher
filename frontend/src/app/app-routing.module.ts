import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './components/member-list/member-list.component';
import { SpeechListComponent } from './components/speech-list/speech-list.component';
import { MembersComponent } from './components/members/members.component';

const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'speeches', component: SpeechListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }