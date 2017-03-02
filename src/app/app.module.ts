import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
//root routing
import { AppRoutingModule } from './app.routes';
//angular 2 material
import { MaterialModule } from '@angular/material';
//components
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { NgProgressModule } from 'ng2-progressbar';
import { PageNotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule.forRoot(),
    NgProgressModule,
    SharedModule,
    AdminModule,
    AccountModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
