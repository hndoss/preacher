import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SpeechListComponent } from './components/speech-list/speech-list.component';
import { MembersDetailsComponent } from './components/members-details/members-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { MembersComponent } from './components/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    SpeechListComponent,
    MembersDetailsComponent,
    FooterComponent,
    HeaderComponent,
    MembersComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
