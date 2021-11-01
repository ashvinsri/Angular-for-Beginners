import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddContactComponent } from 'src/contacts/add-contact/add-contact.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SearchComponent,
    PagenotfoundComponent,
    AddContactComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
