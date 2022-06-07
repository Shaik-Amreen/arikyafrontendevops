import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminstudentprofile',
  templateUrl: './adminstudentprofile.component.html',
  styleUrls: ['./adminstudentprofile.component.css']
})
export class AdminstudentprofileComponent implements OnInit {

  data: any = {}; sgpa: any = []; offers: any = 0; applications: any = 0; getdata = false; notdat: any = 0; edit = false;
  course: any = ''
  profile: FormGroup; overdata: any;
  imageUrl: any; nodata: any = false

  data1: any; overdata1: any = []; showdata: any = false; studentformvalue = false;
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
        { "value": "", "label": "Current address", "formname": "currentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter current address", "patternerror": "Invalid address", validations: [Validators.required, Validators.pattern("[a-zA-Z0-9+/,:;@#|'.\-_^*()! ]+$")] },
        { "value": "", "label": "Permanent address", "formname": "permanentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter permanent address", "patternerror": "Invalid address", validations: [Validators.required, Validators.pattern("[a-zA-Z0-9$&/+,:\-;_=?@#|'<>.^*()%! ]+$")] },
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
  stdallcodedata: any = [];
  stdallratedata: any = [];
  stdallquizdata: any = [];
  stdeachquizrate: any = [];
  stdeachcoderate: any = [];
  constructor(private http: HttpClient, private commonservice: CommonService, private router: Router) {
    this.callconstructor();

  }
  base64textString: any = ''
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

  codetopics: any = []; coderate: any = []; quiztopics: any = []; quizrate: any = []; studentmail = sessionStorage.getItem('studentmail');
  role: any
  callconstructor() {
    this.role = sessionStorage.getItem('role')
    this.sgpa = []
    this.profile = new FormGroup({
      profilepic: new FormControl(""),
    });

    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('studentmail') }).subscribe(
      (res: any) => {
        this.course = res.data.course
        this.data = res.data;

        if (this.data.sgpa) {
          res.data.sgpa.forEach((e: any) => {
            // console.log(e, "hgfuyfiyfiyfiyfiygfiy")
            this.sgpa.push(...Object.values(e[0]))
            // console.log(this.sgpa)
          });
        }

        // console.log(this.sgpa, ";;;;;;;;;;;;;;;;;;;;;;;;;")
        this.data.yearofjoining = parseInt(res.data.yearofjoining)
        this.data.profilepic == '' ? this.data.profilepic = "../../../../assets/user.png" : null;
        this.image = this.data.profilepic
        // console.log("this.images:", this.image)
        this.nodata = true
      })

    this.commonservice.postrequest('http://localhost:4000/placementstatus/checkmailnumber', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {

        // console.log("this.overdata", res); 
        this.overdata = res;

        this.overdata.forEach((a: any) => {
          if (a.offerstatus == 'yes') { this.offers++ }
          if (a.registered == 'yes') { this.applications++ }
        });
      },
      (err: any) => console.log(err)
    );
    this.getdata = true

    // console.log(this.getdata, "llllllllllllllllll")
    this.commonservice.postrequest('http://localhost:4000/placementstatus/checkmailnumber', {
      organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('studentmail')
    }).subscribe(
      (res: any) => {
        // console.log("checkmailnumber", res);
        this.overdata1 = { ...res.ac, ...res.data }
        this.showdata = true
      },
      (err: any) => console.log(err)
    );
    this.commonservice.postrequest('http://localhost:4000/Dashboard/stdprofilerating', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem("studentmail") }).subscribe(
      (res: any) => {
        // console.log("res.data", res)
        this.stdrates = true
        this.stdallcodedata = res.stdallcodedata
        this.stdallquizdata = res.stdallquizdata
        this.stdallratedata = res.stdallratedata
        this.stdeachcoderate = res.stdeachcoderate
        this.stdeachquizrate = res.stdeachquizrate
        this.stdeachcoderate.forEach((s: any) => {
          this.codetopics.push(s.topic)

          this.coderate.push(s.main)
        })
        this.stdeachquizrate.forEach((s: any) => {
          this.quiztopics.push(s.topic)
          this.quizrate.push(s.main)
        })

        this.setOptions()
      })
  }

  notyet: any; all: any; stdrates = false; allLength: any
  allenvelop() {
    this.commonservice.postrequest('http://localhost:4000/notification/findnotifications', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        this.notyet = res.filter((e: any) => e.verified == 'notyet')
        res.forEach((e: any) => {
          (e.verifiedbymail == sessionStorage.getItem('mail')) ? e.verifiedby = 'You' : null
        });
        this.all = res
        this.allLength = this.all.length
        // console.log("this.all", this.all)
        // res.forEach((e: any) => {
        //   (e.doneby == sessionStorage.getItem('mail')) ? e.firstname = 'You' : null
        // });
        // this.adminotifications = res
      },
      (err: any) => console.log(err)
    );
  }

  downloadofferPdf(a: any, b: any) {
    const source = `data:application/pdf;base64,${a}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${sessionStorage.getItem('mail')}${b}.pdf`
    link.click();
  }

  image = "../../../../assets/user.png";
  tempimg = "../../../../assets/user.png";
  handleFileSelect(evt: any) {
    // this.tempimg=this.image
    var reader = new FileReader;
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload = (event: any) => {
      this.tempimg = event.target.result;
      // this.tempimg = this.image
      // console.log(this.data.profilepic)
    }
    evt.target.value = "";
  }

  saveimg: any = "save"; imagemodal = "none"
  remove() {
    this.tempimg = "../../../../assets/user.png"
  }

  saveimage() {
    this.image = this.tempimg
    this.data.profilepic = this.image;
    this.saveimg = "saving..."
    this.data.organisation_id = sessionStorage.getItem("organisation_id")
    this.commonservice.postrequest('http://localhost:4000/Studentdata/updatestudentdatac', this.data).subscribe(
      (res: any) => {
        this.imagemodal = "none"
        this.saveimg = "save"
        this.display = true
        this.popup = "SUCCESSFULLY SAVED"
        setTimeout(() => {
          this.display = false;
          sessionStorage.removeItem("successpopup")
        }, 5000)
      })
  }

  verify() {
    this.data.verified = 'yes'
    this.commonservice.postrequest('http://localhost:4000/Studentdata/updateverified', this.data).subscribe(
      (res: any) => { this.data = res.data; console.log(this.data) },
      (err: any) => console.log(err)
    );
  }

  resubmit() {
    this.data.verified = 'no'
    this.commonservice.postrequest('http://localhost:4000/Studentdata/askfreeze', this.data).subscribe(
      (res: any) => { this.data = res.data; },
      (err: any) => console.log(err)
    );
  }

  freeze() {
    this.data.freeze = 'yes';
    this.commonservice.postrequest('http://localhost:4000/Studentdata/askfreeze', this.data).subscribe(
      (res: any) => { this.data = res.data; },
      (err: any) => console.log(err)
    );
  }

  unfreeze() {
    this.data.freeze = 'no'
    this.commonservice.postrequest('http://localhost:4000/Studentdata/askunfreeze', this.data).subscribe(
      (res: any) => { this.data = res.data; },
      (err: any) => console.log(err)
    );
  }

  accept(c: any, d: any) {
    c.verified = d;
    this.commonservice.postrequest('http://localhost:4000/notification/updatenotifications', c).subscribe(
      (res: any) => {
        this.notdat = this.notdat - 1
      },
      (err: any) => console.log(err)
    );
  }

  data12: any
  accept1(c: any, d: any) {
    let check = this.notyet.filter((n: any) => n.rollnumber == c.rollnumber)
    c.verified = d

    // console.log(check)
    c.verifiedby = sessionStorage.getItem('firstname')
    c.verifiedbymail = sessionStorage.getItem('mail')
    this.data = { mail: c.mail, organisation_id: c.organisation_id, verified: 'no' }

    if (d == 'accepted') {
      let field = c.field
      let value = c.current
      this.data[field] = value
      if (check.length == 1) { this.data.verified = 'yes' }
    }
    this.commonservice.postrequest('http://localhost:4000/Studentdata/updatestudentdatac',
      this.data).subscribe(
        (res: any) => {
          if (res.message == "success") {
            this.allenvelop()
            console.log("successfull update profile", this.data12)
          }
        })


    this.commonservice.postrequest('http://localhost:4000/notification/updatenotifications', c).subscribe(
      (res: any) => { },
      (err: any) => console.log(err)
    );
  }


  fillform() {
    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', {
      organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('studentmail')
    }).subscribe(
      (res: any) => {
        this.data1 = res; res.data.yearofjoining = parseInt(res.data.yearofjoining); if (this.data1.data.resume == '') {
          this.uploadresume = true
        }
        this.course = res.data.course

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

  display = false; popup: any;

  save() {

    this.studentformvalue = true;
    if (this.studentForm.status == 'VALID') {
      // let finaldat: any = []
      // this.fieldsarr.forEach((element: any) => {
      //   if (this.studentForm.value[element] != this.data1.data[element] && element != 'rollnumber' && element != 'aadhar') {
      //     console.log(this.studentForm.value[element], this.data1.data[element])
      //     finaldat.push({
      //       'rollnumber': this.data1.data.rollnumber, 'mail': this.data1.data.mail,
      //       'fullname': this.data1.data.firstname + ' ' + this.data1.data.middlename + ' ' + this.data1.data.lastname,
      //       prev: this.data1.data[element], current: this.studentForm.value[element], field: element, verified: 'notyet', date: new
      //         Date(), organisation_id: sessionStorage.getItem('organisation_id'),
      //       verifiedby: ''
      //     })
      //   }
      // });
      // if (finaldat.length == 0) {
      //   console.log("res123")
      //   this.edit = !this.edit
      //   // this.router.navigate(['admin/studentprofile'])
      // }
      // else {
      //   this.commonservice.postrequest('http://localhost:4000/Studentdata/updatestudentdatac',
      //     this.studentForm.value).subscribe(
      //       (res: any) => {
      //         console.log(res, "llllllllllllllllllllllllllllllllllllllllllll")
      //         if (res.message == 'success') {
      //           this.commonservice.postrequest('http://localhost:4000/notification/postnotifications', finaldat).subscribe(
      //             (res1: any) => {
      //               console.log("res1", res1)
      //               this.edit = !this.edit
      //               this.callconstructor()
      //               // this.router.navigate(['admin/studentprofile'])
      //             },
      //             (err1: any) => { })
      //         }
      //       },
      //       (err: any) => console.log(err)
      //     );
      // }
      this.commonservice.postrequest('http://localhost:4000/Studentdata/updatestudentdatac',
        this.studentForm.value).subscribe(
          (res: any) => {
            this.edit = false
            this.display = true
            this.popup = "SUCCESSFULLY SAVED"
            setTimeout(() => {
              this.display = false;
              sessionStorage.removeItem("successpopup")
            }, 4000)
            this.callconstructor()
          })
    }
    else {
      let a = ''
      Object.keys(this.studentForm.value).forEach(control => {
        const controlErrors = this.studentForm.controls[control].errors;
        if (controlErrors != null && a == '') {
          a = control

          document.getElementById(control)?.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
      });
      this.display = true
      this.popup = "INVALID INPUT DATA"
      setTimeout(() => { this.display = false }, 4000)
    }

  }


  close() {
    this.edit = !this.edit
  }



  option: any = {}
  codeoption: any = {}
  quizoption: any = {}

  setOptions() {

    this.codeoption = {
      title: {
        text: 'CODING TESTS'
      },
      xAxis: {
        type: 'category',
        data: this.codetopics
      },
      yAxis: {
        type: 'value'
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: true },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          data: this.coderate,
          type: 'line'
        }
      ]
    };

    this.quizoption = {
      title: {
        text: 'QUIZ TESTS'
      },
      xAxis: {
        type: 'category',
        data: this.quiztopics
      },
      yAxis: {
        type: 'value'
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: true },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          data: this.quizrate,
          type: 'line'
        }
      ]
    };





    if (this.course == 'btech') {
      this.option = {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', "8"]
        },
        yAxis: {
          type: 'value'
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: true },
            magicType: { show: true, type: ['line', 'bar', 'stack'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            data: this.sgpa,
            type: 'line'
          }
        ]
      };
    }
    else {
      this.option = {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4']
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: true },
            magicType: { show: true, type: ['line', 'bar', 'stack'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.sgpa,
            type: 'line'
          }
        ]
      };
    }




  }


}
