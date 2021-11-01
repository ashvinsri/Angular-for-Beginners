import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'SimpleCRM';
  success_msg=true;
  category="tshirt"
   
   user_list=[
     {
       name:"Ashvin",
       class:10,
       address:"LKO"
     },
     {
      name:"Supreet",
      class:11,
      address:"BHR"
     },
     {
      name:"Madhav",
      class:1,
      address:"GD"
     },
     {
      name:"Murgi",
      class:9,
      address:"BHR"
    }
   ]
   bgcolor="red";
   txtcolor="white";
   bookName="Ramayana"
   pages=400;
   about={'writer':'Balmiki Ji','cost':315};
   getClass():string{
     return "c3";
   }
   say ="hi"
   sayHello()
   {
      this.say="Hello";
   }

  constructor() { }

  ngOnInit(): void {
  }

}
