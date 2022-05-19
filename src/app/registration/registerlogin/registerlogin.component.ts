import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registerlogin',
  templateUrl: './registerlogin.component.html',
  styleUrls: ['./registerlogin.component.css']
})
export class RegisterloginComponent implements OnInit {

  signInForm: FormGroup; errorMode = false; errorMessage = ''
  token = ''; placementcyclename: ''; companyname = ''; organisation_id: any = ''; formvalue = false

  constructor(private router: Router, private http: HttpClient, route: ActivatedRoute, private commonservice: CommonService) {
    this.token = route.snapshot.params.id;
    this.organisation_id = route.snapshot.params.organisation_id
    this.placementcyclename = route.snapshot.params.placementcyclename; this.companyname = route.snapshot.params.companyname
    sessionStorage.removeItem('mail');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem("placementcyclename"); sessionStorage.removeItem('companyname')
    this.signInForm = new FormGroup({
      'mail': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)

    })
  }

  ngOnInit(): void {
  }


  signIn() {
    this.formvalue = true
    if (this.signInForm.status == "VALID") {
      this.signInForm.value.mail = this.signInForm.value.mail.toLowerCase()
      this.commonservice.postrequest('http://localhost:4000/findoneusers', this.signInForm.value).subscribe(
        (res: any) => {
          if (res.status == 'error') {
            this.errorMode = true;
            this.errorMessage = res.error
          }
          else {
            this.errorMode = false;
            sessionStorage.setItem('mail', this.signInForm.value.mail);
            sessionStorage.setItem('token', res.token);
            if (res.role == 'student') {
              sessionStorage.setItem("placementcyclename", this.placementcyclename); sessionStorage.setItem('companyname', this.companyname)
              this.router.navigate([`registration/${this.token}/${this.placementcyclename}/${this.companyname}/${this.organisation_id}/registrationhome`])
            }
            else {
              this.errorMode = true;
              this.errorMessage = 'INVALID MAIL'
            }
          }
        },
        (err: any) => console.log(err)
      );
    }
  }

}
