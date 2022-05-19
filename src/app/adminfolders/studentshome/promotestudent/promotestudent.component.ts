import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
@Component({
  selector: 'app-promotestudent',
  templateUrl: './promotestudent.component.html',
  styleUrls: ['./promotestudent.component.css']
})
export class PromotestudentComponent implements OnInit {

  constructor(private http: HttpClient, private commonservice: CommonService) { this.promote = 0 }
  course = ''; currentyear = 0; present = 0; promote = 0; display = false
  ngOnInit(): void {
  }

  promotestudents() {
    this.commonservice.postrequest('http://localhost:4000/Studentdata/updatestudentyear', { organisation_id: sessionStorage.getItem("organisation_id"), course: this.course, currentyear: this.currentyear, present: this.present }).subscribe(
      (res: any) => { this.promote = 2; this.display = true; setTimeout(() => { this.display = false }, 5000) },
      (err: any) => console.log(err)
    );
  }
}
