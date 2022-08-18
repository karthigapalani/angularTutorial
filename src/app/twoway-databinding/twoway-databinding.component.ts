import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-twoway-databinding',
  templateUrl: './twoway-databinding.component.html',
  styleUrls: ['./twoway-databinding.component.css']
})
export class TwowayDatabindingComponent implements OnInit {
  value="20";
 
  constructor() { }

  ngOnInit(): void {
  }
 
}
