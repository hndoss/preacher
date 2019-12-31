import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { SpeechListComponent } from './components/speech-list/speech-list.component';
import { SpeechDetailsComponent } from './components/speech-details/speech-details.component';

const routes: Routes = [
  { 
    path: '', 
    component: SpeechListComponent
  }
];

@NgModule({
  declarations: [
    SpeechListComponent,
    SpeechDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule
  ]
})
export class SpeechesModule { }