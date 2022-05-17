import { Component, OnInit } from '@angular/core';
import cprogramming from './ctopics';
@Component({
  selector: 'app-cprogramming',
  templateUrl: './cprogramming.component.html',
  styleUrls: ['./cprogramming.component.css']
})
export class CprogrammingComponent implements OnInit {

  topics: any = []
  content: any = []
  searchtopic: any = ''
  currentpage: any = -1
  constructor() {
    cprogramming.map((e: any) => (
      this.topics.push(e.topic),
      this.content.push(e.content)
    ))
    if (sessionStorage.getItem('currentpage1')) {
      this.currentpage = sessionStorage.getItem('currentpage1')
    }
    else {
      this.currentpage = 0
      sessionStorage.setItem('currentpage1', this.currentpage)
    }
  }

  next() {
    this.currentpage = this.currentpage + 1
    sessionStorage.setItem('currentpage1', this.currentpage)

  }

  previous() {
    this.currentpage = this.currentpage - 1
    sessionStorage.setItem('currentpage1', this.currentpage)
  }

  page(e: any) {
    this.currentpage = e
    sessionStorage.setItem('currentpage1', this.currentpage)
  }

  ngOnInit(): void {
  }

}