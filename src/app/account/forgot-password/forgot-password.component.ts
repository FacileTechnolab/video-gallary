import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  user: any = { email: 'test@gmail.com' };
  constructor() { }

  forgotPassword() {
    console.log(this.user);
  }

}
