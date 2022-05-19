import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-allcompanieshome',
  templateUrl: './faculty-allcompanieshome.component.html',
  styleUrls: ['./faculty-allcompanieshome.component.css']
})
export class FacultyAllcompanieshomeComponent implements OnInit {

  data: any = [0]; presentcycle: any = "add"; placementdata: any = []
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    this.commonservice.postrequest('http://localhost:4000/company/findallcompany', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        if (res.length != 0) { this.data = res; this.data.reverse(); } else { this.data = [] }
        this.commonservice.postrequest('http://localhost:4000/Placement/findPlacement', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
          (resp: any) => { this.placementdata = resp; this.placementdata.reverse(); },
          (errp: any) => console.log(errp)
        );
      },
      (err: any) => console.log(err)
    );
  }
  ngOnInit(): void { }
  comdetails(c: any) {
    sessionStorage.setItem("placementcyclename", c.placementcyclename)
    sessionStorage.setItem('companyname', c.companyname);
    this.router.navigate(["/faculty/placements/companydetails"])
  }

  gotocom() {
    if (this.presentcycle != "add") {
      sessionStorage.setItem("placementcyclename", this.presentcycle)
      this.router.navigate(["/faculty/placements/addeditcompany"])

    }
  }

}
