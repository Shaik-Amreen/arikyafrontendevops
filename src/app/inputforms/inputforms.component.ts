import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-inputforms',
  templateUrl: './inputforms.component.html',
  styleUrls: ['./inputforms.component.css']
})
export class InputformsComponent implements OnInit {

  @Input('formdata') formdata: any = [];
  @Input('formgroupdata') formgroupdata: FormGroup



  constructor() { }

  submit() {
    // console.log('jhdsvcbhsfivhhkv')
    return this.formgroupdata
  }
  ngOnInit(): void {
  }

}
