import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LognInComponent } from './logn-in/logn-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestComponent } from './test/test.component';
import { AuthGuard } from './Services/auth.guard';
const routes: Routes = [
  {path:'',component:LognInComponent},
  {path: 'logn_in', component:LognInComponent },
  {
    path:'home',component:HomeComponent,canActivate: [AuthGuard] 
  },
  {path:'list',component:ListComponent,canActivate: [AuthGuard] },
  {path:'sign_out',component:SignOutComponent,canActivate: [AuthGuard] },
  {path:'sign_up',component:SignUpComponent},
  {path:'test',component:TestComponent,canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
