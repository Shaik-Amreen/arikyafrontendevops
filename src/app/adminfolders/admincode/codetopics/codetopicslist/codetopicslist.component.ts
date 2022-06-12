import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-codetopicslist',
  templateUrl: './codetopicslist.component.html',
  styleUrls: ['./codetopicslist.component.css']
})
export class CodetopicslistComponent implements OnInit {


  nodata: any = false; display = false
  codetopics: any = []; len1: any; type: any = '';
  compare: any = { organisation_id: sessionStorage.getItem("organisation_id"), type: 'code' }
  constructor(private commonservice: CommonService, private activatedroute: ActivatedRoute, private router: Router) {
    if (sessionStorage.getItem('role') == 'technicaltrainer') {
      this.compare.createdby = sessionStorage.getItem('mail')
    }
    if (sessionStorage.getItem("successpopup")) {
      this.display = true
      setTimeout(() => {
        this.display = false;
        sessionStorage.removeItem("successpopup")
      }, 5000)
    }
    this.commonservice.postrequest('http://localhost:4000/Practice/gettopics', this.compare).subscribe(
      (res1: any) => {
        this.codetopics = res1; this.len1 = res1.length; this.nodata = true;
      })
  }

  ngOnInit(): void {
  }

  code(c: any) {
    this.router.navigate(['/admin/code/topics/details']);
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
