import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateAgentComponent } from './user/create-agent/create-agent.component'
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { PasswordComponent } from './user/password/password.component';
import { AfterLoginComponent } from './user/after-login/after-login.component'


const routes: Routes = [
  {path : '', component: LoginComponent},
  
      {path: 'editProfile',component:EditProfileComponent},
      {path: 'signup',component:CreateAgentComponent},
      {path: 'updatePassword',component:PasswordComponent},
      {path : 'afterLogin', component: AfterLoginComponent}
      
    
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EditProfileComponent,CreateAgentComponent,PasswordComponent,AfterLoginComponent]
