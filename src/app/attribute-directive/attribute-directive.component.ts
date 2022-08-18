import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
  cssStringVar: string= 'red size20';
  cssArray:string[]=['red','size20']; 
  isBlue= true;
  constructor() { }

  ngOnInit(): void {
  }

}
