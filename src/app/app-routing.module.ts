import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AddContactComponent } from 'src/contacts/add-contact/add-contact.component';
import { EditContactComponent } from 'src/contacts/edit-contact/edit-contact.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
const routes:Routes=[
  {
    path:'contacts',
    children:[
      {
      path:'add-contact', component: AddContactComponent
      }
    ]

  },
  {
    path:'add-new-contact',
    redirectTo:'contacts/add-contact'
  },
  {
    path:'edit-contacts/:contactId/token/:tokenId',
    component:EditContactComponent
  },
  {
    path:'clients',
    component:ClientsComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  {path:'home', component:HomeComponent},
  {
    path:'**',
    component:PagenotfoundComponent
  },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
