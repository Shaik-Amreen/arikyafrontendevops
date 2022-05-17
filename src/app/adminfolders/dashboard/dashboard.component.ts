import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  com: any = 'one';
  constructor(private router: Router) {
    this.com = 'one'
  }
  ngOnInit(): void {
  }
  ca() {
    (this.com == 'one') ? this.router.navigate(['/admin/dashboard']) : this.router.navigate(['/admin/dashboard/training'])
  }
}