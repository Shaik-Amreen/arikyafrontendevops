
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ExportExcelService } from 'src/app/services/export-excel.service';
@Component({
  selector: 'app-companyoverallcodequizreports',
  templateUrl: './companyoverallcodequizreports.component.html',
  styleUrls: ['./companyoverallcodequizreports.component.css']
})
export class CompanyoverallcodequizreportsComponent implements OnInit {

  nodata: any = false
  overalldata: any = []
  viewmore: any = false;
  type: any = ''
  status: any = "all"

  constructor(private http: HttpClient, private commonservice: CommonService, public ete: ExportExcelService) {
    this.nodata = false
    this.alldata()
  }

  alldata() {
    this.commonservice.postrequest('http://localhost:4000/Dashboard/allcodequiztestratings', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        this.overalldata = res.data;
        this.nodata = true
        // console.log("this.overalldata", this.overalldata)
      }
    )
  }

  ngOnInit(): void {
  }

  tempdatafunc() {
    let te: any
    if (this.status != 'all') {
      te = this.overalldata.filter((e: any) => (e.dept == this.status));
    }
    else { te = this.overalldata }
    if (this.type != '') { te = te.filter((d: any) => (d.rollno.includes(this.type))) }
    return te
  }

  exportToExcel() {
    let dataForExcel: any = []
    this.overalldata.forEach((row: any, i: any) => {
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
    })
    let reportData = {
      title: this.status.toUpperCase() + ' CODE AND QUIZ REPORTS ',
      data: dataForExcel,
      headers: ["STUDENT_ID",
        "FULL NAME",
        "COURSE",
        "BRANCH",
        "YEAR",
        "TOTAL TESTS",
        "ATTEMPTED TESTS",
        "RANK",
        "RATING",],
      backAlpha: 'I3'
    }

    this.ete.exportExcel(reportData);
  }


}
