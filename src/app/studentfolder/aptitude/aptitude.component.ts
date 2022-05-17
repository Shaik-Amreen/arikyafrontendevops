import { Component, OnInit } from '@angular/core';
import aptitude from './topics'
@Component({
  selector: 'app-aptitude',
  templateUrl: './aptitude.component.html',
  styleUrls: ['./aptitude.component.css']
})
export class AptitudeComponent implements OnInit {

  topics: any = []
  content: any = []
  searchtopic: any = ''
  currentpage: any = -1
  constructor() {

    aptitude.map((e: any) => (
      this.topics.push(e.topic),
      this.content.push(e.content)
    ))

    if (sessionStorage.getItem('currentpage')) {
      this.currentpage = sessionStorage.getItem('currentpage')
    }
    else {
      this.currentpage = 0
      sessionStorage.setItem('currentpage', this.currentpage)
    }
  }

  next() {
    this.currentpage = this.currentpage + 1
    sessionStorage.setItem('currentpage', this.currentpage)

  }

  previous() {
    this.currentpage = this.currentpage - 1
    sessionStorage.setItem('currentpage', this.currentpage)
  }

  page(e: any) {
    this.currentpage = e
    sessionStorage.setItem('currentpage', this.currentpage)
  }

  ngOnInit(): void {
  }

}
