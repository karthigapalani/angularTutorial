import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
 
  items = ["Array", "directive", "data", "value"];

  //ngif
  display:boolean = false;
  constructor() { }

  ondisplay()
  {
    this.display = !this.display
  }
  ngOnInit(): void {
  }
 
 
}
