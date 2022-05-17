import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainingreports',
  templateUrl: './trainingreports.component.html',
  styleUrls: ['./trainingreports.component.css']
})
export class TrainingreportsComponent implements OnInit {
  navdata: any = [
    { label: 'OVERALL REPORTS', rlink: '/admin/reports/training/overallreport' },
    { label: 'CODING REPORTS', rlink: '/admin/reports/training/codingreport' },
    { label: 'QUIZ REPORTS', rlink: '/admin/reports/training/quizreport' }]
  constructor() { }

  ngOnInit(): void {
  }

}
