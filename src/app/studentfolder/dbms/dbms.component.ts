import { Component, OnInit } from '@angular/core';
import dbms from "./topics"


@Component({
  selector: 'app-dbms',
  templateUrl: './dbms.component.html',
  styleUrls: ['./dbms.component.css']
})
export class DbmsComponent implements OnInit {
  topics: any = []
  content: any = []
  searchtopic: any = ''
  currentpage: any = -1
  constructor() {

    dbms.map((e: any) => (
      this.topics.push(e.topic),
      this.content.push(e.content)
    ))

    if (sessionStorage.getItem('currentpage2')) {
      this.currentpage = sessionStorage.getItem('currentpage2')
    }
    else {
      this.currentpage = 0
      sessionStorage.setItem('currentpage2', this.currentpage)
    }
  }

  next() {
    this.currentpage = this.currentpage + 1
    sessionStorage.setItem('currentpage2', this.currentpage)

  }

  previous() {
    this.currentpage = this.currentpage - 1
    sessionStorage.setItem('currentpage2', this.currentpage)
  }

  page(e: any) {
    this.currentpage = e
    sessionStorage.setItem('currentpage2', this.currentpage)
  }

  ngOnInit(): void {
  }

}
