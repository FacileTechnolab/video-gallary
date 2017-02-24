import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
//account module routes
import { AccountRoutingModule } from './account.routes';
//material
import { MaterialModule } from '@angular/material';
//constants
import { RegularExpr } from '../constants/app.constants';
import { AppIconComponent } from '../components/app-icon/app-icon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, AppIconComponent],
  providers: [RegularExpr]
})
export class AccountModule { }
