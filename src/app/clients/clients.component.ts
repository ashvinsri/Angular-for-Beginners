import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  
  clientList=[
    {id:10,name:"Ashvin",age:30},
    {id:11,name:"Supreet",age:31},
    {id:12,name:"Visu",age:32},
    {id:13,name:"Vasu",age:33},
    {id:14,name:"Rajan",age:34}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
