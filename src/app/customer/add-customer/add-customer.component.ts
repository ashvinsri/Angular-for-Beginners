import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  email:string="";
  password:string="abc"

  constructor() { }

  ngOnInit(): void {
  }

  addCustomer(customerForm:NgForm)
  {
    console.log(customerForm.form.value);
  }

}
