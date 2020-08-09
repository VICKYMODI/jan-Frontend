import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { LoginComponent } from './user/login/login.component';
import { PasswordComponent } from './user/password/password.component';
import { AfterLoginComponent } from './user/after-login/after-login.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditProfileComponent,
    LoginComponent,
    PasswordComponent,
    AfterLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
