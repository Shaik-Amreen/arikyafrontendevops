import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-companyquiztopiclist',
  templateUrl: './companyquiztopiclist.component.html',
  styleUrls: ['./companyquiztopiclist.component.css']
})
export class CompanyquiztopiclistComponent implements OnInit {

  nodata: any = false
  quiztopics: any = []; len2: any; type1: any = ''
  constructor(private commonservice: CommonService, private router: Router) {

    this.commonservice.postrequest('http://localhost:4000/Practice/gettopics', { organisation_id: sessionStorage.getItem("organisation_id"), type: 'quiz' }).subscribe(
      (res: any) => { this.quiztopics = res; this.len2 = res.length; this.quiztopics.reverse(); this.nodata = true })
  }
  ngOnInit(): void {
  }

  quiz(c: any) {
    this.router.navigate(['/admin/quiz/topics/details']);
    sessionStorage.setItem('topic', c.topic)
  }

  getquiztopics() {
    let tempquiz = this.quiztopics
    if (this.type1 != '') {
      tempquiz = this.quiztopics.filter((c: any) => (c.topic.toUpperCase().includes(this.type1.toUpperCase())))
    }
    return tempquiz
  }
}
