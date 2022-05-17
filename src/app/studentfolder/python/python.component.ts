import { Component, OnInit } from '@angular/core';
import python from './pythontopics';
@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css']
})
export class PythonComponent implements OnInit {

  topics: any = []
  content: any = []
  searchtopic: any = ''
  currentpage: any = -1
  constructor() {
    python.map((e: any) => (
      this.topics.push(e.topic),
      this.content.push(e.content)
    ))
    if (sessionStorage.getItem('currentpage4')) {
      this.currentpage = sessionStorage.getItem('currentpage4')
    }
    else {
      this.currentpage = 0
      sessionStorage.setItem('currentpage4', this.currentpage)
    }
  }

  next() {
    this.currentpage = this.currentpage + 1
    sessionStorage.setItem('currentpage4', this.currentpage)

  }

  previous() {
    this.currentpage = this.currentpage - 1
    sessionStorage.setItem('currentpage4', this.currentpage)
  }

  page(e: any) {
    this.currentpage = e
    sessionStorage.setItem('currentpage4', this.currentpage)
  }

  ngOnInit(): void {
  }

}
