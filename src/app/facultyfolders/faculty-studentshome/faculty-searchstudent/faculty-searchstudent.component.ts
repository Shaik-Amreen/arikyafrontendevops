import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-faculty-searchstudent',
  templateUrl: './faculty-searchstudent.component.html',
  styleUrls: ['./faculty-searchstudent.component.css']
})
export class FacultySearchstudentComponent implements OnInit {
  data: any; type = ""; len = '-1';
  constructor(private http: HttpClient, private commonservice: CommonService, private router: Router) {
  }

  organisation: any = ''
  ngOnInit(): void {

    this.commonservice.postrequest('http://localhost:4000/Studentdata/findcollegestudents', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        this.organisation = res.collegedata
        this.data = res.data; this.len = '0';
        //  console.log(res); 
        if (res.data.length !== 0) { this.len = '1' }
      },
      (err: any) => console.log(err)
    );
  }


  home(c: any) {
    this.router.navigate(['/faculty/studentprofile']);
    sessionStorage.setItem('studentmail', c.mail)

  }
  getdata() {
    let tempdata = this.data
    if (this.type != '') {
      tempdata = this.data.filter((c: any) => (c.rollnumber.toUpperCase().includes(this.type.toUpperCase()) && c.firstname != ''))
    }
    return tempdata
  }
}



