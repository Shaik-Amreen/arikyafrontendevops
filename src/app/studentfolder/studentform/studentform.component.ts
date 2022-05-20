import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
  displaypopup = false; popup: any;
  studentdata: any = FormGroup; nodata: any = false
  studentformvalue = false;
  // studentform: any[] = [
  //   { "formname": "mail", "type": "none", "value": sessionStorage.getItem('mail') },
  //   {
  //     tags: 'combine', 'cname': 'col-sm-3', fields:
  //       [
  //         {
  //           "value": "", "label": "Contact", "formname": "mobile", "tags": "input", "type": "number", "placeholder": "Enter mobile number", "valid": true, "patternerror": "Invalid number",
  //           validations: [Validators.required, Validators.pattern("^[6789]+[0-9]{9}$"), Validators.maxLength(10), Validators.minLength(4)]
  //         },

  //         { "value": "", "label": "Date of birth", "formname": "dob", "tags": "input", "type": "date", "valid": true, validations: [Validators.required] },
  //         {
  //           "value": "", "label": "Gender", "formname": "gender", "tags": "select", "valid": true, validations: [Validators.required],
  //           "options": [{ "label": "Male", "value": "male" },
  //           { "label": "Female", "value": "female" },
  //           { "label": "Other", "value": "other" }]
  //         },
  //         {
  //           "value": "", "label": "Alternative email", "formname": "altmail", "tags": "input", "type": "email", "valid": true, "placeholder": "enter your alternative gmail", "patternerror": "Invalid mail",
  //           validations: [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@gmail+\.com+$")]
  //         },
  //       ]
  //   },

  //   { "label": "ACADEMIC DETAILS", "type": "display" },

  //   {
  //     tags: 'combine', 'cname': 'col-sm-3', fields:
  //       [
  //         {
  //           "value": "", "label": "Graduation(B.Tech/MBA/MCA) year of joining", "formname": "yearofjoining", "tags": "input", "type": "number", "valid": true, "patternerror": "Invalid year",
  //           "placeholder": "Enter your b.tech joining year", validations: [Validators.required, Validators.min(2010), Validators.max(3000), Validators.maxLength(4)]
  //         },

  //         {
  //           "value": "", "label": "Eamcet/Ecet rank", "formname": "rank", "type": "number",
  //           "patternerror": "Enter valid rank", "tags": "input", "valid": true, "placeholder": "Enter your rank", validations: [Validators.required, Validators.min(1)]
  //         },
  //         {
  //           "value": "", "label": "INTERMEDIATE/DIPLOMA", "formname": "intermpc", "valid": true, "tags": "select", validations: [Validators.required],
  //           "options": [{ "label": "Intermediate", "value": "inter" },
  //           { "label": "Diploma", "value": "diploma" }
  //           ]
  //         },
  //         { "value": "", "label": "Education gap", "formname": "educationgap", "tags": "input", "type": "number", "valid": true, "placeholder": "Fill this field", "patternerror": "Invalid Gap", validations: [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)] },
  //       ]
  //   },
  //   {
  //     tags: 'combine', 'cname': 'col-sm-3', fields: [
  //       { "value": "", "label": "Tenth passed out year", "formname": "tenyear", "type": "number", "valid": true, "tags": "input", "placeholder": "Enter your 10th passed out year", "patternerror": "Invalid year", validations: [Validators.required, Validators.min(2005), Validators.max(2040), Validators.maxLength(4)] },
  //       {
  //         "value": "", "label": "Tenth board", "formname": "tenthboard", "type": "year", "valid": true, "tags": "select", validations: [Validators.required],
  //         "options": [{ "label": "State Board of Secondary Education,AP", "value": "State Board of Secondary Education,AP" },
  //         { "label": "Central Board of Secondary Education", "value": "Central Board of Secondary Education" },
  //         { "label": "Indian Certificate of Secondary Education", "value": "Indian Certificate of Secondary Education" }
  //         ]
  //       },
  //       { "value": "", "label": "Tenth school name", "formname": "tenthschoolname", "type": "text", "valid": true, "tags": "input", "placeholder": "Enter your school name", "patternerror": "Invalid school name", validations: [Validators.required] },
  //       { "value": "", "label": "Tenth CGPA", "formname": "tenthcgpa", "type": "number", "valid": true, "tags": "input", "placeholder": "Enter your tenth CGPA", "patternerror": "Invalid CGPA", validations: [Validators.required, Validators.min(5), Validators.max(10), Validators.maxLength(4), Validators.minLength(1)] },
  //     ]
  //   },


  //   {
  //     tags: 'combine', 'cname': 'col-sm-3', fields: [
  //       { "value": "", "label": "Inter/Diploma passed out year", "formname": "interyear", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your passed out year", "patternerror": "Invalid year", validations: [Validators.required, Validators.min(2005), Validators.max(2040), Validators.maxLength(4)] },
  //       {
  //         "value": "", "label": "Intermediate/Diploma Board", "formname": "interboard", "tags": "select", "valid": true, validations: [Validators.required],
  //         "options": [{ "label": "Board of Intermediate Education,AP", "value": "Board of Intermediate Education,AP" },
  //         { "label": "Telangana State Board of Intermediate Education", "value": "Telangana State Board of Intermediate Education" },
  //         { "label": "CBSE 12th Board", "value": "CBSE 12th Board" },
  //         { "label": "State Board of Technical Education and training(Diploma board)", "value": "State Board of Technical Education and training(Diploma board)" },
  //         ]
  //       },
  //       { "value": "", "label": "Inter/Diploma College name", "formname": "interclgname", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your college name", "patternerror": "Invalid college name", validations: [Validators.required] },
  //       { "value": "", "label": "Inter/Diploma CGPA", "formname": "intercgpa", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your CGPA", "patternerror": "Invalid CGPA", validations: [Validators.required, Validators.min(5), Validators.max(10), Validators.maxLength(4), Validators.minLength(1)] },
  //     ]
  //   },


  //   { "value": "", "label": "ADDRESS", "type": "display" },

  //   {
  //     tags: 'combine', 'cname': 'col-sm-6', fields: [
  //       { "value": "", "label": "Current address", "formname": "currentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter current address", "patternerror": "Invalid address", validations: [Validators.required] },
  //       { "value": "", "label": "Permanent address", "formname": "permanentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter permanent address", "patternerror": "Invalid address", validations: [Validators.required] },
  //     ]
  //   },

  //   { "value": "", "label": "ADDITIONAL INFO", "type": "display" },
  //   {
  //     tags: 'combine', 'cname': 'col-sm-3', fields: [
  //       { "value": "", "label": "Father's name", "formname": "fathername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your father name", "patternerror": "Invalid name", validations: [Validators.required, Validators.pattern("[a-zA-Z. ]+$")] },
  //       { "value": "", "label": "Mother's name", "formname": "mothername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your mother name", "patternerror": "Invalid name", validations: [Validators.required, Validators.pattern("[a-zA-Z. ]+$")] },
  //       { "value": "", "label": "Aadhar number", "formname": "aadharno", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your aadhar number", "patternerror": "Invalid Aadhar number", validations: [Validators.required, Validators.maxLength(12), Validators.pattern("[1-9]+[0-9]{11}$")] },
  //       { "value": "", "label": "Pan card number", "formname": "panno", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your pan card number", "patternerror": "Invalid Pan number", validations: [Validators.required, Validators.maxLength(19), Validators.minLength(10)] },
  //     ]
  //   },

  //   {
  //     tags: 'combine', 'cname': 'col-sm-4', fields: [
  //       {
  //         "value": "", "label": "Religion", "formname": "religion", "tags": "select", "valid": true, validations: [Validators.required],
  //         "options": [
  //           { "label": "Hindu", "value": "Hindu" }, { "label": "Muslim", "value": "Muslim" },
  //           { "label": "Christian", "value": "Christian" }, { "label": "Jain", "value": "Jain" }, { "label": "Sikh", "value": "Sikh" },
  //         ]
  //       },
  //       {
  //         "value": "", "label": "Caste", "formname": "caste", "tags": "select", "valid": true, validations: [Validators.required],
  //         "options": [
  //           { "label": "OC", "value": "OC" }, { "label": "BC", "value": "BC" }, { "label": "SC", "value": "SC" }, { "label": "ST", "value": "ST" },
  //         ]
  //       },

  //       {
  //         "value": "", "label": "Convener quota", "formname": "admissionquota", "tags": "select", "valid": true, validations: [Validators.required],
  //         "options": [
  //           { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
  //         ]
  //       },
  //     ]
  //   },
  //   {
  //     tags: 'combine', 'cname': 'col-sm-6', fields: [
  //       {
  //         "value": "", "label": "Having laptop", "formname": "havinglaptop", "tags": "select", "valid": true, validations: [Validators.required],
  //         "options": [
  //           { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
  //         ]
  //       },
  //       { "value": "", "label": "Company work experience", "formname": "companyexperience", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your experience in years", "patternerror": "Invalid number", validations: [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)] },
  //     ]
  //   },
  //   { "formname": "organisation_id", "value": sessionStorage.getItem('organisation_id') },
  //   { "value": "", "formname": "profilepic", },


  // ]
  studentform: any[] = [
    { "formname": "mail", "type": "none", "value": sessionStorage.getItem('mail') },
    {
      tags: 'combine', 'cname': 'col-sm-3', fields:
        [
          {
            "value": "9550823293", "label": "Contact", "formname": "mobile", "tags": "input", "type": "number", "placeholder": "Enter mobile number", "valid": true, "patternerror": "Invalid number",
            validations: [Validators.required, Validators.pattern("^[6789]+[0-9]{9}$"), Validators.maxLength(10), Validators.minLength(4)]
          },

          { "value": "", "label": "Date of birth", "formname": "dob", "tags": "input", "type": "date", "valid": true, validations: [Validators.required] },
          {
            "value": "", "label": "Gender", "formname": "gender", "tags": "select", "valid": true, validations: [Validators.required],
            "options": [{ "label": "Male", "value": "male" },
            { "label": "Female", "value": "female" },
            { "label": "Other", "value": "other" }]
          },
          {
            "value": "arikya.hak@gmail.com", "label": "Alternative email", "formname": "altmail", "tags": "input", "type": "email", "valid": true, "placeholder": "enter your alternative gmail", "patternerror": "Invalid mail",
            validations: [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@gmail+\.com+$")]
          },
        ]
    },

    { "label": "ACADEMIC DETAILS", "type": "display" },

    {
      tags: 'combine', 'cname': 'col-sm-3', fields:
        [
          {
            "value": "", "label": "Graduation(B.Tech/MBA/MCA) year of joining", "formname": "yearofjoining", "tags": "input", "type": "number", "valid": true, "patternerror": "Invalid year",
            "placeholder": "Enter your b.tech joining year", validations: [Validators.required, Validators.min(2010), Validators.max(3000), Validators.maxLength(4)]
          },

          {
            "value": "6173", "label": "Eamcet/Ecet rank", "formname": "rank", "type": "number",
            "patternerror": "Enter valid rank", "tags": "input", "valid": true, "placeholder": "Enter your rank", validations: [Validators.required, Validators.min(1)]
          },
          {
            "value": "inter", "label": "INTERMEDIATE/DIPLOMA", "formname": "intermpc", "valid": true, "tags": "select", validations: [Validators.required],
            "options": [{ "label": "Intermediate", "value": "inter" },
            { "label": "Diploma", "value": "diploma" }
            ]
          },
          { "value": "0", "label": "Education gap", "formname": "educationgap", "tags": "input", "type": "number", "valid": true, "placeholder": "Fill this field", "patternerror": "Invalid Gap", validations: [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)] },
        ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-3', fields: [
        { "value": "", "label": "Tenth passed out year", "formname": "tenyear", "type": "number", "valid": true, "tags": "input", "placeholder": "Enter your 10th passed out year", "patternerror": "Invalid year", validations: [Validators.required, Validators.min(2005), Validators.max(2040), Validators.maxLength(4)] },
        {
          "value": "State Board of Secondary Education,AP", "label": "Tenth board", "formname": "tenthboard", "type": "year", "valid": true, "tags": "select", validations: [Validators.required],
          "options": [{ "label": "State Board of Secondary Education,AP", "value": "State Board of Secondary Education,AP" },
          { "label": "Central Board of Secondary Education", "value": "Central Board of Secondary Education" },
          { "label": "Indian Certificate of Secondary Education", "value": "Indian Certificate of Secondary Education" }
          ]
        },
        { "value": "Narayana English Medium School", "label": "Tenth school name", "formname": "tenthschoolname", "type": "text", "valid": true, "tags": "input", "placeholder": "Enter your school name", "patternerror": "Invalid school name", validations: [Validators.required] },
        { "value": "9.0", "label": "Tenth CGPA", "formname": "tenthcgpa", "type": "number", "valid": true, "tags": "input", "placeholder": "Enter your tenth CGPA", "patternerror": "Invalid CGPA", validations: [Validators.required, Validators.min(5), Validators.max(10), Validators.maxLength(4), Validators.minLength(1)] },
      ]
    },


    {
      tags: 'combine', 'cname': 'col-sm-3', fields: [
        { "value": "", "label": "Inter/Diploma passed out year", "formname": "interyear", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your passed out year", "patternerror": "Invalid year", validations: [Validators.required, Validators.min(2005), Validators.max(2040), Validators.maxLength(4)] },
        {
          "value": "Board of Intermediate Education,AP", "label": "Intermediate/Diploma Board", "formname": "interboard", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [{ "label": "Board of Intermediate Education,AP", "value": "Board of Intermediate Education,AP" },
          { "label": "Telangana State Board of Intermediate Education", "value": "Telangana State Board of Intermediate Education" },
          { "label": "CBSE 12th Board", "value": "CBSE 12th Board" },
          { "label": "State Board of Technical Education and training(Diploma board)", "value": "State Board of Technical Education and training(Diploma board)" },
          ]
        },
        { "value": "Narayana Juniour College", "label": "Inter/Diploma College name", "formname": "interclgname", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your college name", "patternerror": "Invalid college name", validations: [Validators.required] },
        { "value": "9.0", "label": "Inter/Diploma CGPA", "formname": "intercgpa", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your CGPA", "patternerror": "Invalid CGPA", validations: [Validators.required, Validators.min(5), Validators.max(10), Validators.maxLength(4), Validators.minLength(1)] },
      ]
    },


    { "value": "", "label": "ADDRESS", "type": "display" },

    {
      tags: 'combine', 'cname': 'col-sm-6', fields: [
        { "value": "2-6,Balaji colony,Madanapalle", "label": "Current address", "formname": "currentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter current address", "patternerror": "Invalid address", validations: [Validators.required] },
        { "value": "2-6,Balaji colony,Madanapalle", "label": "Permanent address", "formname": "permanentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter permanent address", "patternerror": "Invalid address", validations: [Validators.required] },
      ]
    },

    { "value": "", "label": "ADDITIONAL INFO", "type": "display" },
    {
      tags: 'combine', 'cname': 'col-sm-3', fields: [
        { "value": "Raghavendra", "label": "Father's name", "formname": "fathername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your father name", "patternerror": "Invalid name", validations: [Validators.required, Validators.pattern("[a-zA-Z. ]+$")] },
        { "value": "Yashaswini", "label": "Mother's name", "formname": "mothername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your mother name", "patternerror": "Invalid name", validations: [Validators.required, Validators.pattern("[a-zA-Z. ]+$")] },
        { "value": "447590714005", "label": "Aadhar number", "formname": "aadharno", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your aadhar number", "patternerror": "Invalid Aadhar number", validations: [Validators.required, Validators.maxLength(12), Validators.pattern("[1-9]+[0-9]{11}$")] },
        { "value": "JJLPK3971H", "label": "Pan card number", "formname": "panno", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your pan card number", "patternerror": "Invalid Pan number", validations: [Validators.required, Validators.maxLength(19), Validators.minLength(10)] },
      ]
    },

    {
      tags: 'combine', 'cname': 'col-sm-4', fields: [
        {
          "value": "Hindu", "label": "Religion", "formname": "religion", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "Hindu", "value": "Hindu" }, { "label": "Muslim", "value": "Muslim" },
            { "label": "Christian", "value": "Christian" }, { "label": "Jain", "value": "Jain" }, { "label": "Sikh", "value": "Sikh" },
          ]
        },
        {
          "value": "OC", "label": "Caste", "formname": "caste", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "OC", "value": "OC" }, { "label": "BC", "value": "BC" }, { "label": "SC", "value": "SC" }, { "label": "ST", "value": "ST" },
          ]
        },

        {
          "value": "yes", "label": "Convener quota", "formname": "admissionquota", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
          ]
        },
      ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-6', fields: [
        {
          "value": "no", "label": "Having laptop", "formname": "havinglaptop", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
          ]
        },
        { "value": "0", "label": "Company work experience", "formname": "companyexperience", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your experience in years", "patternerror": "Invalid number", validations: [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)] },
      ]
    },
    { "formname": "organisation_id", "value": sessionStorage.getItem('organisation_id') },
    { "value": "", "formname": "profilepic", },


  ]
  formode: any = false
  constructor(private http: HttpClient, private commonservice: CommonService, private router: Router) {
    let form: any = {}
    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {
        // console.log("res.data", res.data)
        if (res.data.dob == '') {
          this.nodata = true
          this.formode = true
        } else { this.router.navigate(['/student/studenthome']) }
      },
      (err: any) => console.log(err)
    );
    this.studentform.forEach((e: any) => {
      if (e.tags == "combine") {
        e.fields.forEach((i: any) => {
          (i.valid) ? form[i.formname] = new FormControl(i.value, i.validations) :
            form[i.formname] = new FormControl(i.value);

        });
      }
      else {
        (e.valid) ? form[e.formname] = new FormControl(e.value, e.validations) :
          form[e.formname] = new FormControl(e.value);
      }
      this.studentdata = new FormGroup(form);
    });
    //   this.modedata.forEach((e: any) => {
    //     if (e.tags == "combine") {
    //       e.fields.forEach((i: any) => {
    //         (i.valid) ?( form[i.formname] = new FormControl(i.value,[Validators.required,Validators.pattern(i.pattern)])):
    //         form[i.formname] = new FormControl(i.value);

    //       });
    //     }
    //     else {
    //       (e.valid) ? form[e.formname] = new FormControl(e.value, Validators.required) :
    //         form[e.formname] = new FormControl(e.value);
    //     }
    //   });
    //   this.signUpForm = new FormGroup(form)
    // }

  }
  ngOnInit(): void {
  }
  display = false
  save() {
    // console.log('heloooo')
    this.studentformvalue = true;
    if (this.studentdata.status == 'VALID') {
      this.commonservice.postrequest('http://localhost:4000/Studentdata/updatestudentdatac', this.studentdata.value).subscribe(
        (res: any) => {
          if (res.message == 'success') {
            this.displaypopup = true; this.popup = "Successfully submitted"; setTimeout(() => { this.displaypopup = false }, 5000);
            this.router.navigate(['/student/studenthome'])
          }
        },
        (err: any) => console.log(err)
      );
    }
    else {
      let a = '';
      Object.keys(this.studentdata.controls).forEach(key => {
        const controlErrors = this.studentdata.get(key).errors;
        if (controlErrors != null && a == '') {
          a = key
          // console.log("key",a)
          document.getElementById(key)?.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
      });
      this.display = true
      setTimeout(() => { this.display = false }, 5000)
      // const firstElementWithError = document.querySelector('.ng-invalid');
      // console.log("firstElementWithError",firstElementWithError)
      // if (firstElementWithError) {
      //   firstElementWithError.scrollIntoView({ behavior: 'smooth',block:'center' });
      // }
    }
  }
}
