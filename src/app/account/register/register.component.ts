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
  errorMessageForFirstName() {
    if (this.registerForm.controls['firstName'].hasError('required')) {
      return 'First name is required'
    }
    else if (this.registerForm.controls['firstName'].hasError('maxlength')) {
      return 'First name is too long'
    }
    else if (this.registerForm.controls['firstName'].hasError('pattern')) {
      return 'Please enter valid first name'
    }
  }
  errorMessageForLastName() {
    if (this.registerForm.controls['lastName'].hasError('required')) {
      return 'Last name is required'
    }
    else if (this.registerForm.controls['lastName'].hasError('maxlength')) {
      return 'Last name is too long'
    }
    else if (this.registerForm.controls['lastName'].hasError('pattern')) {
      return 'Please enter valid last name'
    }
  }

  errorMessageForEmail() {
    if (this.registerForm.controls['email'].hasError('required')) {
      return 'Email is required'
    }
    else if (this.registerForm.controls['email'].hasError('pattern')) {
      return 'Please enter valid email'
    }
  }

  errorMessageForPassword() {
    if (this.registerForm.controls['password'].hasError('required')) {
      return 'password is required';
    }
    else if (this.registerForm.controls['password'].hasError('minlength')) {
      return 'Password must be 6 characters long';
    }
  }
  errorMessageForConfirmPassword() {
    if (this.registerForm.controls['confirmPassword'].hasError('required')) {
      return 'Confirm password is required';
    }
    if (this.registerForm.controls['password'].valid && this.registerForm.controls['password'].value !== this.registerForm.controls['confirmPassword'].value) {
      return 'Password and confirm password do not match';
    }
  }

}
