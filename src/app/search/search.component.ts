import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  id=0;
  pass="default"
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.id=params.id;
      this.pass=params.pass;
    });
   }

  ngOnInit(): void {
  }

}
