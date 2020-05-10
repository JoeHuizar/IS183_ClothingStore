import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ToastModule } from './toast/toast.module';
import { LoginComponent } from './login/login.component';

import { AppRoutes } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SharedServiceModule } from '../shared-service/shared-service.module';
import { MenComponent } from './men/men.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { WomenComponent } from './women/women.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    HomeComponent,
    CartComponent,
    MenComponent,
    MainFooterComponent,
    AboutUsComponent,
    AdminComponent,
    WomenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastModule,
    AppRoutes,
    BrowserAnimationsModule,
    MaterialDesignModule,
    SharedServiceModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
