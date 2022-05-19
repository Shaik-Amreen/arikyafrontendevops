import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faculty-adminstudentprofile',
  templateUrl: './faculty-adminstudentprofile.component.html',
  styleUrls: ['./faculty-adminstudentprofile.component.css']
})

export class FacultyAdminstudentprofileComponent implements OnInit {
  data: any = {}; sgpa: any = []; offers: any = 0; applications: any = 0; getdata = false; notdat: any = 0;
  edit = false;
  profile: FormGroup; overdata: any;
  imageUrl: any; nodata: any = false
  data1: any; overdata1: any = []; showdata: any = false; studentformvalue = false;
  studentform: any[] = [
    { "formname": "mail", "type": "none", "value": sessionStorage.getItem('mail') },
    {
      tags: 'combine', 'cname': 'col-sm-4', fields: [
        { "value": "", "label": "First name", "formname": "firstname", "tags": "input", "type": "text", 'pattern': "^[a-zA-Z ]+$", "patternerror": "Invalid first name", "valid": true },
        { "value": "", "label": "Middle name", "formname": "middlename", "tags": "input", "type": "text" },
        { "value": "", "label": "Last name", "formname": "lastname", "tags": "input", "type": "text", 'pattern': "^[a-zA-Z ]+$", "patternerror": "Invalid last name", "valid": true },
      ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-3', fields:
        [
          { "value": "", "label": "Contact", "formname": "mobile", "tags": "input", "type": "number", "placeholder": "Enter mobile number", "valid": true, 'pattern': "^[6789]+[0-9]{9}$", "patternerror": "Invalid phonenumber" },
          { "value": "", "label": "Date of birth", "formname": "dob", "tags": "input", "type": "date", "placeholder": "Please fill the date of birth", "valid": true },
          {
            "value": "", "label": "Gender", "formname": "gender", "tags": "select", "valid": true,
            "options": [{ "label": "Male", "value": "male" },
            { "label": "Female", "value": "female" },
            { "label": "Other", "value": "other" }]
          },
          { "value": "", "label": "Alternative email", "formname": "altmail", "tags": "input", "type": "email", "valid": true, "placeholder": "enter your alternative gmail", 'pattern': "^[a-z0-9._%+-]+@gmail+\.com+$", "patternerror": "invalid mail" },
        ]
    },
    { "label": "ACADEMIC DETAILS", "type": "display" },

    {
      tags: 'combine', 'cname': 'col-sm-3', fields:
        [
          {
            "value": "", "label": "Graduation(B.Tech/MBA/MCA) year of joining", "formname": "yearofjoining", "tags": "input", "type": "year", "valid": true, 'pattern': "^[2-9]+[0-9]{3}$", "patternerror": "Invalid year",
            "placeholder": "Enter your b.tech joining year"
          },
          { "value": "", "label": "Eamcet/Ecet rank", "formname": "rank", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your rank" },
          {
            "value": "", "label": "INTERMEDIATE/DIPLOMA", "formname": "intermpc", "valid": true, "tags": "select",
            "options": [{ "label": "Intermediate", "value": "inter" },
            { "label": "Diploma", "value": "diploma" }
            ]
          },
          { "value": "", "label": "Education gap", "formname": "educationgap", "tags": "input", "type": "number", "valid": true, "placeholder": "Fill this field", 'pattern': "^[0-9]", "patternerror": "Invalid Value" },
        ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-3', fields: [
        { "value": "", "label": "Tenth passed out year", "formname": "tenyear", "type": "year", "valid": true, "tags": "input", "placeholder": "Enter your 10th passed out year", 'pattern': "^[2-9]+[0-9]{3}$", "patternerror": "Invalid year" },
        {
          "value": "", "label": "Tenth board", "formname": "tenthboard", "type": "year", "valid": true, "tags": "select",
          "options": [{ "label": "State Board of Secondary Education,AP", "value": "State Board of Secondary Education,AP" },
          { "label": "Central Board of Secondary Education", "value": "Central Board of Secondary Education" },
          { "label": "Indian Certificate of Secondary Education", "value": "Indian Certificate of Secondary Education" }
          ]
        },
        { "value": "", "label": "Tenth school name", "formname": "tenthschoolname", "type": "text", "valid": true, "tags": "input", "placeholder": "Enter your school name", 'pattern': "^[a-zA-Z ]+$", "patternerror": "Invalid school name" },
        { "value": "", "label": "Tenth CGPA", "formname": "tenthcgpa", "type": "number", "valid": true, "tags": "input", "placeholder": "Enter your tenth CGPA", 'pattern': "^[0-9]+\.[0-9]$|| 10", "patternerror": "Invalid CGPA" },
      ]
    },


    {
      tags: 'combine', 'cname': 'col-sm-3', fields: [
        { "value": "", "label": "Inter/Diploma passed out year", "formname": "interyear", "type": "year", "tags": "input", "valid": true, "placeholder": "Enter your passed out year", 'pattern': "^[2-9]+[0-9]{3}$", "patternerror": "Invalid year" },
        {
          "value": "", "label": "Intermediate/Diploma Board", "formname": "interboard", "tags": "select", "valid": true,
          "options": [{ "label": "Board of Intermediate Education,AP", "value": "Board of Intermediate Education,AP" },
          { "label": "Telangana State Board of Intermediate Education", "value": "Telangana State Board of Intermediate Education" },
          { "label": "CBSE 12th Board", "value": "CBSE 12th Board" },
          { "label": "State Board of Technical Education and training(Diploma board)", "value": "State Board of Technical Education and training(Diploma board)" },
          ]
        },
        { "value": "", "label": "Inter/Diploma College name", "formname": "interclgname", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your college name", 'pattern': "^[a-zA-Z ]+$", "patternerror": "Invalid college name" },
        { "value": "", "label": "Inter/Diploma CGPA", "formname": "intercgpa", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your CGPA", 'pattern': "^[0-9]+\.[0-9]$|| 10", "patternerror": "Invalid CGPA" },
      ]
    },


    { "value": "", "label": "ADDRESS", "type": "display" },

    {
      tags: 'combine', 'cname': 'col-sm-6', fields: [
        { "value": "", "label": "Current address", "formname": "currentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter current address", 'pattern': "^[a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%! ]+$", "patternerror": "Invalid address" },
        { "value": "", "label": "Permanent address", "formname": "permanentaddress", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter permanent address", 'pattern': "^[a-zA-Z0-9$&+,:;=?@#|'<>.-^*()%! ]+$", "patternerror": "Invalid address" },
      ]
    },

    { "value": "", "label": "ADDITIONAL INFO", "type": "display" },
    {
      tags: 'combine', 'cname': 'col-sm-3', fields: [
        { "value": "", "label": "Father's name", "formname": "fathername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your father name", 'pattern': "^[A-Za-z. ]+$", "patternerror": "Invalid name" },
        { "value": "", "label": "Mother's name", "formname": "mothername", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your mother name", 'pattern': "^[A-Za-z. ]+$", "patternerror": "Invalid name" },
        { "value": "", "label": "Aadhar number", "formname": "aadharno", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter your aadhar number", 'pattern': "^[1-9][0-9]{11}$", "patternerror": "Invalid Aadhar number" },
        { "value": "", "label": "Pan card number", "formname": "panno", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter your pan card number", 'pattern': "^[A-Za-z0-9]+$", "patternerror": "Invalid Pan number" },
      ]
    },

    {
      tags: 'combine', 'cname': 'col-sm-4', fields: [
        {
          "value": "", "label": "Religion", "formname": "religion", "tags": "select", "valid": true,
          "options": [
            { "label": "Hindu", "value": "Hindu" }, { "label": "Muslim", "value": "Muslim" },
            { "label": "Christian", "value": "Christian" }, { "label": "Jain", "value": "Jain" }, { "label": "Sikh", "value": "Sikh" },
          ]
        },
        {
          "value": "", "label": "Caste", "formname": "caste", "tags": "select", "valid": true,
          "options": [
            { "label": "OC", "value": "OC" }, { "label": "BC", "value": "BC" }, { "label": "SC", "value": "SC" }, { "label": "ST", "value": "ST" },
          ]
        },

        {
          "value": "", "label": "Convener quota", "formname": "admissionquota", "tags": "select", "valid": true,
          "options": [
            { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
          ]
        },
      ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-6', fields: [
        {
          "value": "", "label": "Having laptop", "formname": "havinglaptop", "tags": "select", "valid": true,
          "options": [
            { "label": "Yes", "value": "yes" }, { "label": "No", "value": "no" }
          ]
        },
        { "value": "", "label": "Company work experience", "formname": "companyexperience", "type": "number", "tags": "input", "valid": true, "placeholder": "Enter your experience in years", 'pattern': "^[0-9]", "patternerror": "Invalid number" },
      ]
    },
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
  stdallcodedata: any;
  stdallratedata: any;
  stdallquizdata: any;
  stdeachquizrate: any;
  stdeachcoderate: any;
  constructor(private http: HttpClient, private commonservice: CommonService, private router: Router) {
    this.profile = new FormGroup({
      profilepic: new FormControl(""),
    });

    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('studentmail') }).subscribe(
      (res: any) => {
        this.data = res;
        // console.log("ressssssssssssssssssssssss", res)

        res.data.sgpa.forEach((e: any) => {
          // console.log(e, "hgfuyfiyfiyfiyfiygfiy")
          this.sgpa.push(Object.values(e[0]))
        });
        this.data.data.yearofjoining = parseInt(res.data.yearofjoining);
        this.data.data.profilepic == '' ? this.data.data.profilepic = "../../../../assets/user.png" : null;
        this.image = this.data.data.profilepic
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

    // this.commonservice.postrequest('http://localhost:4000/Dashboard/allcodequiztestratings', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
    //   (res: any) => {
    //     console.log("res.data",res.data)
    //   })

    this.commonservice.postrequest('http://localhost:4000/Dashboard/stdprofilerating', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem("studentmail") }).subscribe(
      (res: any) => {
        // console.log("res.data", res)
        this.stdallcodedata = res.stdallcodedata
        this.stdallquizdata = res.stdallquizdata
        this.stdallratedata = res.stdallratedata
        this.stdeachcoderate = res.stdeachcoderate
        this.stdeachquizrate = res.stdeachquizrate
      })

  }
  base64textString: any = ''
  ngOnInit(): void {
    let form: any = {}
    this.studentform.forEach((e: any) => {
      if (e.tags == "combine") {
        e.fields.forEach((i: any) => {
          (i.valid) ? form[i.formname] = new FormControl(i.value, [Validators.required, Validators.pattern(i.pattern)]) :
            form[i.formname] = new FormControl(i.value);
        });
      }
      else {
        (e.valid) ? form[e.formname] = new FormControl(e.value, Validators.required) :
          form[e.formname] = new FormControl(e.value);
      }

      this.studentForm = new FormGroup(form);

    });
    this.fillform()
  }

  downloadofferPdf(a: any, b: any) {
    const source = `data:application/pdf;base64,${a}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${sessionStorage.getItem('mail')}${b}.pdf`
    link.click();
  }

  // handleFileSelect(evt: any) {
  //   var files = evt.target.files;
  //   var file = files[0];
  //   console.log('cjhd cjjc')
  //   if (files && file) {
  //     var reader = new FileReader();

  //     reader.onload = this._handleReaderLoaded.bind(this);

  //     reader.readAsBinaryString(file);
  //   }
  // }



  // _handleReaderLoaded(readerEvt: any) {
  //   console.log('jbdcisdbcvi')
  //   var binaryString = readerEvt.target.result;
  //   this.base64textString = btoa(binaryString);
  //   console.log("heloooooo")
  //   console.log(btoa(binaryString));
  // }

  // onsubmit() {
  //   this.profile.value.profilepic = this.base64textString
  //   this.imageUrl = 'data:image/png;base64,' + this.profile.value.profilepic;
  //   //this.toReturnImage=atob(this.form.value.image);
  //   console.log("submittedd")
  //   console.log(this.data)
  //   this.data.data.data.profilepic = this.imageUrl
  //   console.log(this.data.data)
  //   // console.log(this.toReturnImage)
  //   this.commonservice.postrequest("Studentdata/updatestudentdatac",
  //     this.data.data.data.profilepic).subscribe(
  //       res => {

  //         console.log(res);
  //       })

  // }

  image = "../../../../assets/user.png";
  handleFileSelect(evt: any) {
    var reader = new FileReader;
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload = (event: any) => {
      this.image = event.target.result;
      this.data.data.profilepic = this.image;
      // console.log(this.data.data.profilepic)
    }
    this.commonservice.postrequest('http://localhost:4000/Studentdata/updatestudentdatac', this.data.value).subscribe(
      (res: any) => {
      })
    evt.target.value = "";
  }

  // verify() {
  //   this.data.data.verified = 'yes'
  //   this.commonservice.postrequest('http://localhost:4000/Studentdata/updateverified', this.data.data).subscribe(
  //     (res: any) => { this.data.data = res.data; console.log(this.data) },
  //     (err: any) => console.log(err)
  //   );
  // }

  // resubmit() {
  //   this.data.data.verified = 'no'
  //   this.commonservice.postrequest('http://localhost:4000/Studentdata/askfreeze', this.data.data).subscribe(
  //     (res: any) => { this.data.data = res.data; },
  //     (err: any) => console.log(err)
  //   );
  // }

  // freeze() {
  //   this.data.data.freeze = 'yes';
  //   this.commonservice.postrequest('http://localhost:4000/Studentdata/askfreeze', this.data.data).subscribe(
  //     (res: any) => { this.data.data = res.data; },
  //     (err: any) => console.log(err)
  //   );
  // }

  // unfreeze() {
  //   this.data.data.freeze = 'no'
  //   this.commonservice.postrequest('http://localhost:4000/Studentdata/askunfreeze', this.data.data).subscribe(
  //     (res: any) => { this.data.data = res.data; },
  //     (err: any) => console.log(err)
  //   );
  // }

  // accept(c: any, d: any) {
  //   c.verified = d;
  //   this.commonservice.postrequest('http://localhost:4000/notification/updatenotifications', c).subscribe(
  //     (res: any) => {
  //       this.notdat = this.notdat - 1
  //     },
  //     (err: any) => console.log(err)
  //   );
  // }


  fillform() {
    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', {
      organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('studentmail')
    }).subscribe(
      (res: any) => {
        this.data1 = res; res.data.yearofjoining = parseInt(res.data.yearofjoining); if (this.data1.data.resume == '') {
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

  // save() {
  //   this.edit = !this.edit
  //   this.studentformvalue = true;
  //   if (this.studentForm.status == 'VALID') {
  //     let finaldat: any = []
  //     this.fieldsarr.forEach((element: any) => {
  //       if (this.studentForm.value[element] != this.data1.data[element] && element != 'rollnumber' && element != 'aadhar') {
  //         console.log(this.studentForm.value[element], this.data1.data[element])
  //         finaldat.push({
  //           'rollnumber': this.data1.data.rollnumber, 'mail': this.data1.data.mail,
  //           'fullname': this.data1.data.firstname + ' ' + this.data1.data.middlename + ' ' + this.data1.data.lastname,
  //           prev: this.data1.data[element], current: this.studentForm.value[element], field: element, verified: 'notyet', date: new
  //             Date(), organisation_id: sessionStorage.getItem('organisation_id'),
  //           verifiedby: ''
  //         })
  //       }
  //     });


  //     if (finaldat.length == 0) {
  //       alert('successfully saved');
  //       this.router.navigate(['student/profile'])
  //     }

  //     else {
  //       this.commonservice.postrequest('http://localhost:4000/notification/postnotifications', finaldat).subscribe(
  //         (res1: any) => {
  //           console.log(res1)
  //           alert('successfully saved');
  //           this.router.navigate(['student/profile'])
  //         },
  //         (err1: any) => { })
  //     }
  //   }
  // }

  close() {
    this.edit = !this.edit
  }

}
