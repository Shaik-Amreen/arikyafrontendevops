import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {
  com: any = 'one';
  constructor(private router: Router) {
    this.com = 'one'
  }
  ngOnInit(): void {
  }
  ca() {
    (this.com == 'one') ? this.router.navigate(['/faculty/dashboard']) : this.router.navigate(['/faculty/dashboard/training'])
  }
}