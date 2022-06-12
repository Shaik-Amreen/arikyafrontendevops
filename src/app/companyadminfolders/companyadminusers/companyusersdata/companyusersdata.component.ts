
import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-companyusersdata',
  templateUrl: './companyusersdata.component.html',
  styleUrls: ['./companyusersdata.component.css']
})
export class CompanyusersdataComponent implements OnInit {

  facdata: any[] = []; mail: any = sessionStorage.getItem('mail')
  userSignUpForm: FormGroup; edit = false;
  selectedMode = false; selectedUser: any = { mail: '', designation: '', role: '', placementcyclename: '' }
  nodata = false
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    this.commonservice.postrequest('http://localhost:4000/facultydetails/finddata', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => { this.facdata = res; this.nodata = true },
      (err: any) => console.log(err)
    );
    // console.log(this.mail)

  }



  ngOnInit(): void {

  }

  save() {
    this.commonservice.postrequest('http://localhost:4000/updateuser', this.userSignUpForm.value).subscribe(
      (res: any) => { alert('SUCCESSFULLY SAVED'); window.location.reload() },
      (err: any) => console.log(err)
    );

  }

  deleteuser() {
    this.userSignUpForm.value.status = 'no'
    this.commonservice.postrequest('http://localhost:4000/updateuser', this.userSignUpForm.value).subscribe(
      (res: any) => { alert('sucessfully deleted'); window.location.reload() },
      (err: any) => console.log(err)
    )
  }





  adduserenable() {
    this.router.navigate(['/arikya/users/createusers'])
  }
  selectUser(i: number) {
    this.edit = false
    this.selectedUser = this.facdata[i];
    this.userSignUpForm = new FormGroup({
      'organisation_id': new FormControl(sessionStorage.getItem('organisation_id')),
      'mail': new FormControl(this.selectedUser.mail, Validators.required),
      'designation': new FormControl(this.selectedUser.designation, Validators.required),
      'role': new FormControl(this.selectedUser.role, Validators.required),
      'firstname': new FormControl(this.selectedUser.firstname, Validators.required),
      'middlename': new FormControl(this.selectedUser.middlename, Validators.required),
      'lastname': new FormControl(this.selectedUser.lastname, Validators.required),
      'status': new FormControl('yes')
    })

    this.selectedMode = true
  }
}
