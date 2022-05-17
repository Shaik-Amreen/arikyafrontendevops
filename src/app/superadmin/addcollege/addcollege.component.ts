import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-addcollege',
  templateUrl: './addcollege.component.html',
  styleUrls: ['./addcollege.component.css']
})
export class AddcollegeComponent implements OnInit {

  coldata: FormGroup;

  constructor(private http: HttpClient, private commonservice: CommonService) {
    this.coldata = new FormGroup({
      organisation_id: new FormControl("", Validators.required),
      organisation: new FormControl("", Validators.required),
      date: new FormControl(new Date(), Validators.required),
      role: new FormControl("admin"),
      mail: new FormControl("", Validators.required),
      access: new FormControl({ "admin": [], "students": [], "faculty": [] }, Validators.required),
      adminmails: new FormControl([], Validators.required)
    });

  }
  ngOnInit(): void {
  }

  save() {
    this.commonservice.postrequest("data/postcollegeaccess",
      this.coldata.value).subscribe(
        (res: any) => {
          this.coldata = res
          alert("successfylly saved")
        },
        (err: any) => console.log(err)
      )
  }
}