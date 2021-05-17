import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployComponent } from './employ/employ.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { EmployReactiveComponent } from './employ-reactive/employ-reactive.component';
import { MenuComponent } from './menu/menu.component';
import {HttpModule} from '@angular/http';
import { CustomerComponent } from './customer/customer.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';

const appRoutes : Routes = [
  {path:'',component:MenuComponent,
  children : [
    {path:'login',component:LoginComponent,outlet:'data'},
    {path:'loginreactive',component:LoginReactiveComponent,outlet:'data'},
    {path:'employ',component:EmployComponent,outlet:'data'},
    {path:'employreactive',component:EmployReactiveComponent,outlet:'data'},
    {path:'customer',component:CustomerComponent,outlet:'data'},
    {path:'foodmenu',component:FoodMenuComponent,outlet:'data'},
  ]
}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployComponent,
    LoginReactiveComponent,
    EmployReactiveComponent,
    MenuComponent,
    CustomerComponent,
    FoodMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
