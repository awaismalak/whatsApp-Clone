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
import { NewChatComponent } from './new-chat/new-chat.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContantComponent,
    ConversationComponent,
    SearchsmsComponent,
    NewChatComponent,
    ContactInfoComponent,
    UserChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
