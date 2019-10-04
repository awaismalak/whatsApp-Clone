import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ConversationComponent } from '../app/conversation/conversation.component'
import { from } from 'rxjs';


const routes: Routes = [
  // {path:"conversation", component:ConversationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
