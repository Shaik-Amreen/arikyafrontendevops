import { HttpClient } from '@angular/common/http'; import { CommonService } from '../services/common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  token: string; placementcyclename: string; companyname: string; organisation_id: string
  displayplacement: any = ''; displaycompanyname: any = '';


  constructor(private http: HttpClient, route: ActivatedRoute, private router: Router, private commonservice: CommonService) {
    this.token = route.snapshot.params.id;
    this.placementcyclename = route.snapshot.params.placementcyclename; this.companyname = route.snapshot.params.companyname
    this.organisation_id = route.snapshot.params.organisation_id
    sessionStorage.setItem('organisation_id', this.organisation_id)
    this.commonservice.postrequest('http://localhost:4000/placementstatus/checktoken', { organisation_id: this.organisation_id, token: this.token, placementcyclename: this.placementcyclename, companyname: this.companyname }).subscribe(
      (res: any) => {
        // console.log(res)
        this.displaycompanyname = res.companyname; this.displayplacement = res.placementcyclename
        if (res.message == 'invalid') {
          this.router.navigate(['/login'])
        }
      },
      (err: any) => console.log(err)
    )
  }

  ngOnInit(): void {
  }

}
