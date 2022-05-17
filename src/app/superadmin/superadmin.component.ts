import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {

  show = false; navMode = true;
  content: any =
  [
    { label: "Addcollegedata", rlink: "/superadmin/addcollege" },
    { label: "collegesdata", rlink: "/superadmin/collegesdata"},
  
  ]

  constructor() { }

  ngOnInit(): void {
  }
  changeNav() {
    this.navMode = !this.navMode
  }


}