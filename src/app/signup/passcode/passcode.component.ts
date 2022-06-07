import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.component.html',
  styleUrls: ['./passcode.component.css']
})
export class PasscodeComponent implements OnInit {
  passcode: any = ''; errmsg = ''
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
  }

  save() {
    this.commonservice.postrequest('http://localhost:4000/data/findcollegeaccess', { passcode: this.passcode }).subscribe(
      (res: any) => {

        if (res.message == 'error') {
          this.errmsg = res.errormsg
        }
        else {
          sessionStorage.setItem('code', this.passcode)
          sessionStorage.setItem('role', res.data.role);
          sessionStorage.setItem('organisation_id', res.data.organisation_id)
          sessionStorage.setItem('mail', res.data.mail)
          if (res.message == 'companyadmin' || res.message == 'employee') {

          }
          else {
            this.router.navigate(['/signup/verifiedsignup']);
          }
        }
      },
      (err: any) => console.log(err)
    )
  }


  ngOnInit(): void {
  }

}
