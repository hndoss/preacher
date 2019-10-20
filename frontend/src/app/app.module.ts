import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SpeechListComponent } from './components/speech-list/speech-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    SpeechListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
