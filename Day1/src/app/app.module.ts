import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PopupComponent} from './popup/popup.component';
 


@NgModule(
  { 
    
   imports:[BrowserModule,FormsModule],
   
   declarations:[AppComponent,PopupComponent],
   bootstrap:[AppComponent] 
  })

export class AppModule{}