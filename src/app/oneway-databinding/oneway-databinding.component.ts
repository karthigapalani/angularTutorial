import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-databinding',
  templateUrl: './oneway-databinding.component.html',
  styleUrls: ['./oneway-databinding.component.css']
})
export class OnewayDatabindingComponent implements OnInit {
//Interpolation
Interpolation= 'String Interpolation';
//Property Binding
title="Property Binding"
  //Example Property Binding
  isDisabled= true;

   //Event Binding
   clickCount=0
   clickMe() {
     this.clickCount++;
   }
   //Event Binding
   
   
   
   //hiding info
   interpolation:boolean = false;
   PropertyBinding:boolean = false;
   //onclick toggling both
   oninterpolation()
   {
     this.interpolation = !this.interpolation
   }
   onPropertyBinding()
   {
    this.PropertyBinding=!this.PropertyBinding
   }
  constructor() { }

  ngOnInit(): void {
  }
 
}
