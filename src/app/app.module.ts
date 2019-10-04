import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContantComponent } from './contant/contant.component';
import { ConversationComponent } from './conversation/conversation.component';
import { SearchsmsComponent } from './searchsms/searchsms.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContantComponent,
    ConversationComponent,
    SearchsmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
