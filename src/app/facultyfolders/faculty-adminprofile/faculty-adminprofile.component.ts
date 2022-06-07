

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-faculty-adminprofile',
  templateUrl: './faculty-adminprofile.component.html',
  styleUrls: ['./faculty-adminprofile.component.css']
})
export class FacultyAdminprofileComponent implements OnInit {

  usereditform: FormGroup; temp: any

  data: any;
  profile: FormGroup;
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    if (sessionStorage.getItem("adminedit") == "true") {
      this.switchedit()
      sessionStorage.removeItem("adminedit")
    }
    else {
      this.edit = false
    }
    this.usereditform = new FormGroup({
      firstname: new FormControl("", Validators.required),
      middlename: new FormControl(""),
      lastname: new FormControl("", Validators.required),
      contact: new FormControl("", Validators.required),
      designation: new FormControl("", Validators.required),
    });
    this.profile = new FormGroup({
      profilepic: new FormControl(""),
    });
    this.commonservice.postrequest('http://localhost:4000/facultydetails/findoneAdmin',
      { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
        (res: any) => {
          // console.log("admindata", res.admindata);
          this.data = res.admindata;
          this.data.profilepic == '' || this.data.profilepic == null ? this.data.profilepic = "../.././assets/user.png" : null;
          this.image = this.data.profilepic
          // console.log("this.images:", this.image)
          // console.log(this.data)

          //editadmin
          this.temp = res.admindata;
          // console.log("this.temp", this.temp)
          this.usereditform.controls.firstname.setValue(this.temp.firstname);
          this.usereditform.controls.middlename.setValue(this.temp.middlename);
          this.usereditform.controls.lastname.setValue(this.temp.lastname);
          this.usereditform.controls.contact.setValue(this.temp.contact);
          this.usereditform.controls.designation.setValue(this.temp.designation);
        },
        (err: any) => console.log(err)
      );

  }
  image1(arg0: string, image: any) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

  image = "../.././assets/user.png";

  handleFileSelect(evt: any) {
    var reader = new FileReader;
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload = (event: any) => {
      this.image = event.target.result;
      this.data.profilepic = this.image;
      // console.log(this.data.profilepic, this.data.value)
      this.commonservice.postrequest('http://localhost:4000/facultydetails/updateAdmin',
        this.data.value).subscribe(
          (res: any) => {
            // console.log("resimg", res)
          })
    }
    evt.target.value = "";
  }

  savestatus: any = "SAVE"
  save() {


    this.usereditform.value.mail = sessionStorage.getItem('mail');
    // console.log(this.usereditform.value)
    this.commonservice.postrequest('http://localhost:4000/facultydetails/updateAdmin', this.usereditform.value).subscribe(
      (res: any) => {
        if (res.msg == "success") {
          alert('SUCCESSFULLY UPDATED');
          sessionStorage.removeItem("adminedit")
          this.router.navigate(['/faculty/adminprofile'])
          this.edit = false
          // console.log('details changed succesfully')
          this.savestatus = "success"
        }
        else {
          this.savestatus = "error"
        }
      },
      (err: any) => console.log(err)
    )

  }

  close() {
    this.edit = false
    sessionStorage.removeItem("adminedit")
  }

  edit: any = false
  switchedit() {
    this.savestatus = "SAVE"
    this.edit = true
  }
}
