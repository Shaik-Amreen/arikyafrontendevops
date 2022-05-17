import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-trainingreports',
  templateUrl: './faculty-trainingreports.component.html',
  styleUrls: ['./faculty-trainingreports.component.css']
})
export class FacultyTrainingreportsComponent implements OnInit {
  navdata: any = [
    { label: 'OVERALL REPORTS', rlink: '/faculty/reports/training/overallreport' },
    { label: 'CODING REPORTS', rlink: '/faculty/reports/training/codingreport' },
    { label: 'QUIZ REPORTS', rlink: '/faculty/reports/training/quizreport' }]
  constructor() { }

  ngOnInit(): void {
  }

}
