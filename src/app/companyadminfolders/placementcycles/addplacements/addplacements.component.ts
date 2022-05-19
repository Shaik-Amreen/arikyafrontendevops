import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-addplacements',
  templateUrl: './addplacements.component.html',
  styleUrls: ['./addplacements.component.css']
})
export class AddplacementsComponent implements OnInit {

  formgroupdata: FormGroup;
  placementdata = false;
  errmsg = ''; elarr: any = []; nodata = false

  constructor(private router: Router, private commonservice: CommonService) {


    if (sessionStorage.getItem('editplacements') == 'yes') {
      this.commonservice.postrequest('http://localhost:4000/Placement/findonePlacement', { organisation_id: sessionStorage.getItem('organisation_id'), placementcyclename: sessionStorage.getItem('placementcyclename') }).subscribe(
        (res: any) => {
          res = res.docs
          let form: any = {}
          this.formdata.forEach((e: any) => {
            if (e.tags == "combine") {
              e.fields.forEach((i: any) => {
                (i.valid) ? form[i.formname] = new FormControl(res[i.formname], i.validations) :
                  form[i.formname] = new FormControl(res[i.formname]);
              });
            }
            else {
              (e.valid) ? form[e.formname] = new FormControl(res[e.formname], e.validations) :
                form[e.formname] = new FormControl(res[e.formname]);
            }
          });
          this.nodata = true
          this.elarr = res.batch.flat(1);
          form['batch'] = new FormArray([])
          this.formgroupdata = new FormGroup(form)
          // console.log(this.formgroupdata)
          this.elarr.forEach((s: any) => {
            // this.formgroupdata.value.batch.push(s)
            // console.log(s.batchvalue);
            (<FormArray>this.formgroupdata.get('batch')).push(new FormGroup({
              'batchvalue': new FormControl(s.batchvalue, Validators.required),
            }))
          });
          // console.log(this.formgroupdata, 'jcnijebcihebvi')
        }
      );
    }
    else {
      let form: any = {}
      this.formdata.forEach((e: any) => {
        if (e.tags == "combine") {
          e.fields.forEach((i: any) => {
            (i.valid) ? form[i.formname] = new FormControl(i.value, [Validators.required, Validators.pattern(i.pattern)]) :
              form[i.formname] = new FormControl(i.value);
          });
        }
        else {
          (e.valid) ? form[e.formname] = new FormControl(e.value, [Validators.required, Validators.pattern(e.pattern)]) :
            form[e.formname] = new FormControl(e.value);
        }
      });
      this.eligibleFormData = new FormGroup({
        'batchvalue': new FormControl('', Validators.required),
      })
      let eligibleForm = new FormArray([])
      eligibleForm.push(this.eligibleFormData)
      form['batch'] = eligibleForm,
        this.formgroupdata = new FormGroup(form)
      this.nodata = true
    }




  }
  formdata: any[] = [
    { value: '', "label": "Placement Cycle Name", "type": "text", "tags": "input", "formname": "placementcyclename", "valid": true, 'patternerror': 'Invalid placement cycle name', validations: [Validators.required, Validators.pattern('^[A-Za-z0-9-^*()%!  ]+$')] },
    { value: sessionStorage.getItem('organisation_id'), formname: 'organisation_id' },
    {
      tags: 'combine', 'cname': 'col-sm-6', Validations: [Validators.required], 'fields': [
        { value: '', "label": "From date", "type": "month", "tags": "input", "formname": "fromdate", "valid": true },
        { value: '', "label": "To date", "type": "month", "tags": "input", "formname": "todate", "valid": true },
      ]
    },
    { "formname": "created", "value": sessionStorage.getItem('organisation_id') },
    { 'formname': 'type', value: 'college' },
    { 'formname': 'code', value: '' },
  ]







  errorMsg = ''

  eligibleFormData: FormGroup

  eligibledates: any = []
  ngOnInit(): void {


    let bch = new Date().getFullYear()
    for (let i = bch - 2; i <= bch + 8; i++) {
      this.eligibledates.push(i)
    }
  }


  get controls() {

    return (<FormArray>this.formgroupdata.get('batch')).controls;
  }

  addEligible() {
    (<FormArray>this.formgroupdata.get('batch')).push(new FormGroup({
      'batchvalue': new FormControl("", Validators.required),
    }))
  }


  deleteEligible(id: number) {
    (<FormArray>this.formgroupdata.get('batch')).removeAt(id)
  }



  onSubmit() {
    // console.log(this.eligibleFormData);
    this.placementdata = true;
    if (sessionStorage.getItem('editplacements') == 'yes') {
      this.commonservice.postrequest('http://localhost:4000/Placement/updatePlacement', this.formgroupdata.value).subscribe(
        (res: any) => {
          sessionStorage.removeItem('editplacements')
          this.router.navigate(['/admin/placements'])
        },
        (err: any) => this.errorMsg = 'err'
      );
    }
    else {
      this.commonservice.postrequest('http://localhost:4000/Placement/createPlacement', this.formgroupdata.value).subscribe(
        (res: any) => {
          if (res.message == 'success') { this.router.navigate(['/admin/placements']) }
          else { this.errorMsg = 'Placement already exists' }
        },
        (err: any) => this.errorMsg = 'Placement already exists'
      );
    }
  }

  close() {
    this.router.navigate(['/admin/placements'])
  }

}
