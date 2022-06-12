import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-signpasscode',
  templateUrl: './signpasscode.component.html',
  styleUrls: ['./signpasscode.component.css']
})
export class SignpasscodeComponent implements OnInit {
  formvalue = false; temp: boolean = false; temp1: boolean = false;
  vepa1: any = false; vepa2: any = false
  studentsignup: any[] = [
    {
      tags: 'combine', 'cname': 'col-sm-4', 'fields': [
        { "value": '', "label": "First Name", "formname": "firstname", "valid": true, "tags": "input", "type": "text", "placeholder": "Enter first name", "patternerror": "Enter valid name", validations: [Validators.required, Validators.pattern("^[a-zA-Z ]+$"), Validators.maxLength(20)] },
        { "value": '', "label": "Middle Name", "formname": "middlename", "tags": "input", "type": "text", "placeholder": "Enter middle name" },
        { "value": '', "label": "Last Name", "formname": "lastname", "valid": true, "tags": "input", "type": "text", "placeholder": "Enter lastname", "patternerror": "last name must alphabetical", validations: [Validators.required, Validators.pattern("^[a-zA-Z ]+$"), Validators.maxLength(20)] }]
    },
    { "label": "organisation_id", "formname": "organisation_id", "type": "none", "value": sessionStorage.getItem('organisation_id') },
    { "value": sessionStorage.getItem("mail"), "label": "Email address", "formname": "mail", "valid": true, "tags": "input", "type": "email", "placeholder": "Enter Email", "icon": "bx bxs-envelope", "patternerror": "invalid mail", validations: [Validators.required, Validators.pattern("^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$")] },
    {
      tags: 'combineselect', cname: 'col-sm-4', fields: [
        {
          "value": '', "label": "Course", "formname": "course", "valid": true, validations: [Validators.required],
          "tags": "select", "options": [{ "label": "B.tech", "value": "btech" }, { "label": "MBA", "value": "mba" }, { "label": "MCA", "value": "mca" }]
        },

        {
          "label": "Department", "formname": "department", "valid": true, validations: [Validators.required], "tags": "select", "value": '',
          "options":
          {
            "btech": [{ "label": "CSE", "value": "cse" }, { "label": "ECE", "value": "ece" }, { "label": "EEE", "value": "eee" }, { "label": "CE", "value": "civil" }, { "label": "ME", "value": "mech" }, { "label": "CST", "value": "cst" }]
            ,
            "mba": [{ "label": "MBA", "value": "mba" }],
            "mca": [{ "label": "MCA", "value": "mca" }]
          }
        },
        {
          "label": "Present Year", "formname": "currentyear", "valid": true, validations: [Validators.required], "tags": "select", "value": '',
          "options":

          {
            "btech": [{ "label": "I", "value": "1" }, { "label": "II", "value": "2" },


            { "label": "III", "value": "3" }, { "label": "IV", "value": "4" }],

            "mba": [{ "label": "I", "value": "1" }, { "label": "II", "value": "2" }],

            "mca": [{ "label": "I", "value": "1" }, { "label": "II", "value": "2" }]
          }
        },
      ]
    },
    // (?=.*[a-zA-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]{6, 20}
    {
      tags: 'combine', 'cname': 'col-sm-6', "fields": [
        {
          "value": '', "label": "Password", "formname": "password", "tags": "input", "type": "password", "valid": true, "patternerror": "it must include atleast one special character, one alphabet and one numeric values ", "placeholder": "Password", "icon": "bx bxs-lock-alt", "icon1": "bx bxs-hide", "icon2": "bx bxs-show",
          validations: [Validators.required, Validators.minLength(6), Validators.pattern("(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]*")]
        },
        { "value": '', "label": "Confirm Password", "formname": "confirmpassword", "tags": "input", "type": "password", "valid": true, "patternerror": "Password and Confirm Password should be same", "placeholder": "Confirm password", "icon": "bx bxs-lock-alt", "icon1": "bx bxs-hide", "icon2": "bx bxs-show", validations: [Validators.required] },
      ]
    },
    { "label": "Role", "formname": "role", "type": "none", "value": "student" },
    { "label": "Code", "formname": "code", "type": "none", "value": sessionStorage.getItem('code') },
  ]

  //mail---->^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$
  // ^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,20}$
  // ^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$
  // 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
  // has at least a number, and at least a special character
  // it must contain at least a numeric digit, a uppercase letter, a lowercase letter, a special character and length must be 6 to 20 characters


  adminsignup: any[] = [
    {
      tags: 'combine', 'cname': 'col-sm-4', 'fields': [
        { "value": '', "label": "First Name", "formname": "firstname", "valid": true, "tags": "input", "type": "text", "placeholder": "Enter first name", "patternerror": "first name must alphabetical", validations: [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3), Validators.maxLength(20)] },
        { "value": '', "label": "Middle Name", "formname": "middlename", "tags": "input", "type": "text", "placeholder": "Enter middle name" },
        { "value": '', "label": "Last Name", "formname": "lastname", "valid": true, "tags": "input", "type": "text", "placeholder": "Enter lastname", "patternerror": "last name must alphabetical", validations: [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(3), Validators.maxLength(20)] },]
    },
    { "label": "organisation_id", "formname": "organisation_id", "type": "none", "value": sessionStorage.getItem('organisation_id') },
    {
      tags: 'combine', 'cname': 'col-sm-6', 'fields': [
        { "value": sessionStorage.getItem("mail"), "label": "Email address", "formname": "mail", "valid": true, "tags": "input", "type": "email", "placeholder": "Enter your mail", "icon": "bx bxs-envelope", "patternerror": "invalid mail", validations: [Validators.required, Validators.pattern("^[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-]?[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,3})+$")] },
        { "value": '', "label": "Contact", "formname": "contact", "valid": true, "tags": "input", "type": "number", "placeholder": "Enter  mobile number", "icon": "bx bxs-user-pin", "patternerror": "Invalid phonenumber", validations: [Validators.required, Validators.pattern("^[6789]+[0-9]{9}$"), Validators.maxLength(10), Validators.minLength(4)] },
      ]
    },
    { "value": '', "label": "Designation", "formname": "designation", "valid": true, "tags": "input", "type": "text", "placeholder": "Enter designation", validations: [Validators.required] },
    {
      tags: 'combine', 'cname': 'col-sm-6', "fields": [
        { "value": '', "label": "Password", "formname": "password", "tags": "input", "type": "password", "valid": true, "placeholder": "Password", "icon": "bx bxs-lock-alt", "patternerror": "it must include atleast one special character, one alphabet and one numeric values ", "icon1": "bx bxs-hide", "icon2": "bx bxs-show", validations: [Validators.required, Validators.minLength(6), Validators.pattern("(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]*")] },
        { "value": '', "label": "Confirm Password", "formname": "confirmpassword", "tags": "input", "type": "password", "valid": true, "placeholder": "Confirm password", "icon": "bx bxs-lock-alt", "patternerror": "Password and Confirm Password should be same", "icon1": "bx bxs-hide", "icon2": "bx bxs-show", validations: [Validators.required] }]
    },
    { "label": "Role", "formname": "role", "type": "none", "value": sessionStorage.getItem('role') },
    { "label": "Status", "formname": "status", "type": "none", "value": "yes" },
    { "label": "Code", "formname": "code", "type": "none", "value": sessionStorage.getItem('code') },
  ]

  modedata: any = []; btechMode = true; userExists = false; errmsg = ''
  user: any = false
  signUpForm: FormGroup
  btech = ['cse', 'ece', 'eee', 'mech', 'civil', 'cst']; role: any = sessionStorage.getItem('role')
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    // console.log(this.role);
    if (this.role == 'admin' || this.role == 'faculty' || this.role == 'technicaltrainer') { this.modedata = this.adminsignup }
    else if (this.role == 'student') { this.modedata = this.studentsignup }
    else { this.modedata = ['company'] }
    // console.log(this.modedata)
    let form: any = {}
    this.modedata.forEach((e: any) => {
      if (e.tags == "combine" || e.tags == "combineselect") {
        e.fields.forEach((i: any) => {
          (i.valid) ? (form[i.formname] = new FormControl(i.value, i.validations)) :
            form[i.formname] = new FormControl(i.value);
        });
      }

      else {
        (e.valid) ? form[e.formname] = new FormControl(e.value, e.validations) :
          form[e.formname] = new FormControl(e.value);
      }
    });
    this.signUpForm = new FormGroup(form)
  }


  onChange(e: string) {
    (e == "btech") ? this.btechMode = true : this.btechMode = false;
  }

  signIn() {
    // console.log(this.signUpForm.controls["password"].value, "---->", this.signUpForm.controls["confirmpassword"].value, "<---", this.signUpForm.controls["password"].value != this.signUpForm.controls["confirmpassword"].value)
    if (this.signUpForm.controls["password"].value != this.signUpForm.controls["confirmpassword"].value) {
      // console.log('this.signUpForm.controls["confirmpassword"].', this.signUpForm.controls["confirmpassword"].errors)
      // this.signUpForm.controls["confirmpassword"].setErrors([{ mustMatch: true },{required:true}])
      this.signUpForm.controls["confirmpassword"].setErrors({ mustMatch: true })
      // console.log("hello")
    }
    // else{
    //   this.signUpForm.controls["confirmpassword"].setErrors({ mustMatch: false })
    // }
    this.formvalue = true;
    // console.log(this.signUpForm)
    if (this.signUpForm.status == 'INVALID') {
      const firstElementWithError = document.querySelector('.ng-invalid');
      if (firstElementWithError) {
        firstElementWithError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      this.user = true;
      // console.log("signin work")
    }
    else {
      // console.log("signup work")
      this.commonservice.postrequest('http://localhost:4000/createusers', this.signUpForm.value).subscribe(
        (res: any) => {
          // console.log(res);
          if (res.message == 'success') {
            sessionStorage.setItem('mail', res.user);
            sessionStorage.setItem('token', res.token)
            if (this.role == 'admin' || this.role == 'technicaltrainer') { this.router.navigate(['/admin']) }
            else if (this.role == 'student') { this.router.navigate(['/studentform']) }
            else if (this.role == 'faculty') { this.router.navigate(['/faculty']) }
          }
          else {
            this.userExists = true;
            this.errmsg = res.message
          }
        },
        (err: any) => console.log(err)
      );
    }
  }

  ngOnInit() {

  }

}
