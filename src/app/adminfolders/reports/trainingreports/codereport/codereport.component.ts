import { Component, OnInit } from '@angular/core';
import { ExportExcelService } from 'src/app/services/export-excel.service';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-codereport',
  templateUrl: './codereport.component.html',
  styleUrls: ['./codereport.component.css']
})
export class CodereportComponent implements OnInit {

  nodata: any = false
  loadstatus: any = false
  stdseachtest: any;
  overallcodedata: any;
  topics: any;
  alldata: boolean;
  display: boolean = false;
  value: any = "";
  type: any = ''
  status: any = "all"
  heading: any = "OVERALL TOPICS";
  compare: any = { organisation_id: sessionStorage.getItem('organisation_id'), type: 'code' }
  constructor(private commonservice: CommonService, public ete: ExportExcelService) {
    this.nodata = false
    if (sessionStorage.getItem('role') == 'technicaltrainer') {
      this.compare.createdby = sessionStorage.getItem('mail')
    }
    sessionStorage.removeItem('topic');
    this.gettopics()
    this.allcodeorquiztests()
  }

  ngOnInit(): void {
  }

  topic1: any;
  visibleData: any = []

  eachtest(t: any) {
    this.loadstatus = true
    this.topic1 = t
    this.heading = t
    this.commonservice.postrequest('http://localhost:4000/Dashboard/eachtestratings', { ...this.compare, topic: this.topic1 }).subscribe(
      (res: any) => {
        this.stdseachtest = res.data
        this.visibleData = res.data
        this.display = true
        this.loadstatus = false
        // console.log("this.stdseachtest", this.stdseachtest)
      })
  }

  allcodeorquiztests() {
    this.commonservice.postrequest('http://localhost:4000/Dashboard/alltestratings', this.compare).subscribe(
      (res: any) => {
        // console.log(res)
        this.alldata = true
        this.overallcodedata = res.data
        this.nodata = true
        this.visibleData = res.data
        // console.log("this.overallcodedata", this.overallcodedata)
      })
  }

  gettopics() {
    this.commonservice.postrequest('http://localhost:4000/Practice/gettopics', this.compare).subscribe(
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

  tempdatafunc(tempdata: any) {
    // console.log(this.type)
    this.loadstatus = true
    let te: any
    if (this.status != 'all') {
      te = tempdata.filter((e: any) => (e.dept == this.status));
    }
    else { te = tempdata }
    if (this.type != '') { te = te.filter((d: any) => (d.rollno.includes(this.type))) }
    this.loadstatus = false
    return te
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
      title: this.status.toUpperCase() + ' CODE REPORTS ',
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

  // exportToExcel1() {
  //   let a={
  //     "sgpa": [],
  //     "eligibleplacementcycles": [],
  //     "rollnumber": "19691a0578",
  //     "organisation_id": "069",
  //     "mail": "19691a0578@mits.ac.in",
  //     "firstname": "",
  //     "course": "btech",
  //     "department": "",
  //     "currentyear": "3",
  //     "dob": "2001-04-08",
  //     "yearofjoining": "2019",
  //     "gender": "male",
  //     "permanentaddress": "Madanapalli",
  //     "currentaddress": "Madanapalli",
  //     "aadharno": "447590714005",
  //     "aadhar": "",
  //     "panno": "1023456786",
  //     "caste": "OC",
  //     "rank": "6173",
  //     "altmail": "karthik.kovi2001@gmail.com",
  //     "fathername": "Rohith",
  //     "religion": "Hindu",
  //     "admissionquota": "yes",
  //     "havinglaptop": "yes",
  //     "mothername": "Madhu",
  //     "tenthschoolname": "Narayana",
  //     "tenthcgpa": "9.0",
  //     "interclgname": "Narayana",
  //     "intercgpa": "9.8",
  //     "cgpa": "",
  //     "totalbacklogs": "",
  //     "ongoingbacklogs": "",
  //     "educationgap": "0",
  //     "resume": "",
  //     "pan": "",
  //     "tenthmarksheet": "",
  //     "intermarksheet": "",
  //     "graduationmarksheet": "",
  //     "companyexperience": "0",
  //     "verified": "",
  //     "freeze": "no",
  //     "mobile": "9550823292",
  //     "tenyear": "2017",
  //     "interyear": "2019",
  //     "intermpc": "inter",
  //     "__v": 0,
  //     "interboard": "Board of Intermediate Education,AP",
  //     "profilepic": "",
  //     "tenthboard": "State Board of Secondary Education,AP"
  //   }
  //   console.log("Object.values(a)",Object.keys(a),Object.values(a))
  //   let reportData = {
  //     title: this.status.toUpperCase() + ' CODE REPORTS ',
  //     data: Object.values(a),
  //     headers: Object.keys(a),
  //     backAlpha: 'I3'
  //   };
  //   console.log(reportData)
  //   this.ete.exportExcel(reportData);
  // }

}
