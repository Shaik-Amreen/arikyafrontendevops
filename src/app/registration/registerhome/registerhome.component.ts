import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';

@Component({
  selector: 'app-registerhome',
  templateUrl: './registerhome.component.html',
  styleUrls: ['./registerhome.component.css']
})
export class RegisterhomeComponent implements OnInit {
  data: any; realplacement: any = ''; realcompanyname: any = ''
  registered = 'no'; wait: any = false
  constructor(private http: HttpClient, private commonservice: CommonService, private router: Router) {
    // console.log('heloooooooooooooooooooo')
    this.commonservice.postrequest('http://localhost:4000/company/findcompanytoregister', { organisation_id: sessionStorage.getItem("organisation_id"), placementcyclename: sessionStorage.getItem("placementcyclename"), companycode: sessionStorage.getItem('companyname') }).subscribe(
      (res: any) => {

        this.realplacement = res.companydetails.placementcyclename;
        this.realcompanyname = res.companydetails.companyname
        // console.log(this.realplacement, this.realcompanyname)

        this.commonservice.postrequest('http://localhost:4000/placementstatus/checkregistered', { organisation_id: sessionStorage.getItem("organisation_id"), placementcyclename: this.realplacement, companyname: this.realcompanyname, mail: sessionStorage.getItem('mail') }).subscribe(
          (rese: any) => {
            // console.log(rese.message, "llllllllllllllllllll")
            res.companydetails.deadline = new Date(res.companydetails.deadline); this.data = res.companydetails;
            this.wait = true
            if (new Date(res.companydetails.deadline) < new Date()) { this.registered = 'deadline' }
            else if (rese.message == 'success') { this.registered = 'yes' }
          },
          (err: any) => console.log(err)

        );
      },
      (err: any) => console.log(err)
    );

  }


  register() {
    if (new Date(this.data.deadline) >= new Date()) {
      this.commonservice.postrequest('http://localhost:4000/placementstatus/updateregisteredcompany', { organisation_id: sessionStorage.getItem("organisation_id"), placementcyclename: this.realplacement, companyname: this.realcompanyname, mail: sessionStorage.getItem('mail') }).subscribe(
        (res: any) => {
          if (res.message == 'success') { this.registered = 'yes'; sessionStorage.clear(); }
        },
        (err: any) => console.log(err)
      );
    }
    else {
      window.location.reload()
    }
  }

  ngOnInit(): void {
  }

}
