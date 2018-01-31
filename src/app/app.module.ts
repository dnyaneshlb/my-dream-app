import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatCheckboxModule,
         MatTabsModule,
         MatProgressSpinnerModule,
         MatSnackBarModule,
         MatSlideToggleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LearnComponent } from './learn/learn.component';
import { FormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { MyfilterPipe } from './myfilter.pipe';
import { Test3Component } from './test3/test3.component';
import { BackColorDirective } from './directives/back-color.directive';

const appRoutes : Routes = [
  {
    path : "invalid",
    component : PagenotfoundComponent
  },
  {
    path : "test1/:personName",
    component : Test1Component
  },
  {
    path : "test2",
    component : Test2Component
  },
  {
    path : "test3",
    component : Test3Component
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    LearnComponent,
    PagenotfoundComponent,
    Test1Component,
    Test2Component,
    MyfilterPipe,
    Test3Component,
    BackColorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    RouterModule.forRoot( appRoutes ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
