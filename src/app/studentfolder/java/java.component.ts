import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import java from './topics'
@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  topics: any = []
  content: any = []
  searchtopic: any = ''
  currentpage: any = -1
  constructor(private sanitizer: DomSanitizer) {

    java.map((e: any) => (
      this.topics.push(e.topic),
      this.content.push(e.content)
    ))

    if (sessionStorage.getItem('currentpage3')) {
      this.currentpage = sessionStorage.getItem('currentpage3')
    }
    else {
      this.currentpage = 0
      sessionStorage.setItem('currentpage3', this.currentpage)
    }
  }

  // code(){
  //   this.sanitizer1.bypassSecurityTrustResourceUrlthis(this.content[this.currentpage])
  // }

  next() {
    this.currentpage = this.currentpage + 1
    sessionStorage.setItem('currentpage3', this.currentpage)

  }

  previous() {
    this.currentpage = this.currentpage - 1
    sessionStorage.setItem('currentpage3', this.currentpage)
  }

  page(e: any) {
    // console.log(e,"e",this.content[e])
    this.currentpage = e
    // this.content[this.currentpage]=this.sanitizer.bypassSecurityTrustHtml(this.content[this.currentpage])
    // this.content[this.currentpage]="abcd"
    sessionStorage.setItem('currentpage3', this.currentpage)
  }

  ngOnInit(): void {
  }
}
