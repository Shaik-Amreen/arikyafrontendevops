import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  feedback: FormGroup
  constructor(private commonservice: CommonService, private route: Router) {
    this.feedback = new FormGroup({
      'name': new FormControl('', Validators.required),
      'mail': new FormControl('', Validators.required),
      'feed': new FormControl('', Validators.required)
    })
  }

  errmsg = ''

  send() {
    if (this.feedback.status == 'VALID') {
      this.commonservice.postrequest('http://localhost:4000/feedback', this.feedback.value).subscribe(
        (res: any) => {
          this.route.navigate(['/arikya'])
        })
    }
    else {
      this.errmsg = 'please fill all the fields'
    }

  }

  ngOnInit(): void {
  }



}
