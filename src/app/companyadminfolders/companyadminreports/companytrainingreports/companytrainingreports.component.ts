import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companytrainingreports',
  templateUrl: './companytrainingreports.component.html',
  styleUrls: ['./companytrainingreports.component.css']
})
export class CompanytrainingreportsComponent implements OnInit {

  navdata: any = [
    { label: 'OVERALL REPORTS', rlink: '/admin/reports/training/overallreport' },
    { label: 'CODING REPORTS', rlink: '/admin/reports/training/codingreport' },
    { label: 'QUIZ REPORTS', rlink: '/admin/reports/training/quizreport' }]
  constructor() { }

  ngOnInit(): void {
  }

}
