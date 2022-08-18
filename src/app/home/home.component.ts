import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleMasterInfo = false;
  toggleTransactionInfo = false;
  togglePurchaseInfo = false;
  toggleSalesInfo = false;
  toggleReportsInfo = false;
  togglePurchaseReport = false;
  toggleSalesReport = false;
  togglePaymentReport = false;
  toggleProductReport = false;



  toggleMaster(){
    this.toggleMasterInfo = !this.toggleMasterInfo;
    this.toggleTransactionInfo = false;
    this.toggleReportsInfo = false;
  }
  toggleTransaction(){
    this.toggleTransactionInfo = !this.toggleTransactionInfo;
    this.toggleMasterInfo = false;
    this.toggleReportsInfo = false;
  }
  togglePurchase(){
    this.togglePurchaseInfo = !this.togglePurchaseInfo;
    this.toggleSalesInfo = false;
  }
  toggleSales(){
    this.toggleSalesInfo = !this.toggleSalesInfo;
    this.togglePurchaseInfo = false;
  }
  toggleReports(){
    this.toggleReportsInfo = !this.toggleReportsInfo;
    this.toggleMasterInfo = false;
    this.toggleTransactionInfo = false;
  }
  togglePurchaseReports(){
    this.togglePurchaseReport = !this.togglePurchaseReport;
    this.toggleSalesReport = false;
    this.togglePaymentReport = false;
    this.toggleProductReport = false;
  }
  toggleSalesReports(){
    this.toggleSalesReport = !this.toggleSalesReport;
    this.togglePurchaseReport = false;
    this.togglePaymentReport = false;
    this.toggleProductReport = false;
  }
  togglePaymentReports(){
    this.togglePaymentReport = !this.togglePaymentReport;
    this.togglePurchaseReport = false;
    this.toggleSalesReport = false;
    this.toggleProductReport = false;
  }
  toggleProductReports(){
    this.toggleProductReport = !this.toggleProductReport;
    this.togglePurchaseReport = false;
    this.toggleSalesReport = false;
    this.togglePaymentReport = false;
  }
}
