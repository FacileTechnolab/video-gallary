import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//routing
import { RouterModule } from '@angular/router';
//slim loader
//services
import { LoaderService } from './services/loader.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [LoaderService]
})
export class SharedModule { }
