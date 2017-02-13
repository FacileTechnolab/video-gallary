import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared/services/loader.service';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = { username: 'admin@gmail.com', password: 'admin@123' };
  constructor(private loaderService: LoaderService, private router: Router, private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) {
    //display social icons
    iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('assets/image/facebook.svg'));
    iconRegistry.addSvgIcon('google-plus', sanitizer.bypassSecurityTrustResourceUrl('assets/image/google-plus.svg'));
  }

  ngOnInit() {
  }

  doLogin() {
    this.loaderService.startLoading();
    this.loaderService.completeLoading();
    console.log(this.user);
    this.router.navigate(['/home']);
  }
}
