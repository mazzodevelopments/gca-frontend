import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./components/signup/signup.component";
import {SignoutComponent} from "./components/signout/signout.component";
import {SigninComponent} from "./components/signin/signin.component";

const routes: Routes = [
  {path: 'signout', component: SignoutComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
