

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-faculty-codetopicslist',
  templateUrl: './faculty-codetopicslist.component.html',
  styleUrls: ['./faculty-codetopicslist.component.css']
})
export class FacultyCodetopicslistComponent implements OnInit {


  nodata: any = false
  codetopics: any = []; len1: any; type: any = '';
  constructor(private commonservice: CommonService, private router: Router) {
    this.commonservice.postrequest('http://localhost:4000/Practice/gettopics', { organisation_id: sessionStorage.getItem("organisation_id"), type: 'code' }).subscribe(
      (res1: any) => { this.codetopics = res1; this.len1 = res1.length; this.nodata = true; this.codetopics.reverse() })
  }

  ngOnInit(): void {
  }

  code(c: any) {
    this.router.navigate(['/faculty/code/topics/details']);
    sessionStorage.setItem('topic', c.topic)
  }

  remove() {
    sessionStorage.removeItem('editcode')
  }
  getcodetopics() {
    let tempcode = this.codetopics
    if (this.type != '') {
      tempcode = tempcode.filter((c: any) => (c.topic.toUpperCase().includes(this.type.toUpperCase())))
    }
    return tempcode
  }

}
