import { Component, OnInit } from '@angular/core';
import { ExportExcelService } from 'src/app/services/export-excel.service';
import { CommonService } from '../../../../services/common.service';
@Component({
  selector: 'app-companyquizreports',
  templateUrl: './companyquizreports.component.html',
  styleUrls: ['./companyquizreports.component.css']
})
export class CompanyquizreportsComponent implements OnInit {

  nodata: any = false
  stdseachtest: any;
  overallquizdata: any;
  topics: any;
  alldata: boolean;
  display: boolean = false;
  value: any = "";
  type: any = ''
  status: any = "all"
  heading: any = "OVERALL TOPICS"
  constructor(private commonservice: CommonService, public ete: ExportExcelService) {
    sessionStorage.removeItem('topic');
    this.nodata = false
    this.gettopics()
    this.allcodeorquiztests()
  }

  ngOnInit(): void {
  }

  topic1: any;
  visibleData: any = []

  eachtest(t: any) {
    this.topic1 = t
    this.heading = t
    this.commonservice.postrequest('http://localhost:4000/Dashboard/eachtestratings', { organisation_id: sessionStorage.getItem("organisation_id"), topic: this.topic1, type: "quiz" }).subscribe(
      (res: any) => {
        this.stdseachtest = res.data
        this.visibleData = res.data
        this.display = true
        // console.log("this.stdseachtest", this.stdseachtest)
      })
  }

  allcodeorquiztests() {
    this.commonservice.postrequest('http://localhost:4000/Dashboard/alltestratings', { organisation_id: sessionStorage.getItem("organisation_id"), type: "quiz" }).subscribe(
      (res: any) => {
        this.alldata = true
        this.nodata = true
        this.overallquizdata = res.data
        this.visibleData = res.data
        // console.log("this.overallquizdata", this.overallquizdata)
      })
  }

  gettopics() {
    this.commonservice.postrequest('http://localhost:4000/Practice/gettopics', { organisation_id: sessionStorage.getItem("organisation_id"), type: 'quiz' }).subscribe(
      (res: any) => {
        this.topics = res;
        this.display = false
        // console.log("this.topics", this.topics)
      }
    )
  }

  alltestsoreach(x: any) {
    if (x != '') {
      x == 'true' ? this.alldata = true : this.alldata = false;
      if (this.alldata == false) {
        this.gettopics()
      }
      // console.log("teststatus", typeof (x), typeof (this.alldata));
    }
  }

  exportToExcel() {
    let dataForExcel: any = []
    this.visibleData.forEach((row: any, i: any) => {
      if (this.heading == "OVERALL TOPICS") {
        dataForExcel.push([
          row.rollno,
          row.firstname + row.middlename + row.lastname,
          row.course,
          row.dept,
          row.currentyear,
          row.total,
          row.count,
          i + 1,
          row.main,
        ])
      }
      else {
        dataForExcel.push([
          row.rollno,
          row.firstname + row.middlename + row.lastname,
          row.course,
          row.dept,
          row.currentyear,
          i + 1,
          row.main,
        ])
      }
    })
    let reportData = {
      title: this.status.toUpperCase() + ' QUIZ REPORTS ',
      data: dataForExcel,
      headers: ["STUDENT_ID",
        "FULL NAME",
        "COURSE",
        "BRANCH",
        "YEAR",
      ],
      backAlpha: 'I3'
    };

    if (this.heading == 'OVERALL TOPICS') {
      reportData.headers.push(...["TOTAL TESTS", "ATTEMPTED TESTS", "RANK", "RATING"])
    }
    else {
      reportData.headers.push(...["RANK", "RATING"])
      reportData.backAlpha = 'G3'
    }
    this.ete.exportExcel(reportData);
  }

  tempdatafunc(tempdata: any) {
    // console.log(this.type)
    let te: any
    if (this.status != 'all') {
      te = tempdata.filter((e: any) => (e.dept == this.status));
    }
    else { te = tempdata }
    if (this.type != '') { te = te.filter((d: any) => (d.rollno.includes(this.type))) }
    return te
  }

}
