import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentedit',
  templateUrl: './studentedit.component.html',
  styleUrls: ['./studentedit.component.css']
})
export class StudenteditComponent implements OnInit {
  data: any; overdata: any = []; showdata: any = false
  studentform: any[] = [
    { "formname": "mail", "type": "none", "value": sessionStorage.getItem('mail') },
    {
      tags: 'combine', 'cname': 'col-sm-4', fields: [
        { "value": "", "label": "First name", "formname": "firstname", "tags": "input", "type": "text", "patternerror": "Invalid first name", "valid": true, validations: [Validators.required, Validators.pattern("^[A-Za-z ]+$"), Validators.maxLength(20), Validators.minLength(3)] },
        { "value": "", "label": "Middle name", "formname": "middlename", "tags": "input", "type": "text" },
        { "value": "", "label": "Last name", "formname": "lastname", "tags": "input", "type": "text", "patternerror": "Invalid last name", "valid": true, validations: [Validators.required, Validators.pattern("^[A-Za-z ]+$"), Validators.maxLength(20), Validators.minLength(3)] },
      ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-3', fields:
        [
          {
            "value": "", "label": "Contact", "formname": "mobile", "tags": "input", "type": "number", "placeholder": "Enter mobile number", "valid": true, "patternerror": "invalid number",
            validations: [Validators.required, Validators.pattern("^[6789]+[0-9]{9}$"), Validators.maxLength(10), Validators.minLength(4)]
          },

          { "value": "", "label": "Date of birth", "formname": "dob", "tags": "input", "type": "date", "placeholder": "Please fill the date of birth", "valid": true, validations: [Validators.required] },
          {
            "value": "", "label": "Gender", "formname": "gender", "tags": "select", "valid": true, validations: [Validators.required],
            "options": [{ "label": "Male", "value": "male" },
            { "label": "Female", "value": "female" },
            { "label": "Other", "value": "other" }]
          },
          {
            "value": "", "label": "Alternative email", "formname": "altmail", "tags": "input", "type": "email", "valid": true, "placeholder": "enter your alternative gmail", "patternerror": "invalid mail",
            validations: [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@gmail+\.com+$")]
          },
        ]
    },

    { "label": "ACADEMIC DETAILS", "type": "display" },

    {
      tags: 'combine', 'cname': 'col-sm-3', fields:
        [
          {
            "value": "", "label": "Graduation(B.Tech/MBA/MCA) year of joining", "formname": "yearofjoining", "tags": "input", "type": "year", "valid": true, "patternerror": "Invalid year",
            "placeholder": "Enter your b.tech joining year", validations: [Validators.required, Validators.min(2010), Validators.max(2040), Validators.maxLength(4)]
          },

          { "value": "", "label": "Eamcet/Ecet rank", "formname": "rank", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your rank", validations: [Validators.required, Validators.min(1)] },
          {
            "value": "", "label": "INTERMEDIATE/DIPLOMA", "formname": "intermpc", "valid": true, "tags": "select", validations: [Validators.required],
            "options": [{ "label": "Intermediate", "value": "inter" },
            { "label": "Diploma", "value": "diploma" }
            ]
          },
          { "value": "", "label": "Education gap", "formname": "educationgap", "tags": "input", "type": "number", "valid": true, "placeholder": "Fill this field", "patternerror": "Invalid Value", validations: [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)] },
        ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-3', fields: [
        { "value": "", "label": "Tenth passed out year", "formname": "tenyear", "type": "year", "valid": true, "tags": "input", "placeholder": "Enter your 10th passed out year", "patternerror": "Invalid year", validations: [Validators.required, Validators.min(2005), Validators.max(2040), Validators.maxLength(4)] },
        {
          "value": "", "label": "Tenth board", "formname": "tenthboard", "type": "year", "valid": true, "tags": "select", validations: [Validators.required],
          "options": [{ "label": "State Board of Secondary Education,AP", "value": "State Board of Secondary Education,AP" },
          { "label": "Central Board of Secondary Education", "value": "Central Board of Secondary Education" },
          { "label": "Indian Certificate of Secondary Education", "value": "Indian Certificate of Secondary Education" }
          ]
        },
        { "value": "", "label": "Tenth school name", "formname": "tenthschoolname", "type": "text", "valid": true, "tags": "input", "placeholder": "Enter your school name", "patternerror": "Invalid school name", validations: [Validators.required, Validators.pattern("[A-Za-z, ]+$")] },
        { "value": "", "label": "Tenth CGPA", "formname": "tenthcgpa", "type": "number", "valid": true, "tags": "input", "placeholder": "Enter your tenth CGPA", "patternerror": "Invalid CGPA", validations: [Validators.required, Validators.min(5), Validators.max(10), Validators.maxLength(4), Validators.minLength(1)] },
      ]
    },


    {
      tags: 'combine', 'cname': 'col-sm-3', fields: [
        { "value": "", "label": "Inter/Diploma passed out year", "formname": "interyear", "type": "year", "tags": "input", "valid": true, "placeholder": "Enter your passed out year", "patternerror": "Invalid year", validations: [Validators.required, Validators.min(2005), Validators.max(2040), Validators.maxLength(4)] },
        {
          "value": "", "label": "Intermediate/Diploma Board", "formname": "interboard", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [{ "label": "Board of Intermediate Education,AP", "value": "Board of Intermediate Education,AP" },
          { "label": "Telangana State Board of Intermediate Education", "value": "Telangana State Board of Intermediate Education" },
          { "label": "CBSE 12th Board", "value": "CBSE 12th Board" },
          { "label": "State Board of Technical Education and training(Diploma board)", "value": "State Board of Technical Education and training(Diploma board)" },
          ]
        },
        { "value": "", "label": "Inter/Diploma College name", "formname": "interclgname", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your college name", "patternerror": "Invalid college name", validations: [Validators.required, Validators.pattern("[A-Za-z, ]+$")] },
        { "value": "", "label": "Inter/Diploma CGPA", "formname": "intercgpa", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your CGPA", "patternerror": "Invalid CGPA", validations: [Validators.required, Validators.min(5), Validators.max(10), Validators.maxLength(4), Validators.minLength(1)] },
      ]
    },


    { "value": "", "label": "ADDRESS", "type": "display" },

    {
      tags: 'combine', 'cname': 'col-sm-6', fields: [
        { "value": "", "label": "Current address", "formname": "currentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter current address", "patternerror": "Invalid address", validations: [Validators.required] },
        { "value": "", "label": "Permanent address", "formname": "permanentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter permanent address", "patternerror": "Invalid address", validations: [Validators.required] },
      ]
    },

    { "value": "", "label": "ADDITIONAL INFO", "type": "display" },
    {
      tags: 'combine', 'cname': 'col-sm-3', fields: [
        { "value": "", "label": "Father's name", "formname": "fathername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your father name", "patternerror": "Invalid name", validations: [Validators.required, Validators.pattern("[a-zA-Z. ]+$")] },
        { "value": "", "label": "Mother's name", "formname": "mothername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your mother name", "patternerror": "Invalid name", validations: [Validators.required, Validators.pattern("[a-zA-Z. ]+$")] },
        { "value": "", "label": "Aadhar number", "formname": "aadharno", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your aadhar number", "patternerror": "Invalid Aadhar number", validations: [Validators.required, Validators.maxLength(12), Validators.pattern("[1-9]+[0-9]{11}$")] },
        { "value": "", "label": "Pan card number", "formname": "panno", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your pan card number", "patternerror": "Invalid Pan number", validations: [Validators.required, Validators.maxLength(19), Validators.minLength(10)] },
      ]
    },

    {
      tags: 'combine', 'cname': 'col-sm-4', fields: [
        {
          "value": "", "label": "Religion", "formname": "religion", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "Hindu", "value": "Hindu" }, { "label": "Muslim", "value": "Muslim" },
            { "label": "Christian", "value": "Christian" }, { "label": "Jain", "value": "Jain" }, { "label": "Sikh", "value": "Sikh" },
          ]
        },
        {
          "value": "", "label": "Caste", "formname": "caste", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "OC", "value": "OC" }, { "label": "BC", "value": "BC" }, { "label": "SC", "value": "SC" }, { "label": "ST", "value": "ST" },
          ]
        },

        {
          "value": "", "label": "Convener quota", "formname": "admissionquota", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
          ]
        },
      ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-6', fields: [
        {
          "value": "", "label": "Having laptop", "formname": "havinglaptop", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
          ]
        },
        { "value": "", "label": "Company work experience", "formname": "companyexperience", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your experience in years", "patternerror": "Invalid number", validations: [Validators.required, Validators.min(0), Validators.max(9), Validators.maxLength(1)] },
      ]
    },
    // {
    //   tags: 'combine', 'cname': 'col-sm-3', fields:
    //     [
    //       { "value": "", "label": "Contact", "formname": "mobile", "tags": "input", "type": "number", "placeholder": "Enter mobile number", "valid": true ,"patternerror" :"Invalid phonenumber",validations:[Validators.required,Validators.pattern("^[6789]+[0-9]{9}$"),Validators.maxLength(10),Validators.minLength(4)]},
    //       { "value": "", "label": "Date of birth", "formname": "dob", "tags": "input", "type": "date", "placeholder": "Please fill the date of birth", "valid": true,validations:[Validators.required]},
    //       {
    //         "value": "", "label": "Gender", "formname": "gender", "tags": "select", "valid": true,validations:[Validators.required],
    //         "options": [{ "label": "Male", "value": "male" },
    //         { "label": "Female", "value": "female" },
    //         { "label": "Other", "value": "other" }]
    //       },
    //       { "value": "", "label": "Alternative email", "formname": "altmail", "tags": "input", "type": "email", "valid": true, "placeholder": "enter your alternative gmail","patternerror":"invalid mail",validations:[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@gmail+\.com+$")]},
    //     ]
    // },

    // { "label": "ACADEMIC DETAILS", "type": "display" },

    // {
    //   tags: 'combine', 'cname': 'col-sm-3', fields:
    //     [
    //       {
    //         "value": "", "label": "Graduation(B.Tech/MBA/MCA) year of joining", "formname": "yearofjoining", "tags": "input", "type": "year", "valid": true,'pattern':"^[2-9]+[0-9]{3}$","patternerror" :"Invalid year",
    //         "placeholder": "Enter your b.tech joining year",validations:[Validators.required,Validators.min(2010),Validators.max(2040),Validators.maxLength(4)]
    //       },
    //       { "value": "", "label": "Eamcet/Ecet rank", "formname": "rank", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your rank"},
    //       {
    //         "value": "", "label": "INTERMEDIATE/DIPLOMA", "formname": "intermpc", "valid": true, "tags": "select",validations:[Validators.required],
    //         "options": [{ "label": "Intermediate", "value": "inter" },
    //         { "label": "Diploma", "value": "diploma" }
    //         ]
    //       },
    //       { "value": "", "label": "Education gap", "formname": "educationgap", "tags": "input", "type": "number", "valid": true, "placeholder": "Fill this field","patternerror" :"Invalid Value",validations:[Validators.required,Validators.min(0),Validators.max(9),Validators.maxLength(1)]},
    //     ]
    // },
    // {
    //   tags: 'combine', 'cname': 'col-sm-3', fields: [
    //     { "value": "", "label": "Tenth passed out year", "formname": "tenyear", "type": "year", "valid": true, "tags": "input", "placeholder": "Enter your 10th passed out year","patternerror" :"Invalid year",validations:[Validators.required,Validators.min(2005),Validators.max(2040),Validators.maxLength(4)] },
    //     {
    //       "value": "", "label": "Tenth board", "formname": "tenthboard", "type": "year", "valid": true, "tags": "select",validations:[Validators.required],
    //       "options": [{ "label": "State Board of Secondary Education,AP", "value": "State Board of Secondary Education,AP" },
    //       { "label": "Central Board of Secondary Education", "value": "Central Board of Secondary Education" },
    //       { "label": "Indian Certificate of Secondary Education", "value": "Indian Certificate of Secondary Education" }
    //       ]
    //     },
    //     { "value": "", "label": "Tenth school name", "formname": "tenthschoolname", "type": "text", "valid": true, "tags": "input", "placeholder": "Enter your school name" ,'pattern':"^[a-zA-Z ]+$" ,"patternerror":"Invalid school name"},
    //     { "value": "", "label": "Tenth CGPA", "formname": "tenthcgpa", "type": "number", "valid": true, "tags": "input", "placeholder": "Enter your tenth CGPA",'pattern':"^[0-9]+\.[0-9]$|| 10" ,"patternerror":"Invalid CGPA" },
    //   ]
    // },


    // {
    //   tags: 'combine', 'cname': 'col-sm-3', fields: [
    //     { "value": "", "label": "Inter/Diploma passed out year", "formname": "interyear", "type": "year", "tags": "input", "valid": true, "placeholder": "Enter your passed out year",'pattern':"^[2-9]+[0-9]{3}$" ,"patternerror":"Invalid year"},
    //     {
    //       "value": "", "label": "Intermediate/Diploma Board", "formname": "interboard", "tags": "select", "valid": true,
    //       "options": [{ "label": "Board of Intermediate Education,AP", "value": "Board of Intermediate Education,AP" },
    //       { "label": "Telangana State Board of Intermediate Education", "value": "Telangana State Board of Intermediate Education" },
    //       { "label": "CBSE 12th Board", "value": "CBSE 12th Board" },
    //       { "label": "State Board of Technical Education and training(Diploma board)", "value": "State Board of Technical Education and training(Diploma board)" },
    //       ]
    //     },
    //     { "value": "", "label": "Inter/Diploma College name", "formname": "interclgname", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your college name",'pattern':"^[a-zA-Z ]+$" ,"patternerror":"Invalid college name"},
    //     { "value": "", "label": "Inter/Diploma CGPA", "formname": "intercgpa", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your CGPA",'pattern':"^[0-9]+\.[0-9]$|| 10" ,"patternerror":"Invalid CGPA" },
    //   ]
    // },


    // { "value": "", "label": "ADDRESS", "type": "display" },

    // {
    //   tags: 'combine', 'cname': 'col-sm-6', fields: [
    //     { "value": "", "label": "Current address", "formname": "currentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter current address",'pattern':"^[a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%! ]+$" ,"patternerror":"Invalid address"},
    //     { "value": "", "label": "Permanent address", "formname": "permanentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter permanent address",'pattern':"^[a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%! ]+$" ,"patternerror":"Invalid address" },
    //   ]
    // },

    // { "value": "", "label": "ADDITIONAL INFO", "type": "display" },
    // {
    //   tags: 'combine', 'cname': 'col-sm-3', fields: [
    //     { "value": "", "label": "Father's name", "formname": "fathername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your father name",'pattern':"^[A-Za-z. ]+$" ,"patternerror":"Invalid name" },
    //     { "value": "", "label": "Mother's name", "formname": "mothername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your mother name",'pattern':"^[A-Za-z. ]+$" ,"patternerror":"Invalid name"  },
    //     { "value": "", "label": "Aadhar number", "formname": "aadharno", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your aadhar number",'pattern':"^[1-9][0-9]{11}$" ,"patternerror":"Invalid Aadhar number"},
    //     { "value": "", "label": "Pan card number", "formname": "panno", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your pan card number",'pattern':"^[A-Za-z0-9]+$" ,"patternerror":"Invalid Pan number"},
    //   ]
    // },

    // {
    //   tags: 'combine', 'cname': 'col-sm-4', fields: [
    //     {
    //       "value": "", "label": "Religion", "formname": "religion", "tags": "select", "valid": true,
    //       "options": [
    //         { "label": "Hindu", "value": "Hindu" }, { "label": "Muslim", "value": "Muslim" },
    //         { "label": "Christian", "value": "Christian" }, { "label": "Jain", "value": "Jain" }, { "label": "Sikh", "value": "Sikh" },
    //       ]
    //     },
    //     {
    //       "value": "", "label": "Caste", "formname": "caste", "tags": "select", "valid": true,
    //       "options": [
    //         { "label": "OC", "value": "OC" }, { "label": "BC", "value": "BC" }, { "label": "SC", "value": "SC" }, { "label": "ST", "value": "ST" },
    //       ]
    //     },

    //     {
    //       "value": "", "label": "Convener quota", "formname": "admissionquota", "tags": "select", "valid": true,
    //       "options": [
    //         { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
    //       ]
    //     },
    //   ]
    // },
    // {
    //   tags: 'combine', 'cname': 'col-sm-6', fields: [
    //     {
    //       "value": "", "label": "Having laptop", "formname": "havinglaptop", "tags": "select", "valid": true,
    //       "options": [
    //         { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
    //       ]
    //     },
    //     { "value": "", "label": "Company work experience", "formname": "companyexperience", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your experience in years",'pattern':"^[0-9]" ,"patternerror":"Invalid number" },
    //   ]
    // },
    { "type": "none", "formname": "organisation_id", "value": sessionStorage.getItem('organisation_id') },
    { "value": "", "formname": "profilepic", "type": "none" }

  ]
  fieldsarr: any = [
    'rollnumber',
    'mail',
    'mobile',
    'dob',
    'gender',
    'currentaddress',
    'permanentaddress',
    'fathername',
    'mothername',
    'aadharno',
    'aadhar',
    'rank',
    'religion',
    'admissionquota',
    'havinglaptop',
    'yearofjoining',
    'tenyear',
    'tenthschoolname',
    'tenthcgpa',
    'tenthboard',
    'interboard',
    'interyear',
    'intercgpa',
    'interclgname',
    'educationgap',
    'firstname',
    'middlename',
    'caste',
    'altmail',
    'panno',
    'lastname',
  ]
  status = 0; resumesaved = false; uploadresume = false; studentForm: FormGroup;

  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {

    this.commonservice.postrequest('http://localhost:4000/placementstatus/checkmailnumber', {
      organisation_id:
        sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail')
    }).subscribe(
      (res: any) => {
        // console.log(res);


        this.overdata = { ...res.ac, ...res.data }




        this.showdata = true

      },
      (err: any) => console.log(err)
    );

  }
  studentformvalue = false;
  ngOnInit(): void {
    let form: any = {}
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

      this.studentForm = new FormGroup(form);

    });
    this.fillform()
  }


  fillform() {
    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', {
      organisation_id:
        sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail')
    }).subscribe(
      (res: any) => {
        this.data = res; res.data.yearofjoining = parseInt(res.data.yearofjoining); if (this.data.data.resume == '') {
          this.uploadresume = true
        }
        // console.log(this.studentForm)
        // console.log(res.data)
        this.studentForm.value.rollnumber = res.data.rollnumber;
        this.studentForm.controls.mail.setValue(res.data.mail);
        this.studentForm.controls.mobile.setValue(res.data.mobile);
        this.studentForm.controls.dob.setValue(res.data.dob);
        this.studentForm.controls.altmail.setValue(res.data.altmail);
        this.studentForm.controls.gender.setValue(res.data.gender);
        this.studentForm.controls.yearofjoining.setValue(res.data.yearofjoining);
        this.studentForm.controls.currentaddress.setValue(res.data.currentaddress);
        this.studentForm.controls.permanentaddress.setValue(res.data.permanentaddress);
        this.studentForm.controls.fathername.setValue(res.data.fathername);
        this.studentForm.controls.mothername.setValue(res.data.mothername);
        this.studentForm.controls.aadharno.setValue(res.data.aadharno);
        this.studentForm.value.aadhar = res.data.aadhar
        this.studentForm.controls.religion.setValue(res.data.religion);
        this.studentForm.controls.admissionquota.setValue(res.data.admissionquota);
        this.studentForm.controls.havinglaptop.setValue(res.data.havinglaptop);
        this.studentForm.controls.rank.setValue(res.data.rank);
        this.studentForm.controls.tenyear.setValue(res.data.tenyear);
        this.studentForm.controls.tenthschoolname.setValue(res.data.tenthschoolname);
        this.studentForm.controls.tenthcgpa.setValue(res.data.tenthcgpa);
        this.studentForm.controls.tenthboard.setValue(res.data.tenthboard);
        this.studentForm.controls.interboard.setValue(res.data.interboard);
        this.studentForm.controls.interyear.setValue(res.data.interyear);
        this.studentForm.controls.intercgpa.setValue(res.data.intercgpa);
        this.studentForm.controls.intermpc.setValue(res.data.intermpc);
        this.studentForm.controls.interclgname.setValue(res.data.interclgname);
        this.studentForm.controls.educationgap.setValue(res.data.educationgap);
        this.studentForm.controls.firstname.setValue(res.data.firstname);
        this.studentForm.controls.middlename.setValue(res.data.middlename);
        this.studentForm.controls.caste.setValue(res.data.caste);
        this.studentForm.controls.altmail.setValue(res.data.altmail);
        this.studentForm.controls.panno.setValue(res.data.panno);
        this.studentForm.controls.lastname.setValue(res.data.lastname);
        this.studentForm.controls.companyexperience.setValue(res.data.companyexperience);
      },
      (err: any) => console.log(err)
    );
  }

  company(c: any) {
    sessionStorage.setItem("placementcyclename", c.placementcyclename);
    sessionStorage.setItem('companyname', c.companyname);
    this.router.navigate(['/mitstudent/studentcompany'])
  }

  display = false; popup = ''

  save() {
    this.studentformvalue = true;
    if (this.studentForm.status == 'VALID') {
      let finaldat: any = []
      this.fieldsarr.forEach((element: any) => {
        if (this.studentForm.value[element] != this.data.data[element] && element != 'rollnumber' && element != 'aadhar') {
          // console.log(this.studentForm.value[element], this.data.data[element])
          finaldat.push({
            'rollnumber': this.data.data.rollnumber, 'mail': this.data.data.mail,
            'fullname': this.data.data.firstname + ' ' + this.data.data.middlename + ' ' + this.data.data.lastname,
            prev: this.data.data[element], current: this.studentForm.value[element], field: element, verified: 'notyet', date: new
              Date(), organisation_id: sessionStorage.getItem('organisation_id'),
            verifiedby: ''
          })
        }
      });


      if (finaldat.length == 0) {
        this.router.navigate(['student/profile'])
      }

      else {
        this.data.data.verified = 'no'
        this.commonservice.postrequest('http://localhost:4000/Studentdata/updatestudentdatac', this.data.data).subscribe(
          (res: any) => {

            this.commonservice.postrequest('http://localhost:4000/notification/postnotifications', finaldat).subscribe(
              (res1: any) => {
                // console.log(res1)
                this.router.navigate(['student/profile'])
                sessionStorage.setItem("successpopup", 'success')
              },
              (err1: any) => { })
          })
      }
    }
    else {
      let a = ''
      Object.keys(this.studentForm.value).forEach(control => {
        const controlErrors = this.studentForm.controls[control].errors;
        if (controlErrors != null && a == '') {
          a = control
          console.log("control", a)
          document.getElementById(control)?.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
      });
      this.display = true
      this.popup = "INVALID INPUT DATA"
      setTimeout(() => { this.display = false }, 4000)
    }

  }
  close() {
    this.router.navigate(['student/profile'])
  }
}


