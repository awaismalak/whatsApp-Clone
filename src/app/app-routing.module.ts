import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversationComponent } from '../app/conversation/conversation.component';
import{ContantComponent} from "../app/contant/contant.component";
// import { SearchsmsComponent } from '../app/searchsms/searchsms.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path:'',component:ContantComponent},
  {path:"conversation", component:ConversationComponent},
  {path:'conversation/:id', component: ConversationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
