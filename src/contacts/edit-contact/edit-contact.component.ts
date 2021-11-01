import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contactId:any;
  tokenId:any;


  constructor(private activatedRoute:ActivatedRoute) {
    this .activatedRoute.params.subscribe((params)=>{
      this.contactId=params.contactId;
      this.tokenId=params.tokenId;
    }); 

  }

  ngOnInit(): void {
  }

}
