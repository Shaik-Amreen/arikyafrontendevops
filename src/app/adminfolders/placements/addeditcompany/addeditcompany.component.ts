import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-addeditcompany',
  templateUrl: './addeditcompany.component.html',
  styleUrls: ['./addeditcompany.component.css']
})
export class AddeditcompanyComponent implements OnInit {
  addcompanyform: any = FormGroup;
  companyform = false;
  sm = false;
  editMode = false

  addcompany: any[] = [

    { 'formname': 'type', value: 'college' },
    {
      tags: 'combine', 'cname': 'col-sm-6', fields: [

        { "tags": "input", "type": "text", "valid": true, 'label': "Placement cycle name", 'formname': 'placementcyclename', value: sessionStorage.getItem("placementcyclename") },
        { "value": "", "label": "Company", "formname": "companyname", "tags": "input", "type": "text", "placeholder": "Start typing company name...", "valid": true, 'pattern': "^[A-Za-z ]+$", "patternerror": "Invalid company name", validations: [Validators.required, Validators.pattern("^[A-Za-z ]+$")] },


      ]
    },
    { 'formname': 'code', value: '' },
    { 'formname': 'companylogo' },
    {
      tags: 'combine', 'cname': 'col-sm-6', fields: [

        { "value": "", "label": "Company Profile Title", "formname": "companyprofiletitle", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter company profile title", "patternerror": "Invalid profile title", validations: [Validators.required, Validators.pattern("^[A-Za-z ]+$")] },
        {
          "value": "", "label": "Company Profile Source", "formname": "companyprofilesource", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "campus placements", "value": "campus placements" },
            { "label": "external officer", "value": "external officer" },
            { "label": "PPO", "value": "ppo" }
          ]
        }
      ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-6', 'fields': [
        { "value": "", "label": "Company Location", "formname": "companylocation", "tags": "input", "type": "text", "valid": true, "placeholder": "Company location", "patternerror": "Enter valid location", validations: [Validators.required, Validators.pattern("^[A-Za-z ]+$")] },
        { "value": "", "label": "Company Contact", "formname": "companycontact", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter company contact number", "patternerror": "Invalid phonenumber", validations: [Validators.required, Validators.minLength(10), Validators.maxLength(15)] },

      ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-6', 'fields': [
        {
          "value": "", "label": "Position Type", "formname": "positiontype", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "full time", "value": "full time" }, { "label": "internship", "value": "internship" }, { "label": "part time", "value": "part time" },
          ]
        },
        {
          "value": "", "label": "Category", "formname": "category", "tags": "select", "valid": true, validations: [Validators.required],
          "options": [
            { "label": "Level 1 - CATEGORY A", "value": "Level 1 - CATEGORY A" }, { "label": "Level 2 - CATEGORY B", "value": "Level 2 - CATEGORY B" },
            { "label": "Level 3 - CATEGORY C", "value": "Level 3 - CATEGORY C" }, { "label": "Level 4 - CATEGORY D", "value": "Level 4 - CATEGORY D" },
            { "label": "Level 5 - CATEGORY E", "value": "Level 5 - CATEGORY E" }
          ]
        }]
    },
    {
      tags: 'combine', 'cname': 'col-sm-6', fields: [
        { "formname": "dateofvisit", "value": "not updated", "tags": "input", type: "date", label: "Date of visit" },
        { "value": "", "label": "Company Function", "formname": "companyfunction", "tags": "input", "type": "text", "valid": true, "placeholder": "Company function", "patternerror": "Invalid company function", validations: [Validators.required] },
      ]
    },
    // { "value": "", "label": "Company Function", "formname": "companyfunction", "tags": "input", "type": "text", "valid": true, "placeholder": "Company function", "patternerror": "Invalid company function", validations: [Validators.required, Validators.pattern("^[A-Za-z0-9 ]+$")] },

    { "value": "", "label": "Stipend", "tags": "input", formname: "stipend", "type": "checkbox" },
    {
      tags: 'combine', subof: 'stipend', 'cname': 'col-sm-3', 'fields': [
        {
          "value": "", "label": "Interval", "tags": "select", "formname": "interval",
          "options": [
            { "label": "ANNUM", "value": "annum" }, { "label": "MONTH", "value": "month" }
          ]
        },
        {
          "value": "", "label": "Currency", "tags": "select", "formname": "currency",
          "options": [
            { "label": "INR", "value": "INR" }, { "label": "USD", "value": "USD" }
          ]
        },
        { "value": "", "label": "Minimum", "tags": "input", "formname": "minimum", "type": "number" },
        { "value": "", "label": "Maximum", "tags": "input", "formname": "maximum", "type": "number" },]
    },


    {
      tags: 'combine', 'cname': 'col-sm-3 ', 'head': 'ELIGIBILITY CRITERIA', 'fields': [
        { "value": "", "label": "10th", "type": "number", "tags": "input", "formname": "ten", "valid": true, "placeholder": "percentage", "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(99), Validators.min(40)] },
        { "value": "", "label": "12th", "type": "number", "tags": "input", "formname": "inter", "valid": true, "placeholder": "percentage", "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(99), Validators.min(40)] },
        { "value": "", "label": "Diploma", "type": "number", "tags": "input", "formname": "diploma", "valid": true, "placeholder": "percentage", "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(99), Validators.min(40)] },
        { "value": "", "label": "Undergraduate", "type": "number", "tags": "input", "formname": "undergraduate", "valid": true, "placeholder": "percentage", "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(99), Validators.min(40)] },
      ]
    },
    {
      tags: 'combine', 'cname': 'col-sm-6 ', 'fields': [
        { "value": "", "label": "Ongoing Backlogs", "formname": "ongoingbacklogs", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter ongoing backlogs", 'pattern': '^[0-9]', "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(10), Validators.min(0)] },
        { "value": "", "label": "Total Backlogs", "formname": "totalbacklogs", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter total backlogs", 'pattern': '^[0-9]', "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(10), Validators.min(0)] },
      ]
    },
    { 'formname': 'eligibilties', value: [] },
    { label: 'Gender', formname: 'gender', value: 'malefemale', tags: "select", options: [{ label: 'All are eligible', value: 'malefemale' }, { label: 'Only male are eligible', value: 'male' }, { label: 'Only female are eligible', value: 'female' }] }
    , { formname: 'hiringworkflow', value: [] },
    { "value": "", "label": "Company Description", "type": "text", "tags": "textarea", "formname": "companydescription", "valid": true, "patternerror": "Enter valid description", validations: [Validators.required] },
    { "formname": "gender", "value": "malefemale" },
    { "formname": "status", "value": "not updated" },
    // { "formname": "dateofvisit", "value": "not updated" },
    { "formname": "deadline", "value": "not updated" },
    { "formname": "created", "value": sessionStorage.getItem('firstname') },
    { "formname": "createdon", "value": new Date() },
    { "formname": "updatedon", "value": "" },
    { "formname": "updatedby", "value": "" },
    { "formname": "organisation_id", "value": sessionStorage.getItem('organisation_id') },

  ]
  hiringworkflowdata: any = ['Pre-placement talk', 'Resume shortlisting', 'Written test', 'Group Discussion', 'Technical Interview', 'HR Interview', 'Online test']
  suggestionsMode = true; errorMsg = ''; addCompanyForm: FormGroup; finaldept: any; applyAllMode = false;
  stipendMode = true;
  data: any = []
  dept = [{ department: 'civil', ff: 'Civil Engineering (CIVIL)', course: 'btech' },
  { department: 'cst', ff: 'Computer Science and Technology (CST)', course: 'btech' },
  { department: 'cse', ff: ' Computer Science and Engineering (CSE)', course: 'btech' },
  { department: 'csit', ff: 'Computer Science and Information Technology (CSIT)', course: 'btech' },
  { department: 'ece', ff: 'Electronics and Communication Engineering (ECE)', course: 'btech' },
  { department: 'eee', ff: 'Electrical and Electronics Engineering (EEE)', course: 'btech' },
  { department: 'it', ff: 'Information Technology (IT)', course: 'btech' },
  { department: 'mech', ff: ' Mechanical Engineering (MECH)', course: 'btech' }]
  mbadept = [{ department: 'mba', ff: 'Master of Business Administration (MBA)', course: 'mba' }]
  mcadept = [{ department: 'mca', ff: ' Master of Computer Applications (MCA)', course: 'mca' }]

  hiringflowforsub: FormGroup;

  constructor(private router: Router, private commonservice: CommonService) {
    if (sessionStorage.getItem('editcompany') == 'yes') {
      this.editMode = true
    }
    else {
      this.editMode = false
    }
    let hireflowform: any = {}
    this.hiringworkflowdata.forEach((e: any) => {
      hireflowform[e] = new FormControl('')
    });
    this.hiringflowforsub = new FormGroup(hireflowform)
    let form: any = {}
    this.addcompany.forEach((e: any) => {
      if (e.formname == 'hiringworkflow' || e.formname == 'eligibilties') {
        form[e.formname] = new FormArray([])
      }
      else {
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
      }
      this.addcompanyform = new FormGroup(form)
    })

    //for suggestions of company companyname
    this.commonservice.postrequest('http://localhost:4000/company/findallcompany', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => this.data = res,
      (err: any) => console.log(err)
    )

  }

  editStatus = "Add company"
  suggestions = true



  callInt(d: any) {


    this.fillForm(d)

  }
  ngOnInit(): void {
    if (sessionStorage.getItem('editcompany') == "yes") {
      this.editStatus = "Edit company"
      this.fillForm({
        'organisation_id': sessionStorage.getItem('organisation_id'), 'placementcyclename': sessionStorage.getItem('placementcyclename'),
        'companyname': sessionStorage.getItem('companyname')
      })
    }
  }


  private companyForm() {
    this.addCompanyForm = new FormGroup(
      {
        'placementcyclename': new FormControl(sessionStorage.getItem("placementcyclename")),
        'companyname': new FormControl('', Validators.required),
        'companyprofiletitle': new FormControl('', Validators.required),
        'companycontact': new FormControl('', Validators.required),
        'companyprofilesource': new FormControl('', Validators.required),
        'companylocation': new FormControl('', Validators.required),
        'companylogo': new FormControl(''),
        'positiontype': new FormControl('', Validators.required),
        'companyfunction': new FormControl('', Validators.required),
        'category': new FormControl('', Validators.required),
        'interval': new FormControl(''),
        'currency': new FormControl(''),
        'minimum': new FormControl(''),
        'maximum': new FormControl(''),
        'hiringworkflow': new FormArray([]),
        'ten': new FormControl('', Validators.required),
        'inter': new FormControl('', Validators.required),
        'diploma': new FormControl('', Validators.required),
        'undergraduate': new FormControl('', Validators.required),
        'companydescription': new FormControl('', Validators.required),
        'eligibilties': new FormArray([]),
        'gender': new FormControl('malefemale'),
        'status': new FormControl('not updated'),
        'created': new FormControl(sessionStorage.getItem('firstname')),
        'createdon': new FormControl(new Date()),
        'dateofvisit': new FormControl('not updated'),
        'deadline': new FormControl('not updated'),
        'backlogs': new FormControl('no'),
        'minbl': new FormControl(''),
        'maxbl': new FormControl(''),
        'ongoingbacklogs': new FormControl('', Validators.required),
        'totalbacklogs': new FormControl('', Validators.required),
        'updatedon': new FormControl(''),
        'updatedby': new FormControl(''),
        'organisation_id': new FormControl(sessionStorage.getItem('organisation_id'))

      }
    )
  }

  deptstoredata: any = []
  alreadydata: any = []
  fillForm(d: any) {
    this.suggestions = false
    this.commonservice.postrequest('http://localhost:4000/company/findcompany', d).subscribe(
      (res: any) => {

        for (let i of res.companydetails.eligibilties) {
          this.addcompanyform.value.eligibilties.push(i[0]);
          this.deptstoredata.push(i[0].ff)
        }

        this.commonservice.postrequest('http://localhost:4000/placementstatus/getHiring', d).subscribe(
          (response: any) => {

            this.alreadydata = response
            console.log(response, ";;;;;;;;;;;;;")

          })

        let uniquedata = 0;
        this.dept.forEach(e => (!this.deptstoredata.includes(e.ff) ? uniquedata++ : null))
        if (uniquedata == 0) { this.applyAllMode = true }
        for (let i of res.companydetails.hiringworkflow) {
          // console.log(i)
          let ki = i[0].level
          // console.log(ki)
          this.addcompanyform.value.hiringworkflow.push(ki)
          this.hiringflowforsub.controls[ki].setValue(i[0].sub)
        }

        // console.log("this.addcompanyform.value eligible", this.addcompanyform.value)


        this.suggestionsMode = false;
        if (res.companydetails.interval == '') { this.stipendMode = true; this.changeStipendMode() }

        else { this.stipendMode = true }
        this.addcompanyform.controls.companyname.setValue(res.companydetails.companyname);
        this.addcompanyform.controls.companyprofiletitle.setValue(res.companydetails.companyprofiletitle);
        this.addcompanyform.controls.companycontact.setValue(res.companydetails.companycontact);
        this.addcompanyform.controls.companyprofilesource.setValue(res.companydetails.companyprofilesource);
        this.addcompanyform.controls.companylocation.setValue(res.companydetails.companylocation);
        this.addcompanyform.controls.positiontype.setValue(res.companydetails.positiontype);
        this.addcompanyform.controls.companyfunction.setValue(res.companydetails.companyfunction);
        this.addcompanyform.controls.category.setValue(res.companydetails.category);
        this.addcompanyform.controls.interval.setValue(res.companydetails.interval);
        this.addcompanyform.controls.currency.setValue(res.companydetails.currency);
        this.addcompanyform.controls.minimum.setValue(res.companydetails.minimum);
        this.addcompanyform.controls.maximum.setValue(res.companydetails.maximum);
        this.addcompanyform.controls.ten.setValue(res.companydetails.ten);
        this.addcompanyform.controls.inter.setValue(res.companydetails.inter);
        this.addcompanyform.controls.diploma.setValue(res.companydetails.diploma);
        this.addcompanyform.controls.undergraduate.setValue(res.companydetails.undergraduate);
        this.addcompanyform.controls.companydescription.setValue(res.companydetails.companydescription);
        this.addcompanyform.controls.gender.setValue(res.companydetails.gender);
        this.addcompanyform.controls.ongoingbacklogs.setValue(res.companydetails.ongoingbacklogs);
        this.addcompanyform.controls.totalbacklogs.setValue(res.companydetails.totalbacklogs);
        this.addcompanyform.controls.dateofvisit.setValue(res.companydetails.dateofvisit);
        this.addcompanyform.controls.companylogo.setValue(res.companydetails.companylogo);
        this.addcompanyform.controls.deadline.setValue(res.companydetails.deadline);
        res.companydetails.companylogo != "" ? this.image = res.companydetails.companylogo : this.image = "../../../../assets/user.png";
      },
      (err: any) => console.log(err)
    );


    // console.log(this.addcompanyform.value)
  }
  // ngOnDestroy(): void {
  //   this.editor.destroy();
  // }


  changeStipendMode() {
    this.sm = true;
    this.stipendMode = !this.stipendMode
    // console.log("this.stipendMode", this.stipendMode)
    let a = ['interval', 'currency', 'minimum', 'maximum']
    if (!this.stipendMode) {
      a.forEach((key: any) => {
        this.addcompanyform.controls[key].clearValidators();
        this.addcompanyform.controls[key].setErrors(null);
        this.addcompanyform.controls[key].setValidators(null);
      });
    }
    else {
      a.forEach((key: any) => {
        this.addcompanyform.get(key).setValidators([Validators.required]);
      });
    }
    // console.log(this.addcompanyform.status, "12222", this.addcompanyform.value)
    // Object.keys(this.addcompanyform.controls).forEach(key => {
    //   const controlErrors = this.addcompanyform.get(key).errors;
    //   if (controlErrors != null) {
    //     Object.keys(controlErrors).forEach(keyError => {
    //       console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
    //     });
    //   }
    // });
  }

  changeSelected() {
    this.applyAllMode = !this.applyAllMode;
    if (this.applyAllMode == false) {
      let temp = this.deptstoredata.filter((s: any) => !this.dept.some((e: any) => s == e.ff))
      this.deptstoredata = temp
    }
  }

  addlevel(l: any) {
    this.addcompanyform.value.hiringworkflow.push(l)
  }

  removelevel(i: number, level: any) {
    this.addcompanyform.value.hiringworkflow.splice(i, 1)
  }

  close() { this.router.navigate(["/admin/placements/placementdetails"]) }

  changeeligibilties(depts: any) {

    if (this.deptstoredata.includes(depts.ff)) {
      let index = this.deptstoredata.findIndex((s: any) => s == depts.ff);
      // console.log(index)
      if (index != -1) {

        this.deptstoredata.splice(index, 1)
      }
      // console.log(this.deptstoredata)
    }
    else {

      this.deptstoredata.push(depts.ff)
    }
  }

  image = "../../../../assets/user.png";
  handleFileSelect(evt: any) {
    var reader = new FileReader;
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload = (event: any) => {
      this.image = event.target.result;
      this.addcompanyform.controls.companylogo.setValue(this.image);
      // console.log(this.addcompanyform.value)
    }
    evt.target.value = "";
  }

  display = false

  submitCompany() {
    this.companyform = true;
    // console.log(this.addcompanyform.status, this.addcompanyform.errors)
    Object.keys(this.addcompanyform.controls).forEach(key => {
      const controlErrors = this.addcompanyform.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });

    if (this.addcompanyform.status == "VALID") {
      if (!this.stipendMode) {
        this.addcompanyform.get('interval').setValue("")
        this.addcompanyform.get('currency').setValue("")
        this.addcompanyform.get('minimum').setValue("")
        this.addcompanyform.get('maximum').setValue("")
      }
      if (this.applyAllMode == true) {
        this.dept.forEach(e => {
          // console.log(e)
          if (!this.deptstoredata.includes(e.ff)) {
            this.deptstoredata.push(e.ff)
          }
        })
      }
      this.addcompanyform.value.eligibilties = []
      // console.log("this.addcompanyform.value.eligibilties", this.addcompanyform.value.eligibilties)
      let tempdepts = [...this.dept, ...this.mbadept, ...this.mcadept]
      tempdepts.forEach((e: any) => {
        if (this.deptstoredata.includes(e.ff)) {
          this.addcompanyform.value.eligibilties.push(e)
        }
      })

      if (this.deptstoredata.length == 0) { this.errorMsg = 'Fill department eligibility'; }
      else {
        let templevel = this.addcompanyform.value.hiringworkflow;
        this.addcompanyform.value.hiringworkflow = [];
        // console.log(this.addcompanyform.value.eligibilties, this.addcompanyform.value)

        for (let i of templevel) {
          let temp = { level: i, sub: this.hiringflowforsub.value[i] }
          this.addcompanyform.value.hiringworkflow.push(temp)
        }

        let status = (sessionStorage.getItem('editcompany') == "yes") ? "modified " : 'added';
        let url = (sessionStorage.getItem('editcompany') == "yes") ? 'company/updatecompany' : 'company/createcompany';
        let temp = {
          date: new Date(), college_id: sessionStorage.getItem('college_id'), doneby: sessionStorage.getItem('mail'),
          firstname: sessionStorage.getItem('firstname'),
          reason: ` ${status} ${this.addcompanyform.value.companyname} profile in ${this.addcompanyform.value.placementcyclename} `
        }
        // console.log("url,this.addcompanyform.value", url, this.addcompanyform.value)
        this.commonservice.postrequest(url, this.addcompanyform.value).subscribe(
          (res: any) => {
            this.commonservice.postrequest('http://localhost:4000/notification/postadminoti', temp).subscribe(
              (res1: any) => {
                // console.log(res)
                if (res.message == 'success') { this.router.navigate(['/admin/placements/placementsdetails']); sessionStorage.setItem("successpopup", 'success') }
                else { this.errorMsg = 'Company already exists in this cycle' }
              },
              (err1: any) => console.log(err1)
            );
          },
          (err: any) => console.log(err)
        );
      }
    }

    else {
      let a = '';
      Object.keys(this.addcompanyform.controls).forEach(key => {
        const controlErrors = this.addcompanyform.get(key).errors;
        if (controlErrors != null && a == '') {
          a = key
          // console.log("key",a)
          document.getElementById(key)?.scrollIntoView({ behavior: "smooth", block: 'center' });
        }
      });

      // const firstElementWithError = document.querySelector('.ng-invalid');
      // if (firstElementWithError) {
      //   firstElementWithError.scrollIntoView({ behavior: 'smooth',block:'center' });
      // }

      this.display = true
      // window.scroll(0,0)
      setTimeout(() => { this.display = false }, 5000)
    }
  }
  config2: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: 'auto',
    placeholder: 'start typing company description',
    translate: 'no',
    sanitize: true,
    outline: true,
    enableToolbar: true,
    showToolbar: true,
    toolbarPosition: 'bottom',
    defaultFontName: '',
    defaultFontSize: '',
    defaultParagraphSeparator: '',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  };

  initialize() {
    this.addcompany = [

      { 'formname': 'type', value: 'college' },
      { 'formname': 'placementcyclename', value: sessionStorage.getItem("placementcyclename") },
      { 'formname': 'code', value: '' },
      { "value": "", "label": "Company", "formname": "companyname", "tags": "input", "type": "text", "placeholder": "Start typing company name...", "valid": true, 'pattern': "^[A-Za-z ]+$", "patternerror": "Invalid company name", validations: [Validators.required, Validators.pattern("^[A-Za-z ]+$")] },
      { 'formname': 'companylogo' },
      {
        tags: 'combine', 'cname': 'col-sm-6', fields: [

          { "value": "", "label": "Company Profile Title", "formname": "companyprofiletitle", "tags": "input", "type": "text", "valid": true, "placeholder": "Enter company profile title", "patternerror": "Invalid profile title", validations: [Validators.required, Validators.pattern("^[A-Za-z ]+$")] },
          {
            "value": "", "label": "Company Profile Source", "formname": "companyprofilesource", "tags": "select", "valid": true, validations: [Validators.required],
            "options": [
              { "label": "campus placements", "value": "campus placements" },
              { "label": "external officer", "value": "external officer" },
              { "label": "PPO", "value": "ppo" }
            ]
          }
        ]
      },
      {
        tags: 'combine', 'cname': 'col-sm-6', 'fields': [
          { "value": "", "label": "Company Location", "formname": "companylocation", "tags": "input", "type": "text", "valid": true, "placeholder": "Company location", "patternerror": "Enter valid location", validations: [Validators.required, Validators.pattern("^[A-Za-z ]+$")] },
          { "value": "", "label": "Company Contact", "formname": "companycontact", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter company contact number", "patternerror": "Invalid phonenumber", validations: [Validators.required, Validators.minLength(10), Validators.maxLength(15)] },

        ]
      },
      {
        tags: 'combine', 'cname': 'col-sm-6', 'fields': [
          {
            "value": "", "label": "Position Type", "formname": "positiontype", "tags": "select", "valid": true, validations: [Validators.required],
            "options": [
              { "label": "full time", "value": "full time" }, { "label": "internship", "value": "internship" }, { "label": "part time", "value": "part time" },
            ]
          },
          {
            "value": "", "label": "Category", "formname": "category", "tags": "select", "valid": true, validations: [Validators.required],
            "options": [
              { "label": "Level 1 - CATEGORY A", "value": "Level 1 - CATEGORY A" }, { "label": "Level 2 - CATEGORY B", "value": "Level 2 - CATEGORY B" },
              { "label": "Level 3 - CATEGORY C", "value": "Level 3 - CATEGORY C" }, { "label": "Level 4 - CATEGORY D", "value": "Level 4 - CATEGORY D" },
              { "label": "Level 5 - CATEGORY E", "value": "Level 5 - CATEGORY E" }
            ]
          }]
      },
      {
        tags: 'combine', 'cname': 'col-sm-6', fields: [
          { "formname": "dateofvisit", "value": "not updated", "tags": "input", type: "date", label: "Date of visit" },
          { "value": "", "label": "Company Function", "formname": "companyfunction", "tags": "input", "type": "text", "valid": true, "placeholder": "Company function", "patternerror": "Invalid company function", validations: [Validators.required, Validators.pattern("^[A-Za-z0-9/ ]+$")] },
        ]
      },
      { "value": "", "label": "Stipend", "tags": "input", formname: "stipend", "type": "checkbox", },
      {
        tags: 'combine', subof: 'stipend', 'cname': 'col-sm-3', 'fields': [
          {
            "value": "", "label": "Interval", "tags": "select", "formname": "interval", "valid": true, validations: [Validators.required],
            "options": [
              { "label": "ANNUM", "value": "annum" }, { "label": "MONTH", "value": "month" }
            ]
          },
          {
            "value": "", "label": "Currency", "tags": "select", "formname": "currency", "valid": true, validations: [Validators.required],
            "options": [
              { "label": "INR", "value": "INR" }, { "label": "USD", "value": "USD" }
            ]
          },
          { "value": "", "label": "Minimum", "tags": "input", "formname": "minimum", "type": "number", "valid": true, validations: [Validators.required], },
          { "value": "", "label": "Maximum", "tags": "input", "formname": "maximum", "type": "number", "valid": true, validations: [Validators.required], },]
      },


      {
        tags: 'combine', 'cname': 'col-sm-3 ', 'head': 'ELIGIBILITY CRITERIA', 'fields': [
          { "value": "", "label": "10th", "type": "number", "tags": "input", "formname": "ten", "valid": true, "placeholder": "percentage", "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(90), Validators.min(40)] },
          { "value": "", "label": "12th", "type": "number", "tags": "input", "formname": "inter", "valid": true, "placeholder": "percentage", "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(90), Validators.min(40)] },
          { "value": "", "label": "Diploma", "type": "number", "tags": "input", "formname": "diploma", "valid": true, "placeholder": "percentage", "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(90), Validators.min(40)] },
          { "value": "", "label": "Undergraduate", "type": "number", "tags": "input", "formname": "undergraduate", "valid": true, "placeholder": "percentage", "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(90), Validators.min(40)] },
        ]
      },
      {
        tags: 'combine', 'cname': 'col-sm-6 ', 'fields': [
          { "value": "", "label": "Ongoing Backlogs", "formname": "ongoingbacklogs", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter ongoing backlogs", 'pattern': '^[0-9]', "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(10), Validators.min(0)] },
          { "value": "", "label": "Total Backlogs", "formname": "totalbacklogs", "tags": "input", "type": "number", "valid": true, "placeholder": "Enter total backlogs", 'pattern': '^[0-9]', "patternerror": "Invalid value", validations: [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.max(10), Validators.min(0)] },
        ]
      },
      { 'formname': 'eligibilties', value: [] },
      // {
      //   "label" : 'Gender', "formname" : 'gender', "value" : 'malefemale', "tags" : "select", "valid" : true, "validations" : [Validators.required],
      //   "options" : [{ "label" : 'All are eligible', "value" : 'malefemale' }, { "label" : 'Only male are eligible', "value" : 'male' }, { "label" : 'Only female are eligible', "value" : 'female' }]
      // }
      {
        label: 'Gender', formname: 'gender', value: 'malefemale', tags: "select",
        options: [{ label: 'All are eligible', value: 'malefemale' }, { label: 'Only male are eligible', value: 'male' }, { label: 'Only female are eligible', value: 'female' }]
      }
      , { formname: 'hiringworkflow', value: [] },
      { "value": "", "label": "Company Description", "type": "text", "tags": "textarea", "formname": "companydescription", "valid": true, "patternerror": "Enter valid description", validations: [Validators.required] },
      { "formname": "gender", "value": "malefemale" },
      { "formname": "status", "value": "not updated" },

      { "formname": "deadline", "value": "not updated" },
      { "formname": "created", "value": sessionStorage.getItem('firstname') },
      { "formname": "createdon", "value": new Date() },
      { "formname": "updatedon", "value": "" },
      { "formname": "updatedby", "value": "" },
      { "formname": "college_id", "value": sessionStorage.getItem('college_id') },

    ]
    this.hiringworkflowdata = ['Pre-placement talk', 'Resume shortlisting', 'Written test', 'Group Discussion', 'Technical Interview', 'HR Interview', 'Online test']
    // console.log("this.hiringflowforsub",this.hiringflowforsub)
    if (this.hiringflowforsub) this.hiringflowforsub.reset()
  }

  callconstructor() {
    this.initialize()
    let hireflowform: any = {}
    this.hiringworkflowdata.forEach((e: any) => {
      hireflowform[e] = new FormControl('')
    });
    this.hiringflowforsub = new FormGroup(hireflowform)
    let form: any = {}
    this.addcompany.forEach((e: any) => {
      if (e.formname == 'hiringworkflow' || e.formname == 'eligibilties') {
        form[e.formname] = new FormArray([])
      }
      else {
        if (e.tags == "combine") {
          e.fields.forEach((i: any) => {
            (i.valid) ? form[i.formname] = new FormControl(i.value, i.validations) :
              form[i.formname] = new FormControl(i.value);
          });
        }
        else {
          // if(form[e.formname]=="stipend"){
          //   console.log("1234567890123456789")
          // }
          (e.valid) ? form[e.formname] = new FormControl(e.value, e.validations) :
            form[e.formname] = new FormControl(e.value);
        }
      }
      this.addcompanyform = new FormGroup(form)
    })

    //for suggestions of company companyname
    this.commonservice.postrequest('http://localhost:4000/company/findallcompany', { college_id: sessionStorage.getItem("college_id") }).subscribe(
      (res: any) => this.data = res,
      (err: any) => console.log(err)
    )
    this.companyForm()
    if (sessionStorage.getItem('editcompany') == "yes") {
      this.editStatus = "Edit company"
      this.fillForm({
        'college_id': sessionStorage.getItem('college_id'), 'placementcyclename': sessionStorage.getItem('placementcyclename'),
        'companyname': sessionStorage.getItem('companyname')
      })
    }
  }

  count: any = 0
  refresh() {
    this.count++
    if (this.count >= 5) {
      this.callconstructor()
    }
  }

}



