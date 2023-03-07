import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LognInComponent } from './logn-in/logn-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',component:LognInComponent},
  {path: 'logn_in', component:LognInComponent },
  {
    path:'home',component:HomeComponent
  },
  {path:'list',component:ListComponent},
  {path:'sign_out',component:SignOutComponent},
  {path:'sign_up',component:SignUpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
