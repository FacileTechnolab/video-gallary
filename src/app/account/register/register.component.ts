import { Component } from '@angular/core';
//constants
import { RegularExpr } from '../../constants/app.constants';
//Validators
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//services
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private regExp: RegularExpr, private loaderService: LoaderService) {
    this.registerForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(100), Validators.pattern(this.regExp.namePattern), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(100), Validators.pattern(this.regExp.namePattern), Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.regExp.emailRegx)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });
  }

  registerUser() {
    this.loaderService.startLoading();
    this.loaderService.completeLoading();
    console.log(this.registerForm.value);
  }

}
