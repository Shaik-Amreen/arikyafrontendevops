

import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { ExportExcelService } from 'src/app/services/export-excel.service';
//
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-faculty-training',
  templateUrl: './faculty-training.component.html',
  styleUrls: ['./faculty-training.component.css']
})
export class FacultyTrainingComponent implements OnInit {
  data: any = []; codedata: any = []; totaldata: any = []; viewdata: any = []; type: any = ''; dept: any = ''; lenexist: any = 0; result: any = []
  deptdata: any;
  obj: any;
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService, public ete: ExportExcelService) {
    // console.log("training")
    this.commonservice.postrequest('http://localhost:4000/Practice/dashboardswaps', "").subscribe(
      (response: any) => {
        // console.log("training1")
        this.commonservice.postrequest('http://localhost:4000/Dashboard/dashboardquizdata', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
          (res: any) => {
            this.data = res;
            // console.log('quiz', this.data) 
          })
        this.commonservice.postrequest('http://localhost:4000/Dashboard/dashboardcodedata', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
          (resp: any) => {
            this.codedata = resp;
            // console.log('code', this.codedata) 
          })
        // console.log(this.codedata, 'kugcukweggewhjcgjegech')
        this.commonservice.postrequest('http://localhost:4000/Dashboard/totaldata', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
          (respo: any) => {
            // console.log("training4"),
            this.totaldata = respo;
            // console.log('totaldata', this.totaldata);
            // console.log("this.totaldata.data", this.totaldata.data)
            var keys = Object.keys(this.totaldata.data);
            keys.forEach((key) => {
              this.lenexist = this.lenexist + this.totaldata.data[key].length
            });
            this.setOptions()
          })
      })
    // this.eachtest();
    // this.allcodeorquiztests();
    // this.allcodequiztestratings();
  }
  ngOnInit(): void { }
  stdseachtest: any
  stdsallcodeorquiztest: any
  stdsallcodequiztest: any
  topic1: any; type1: any; obj2: any;

  eachtest() {
    this.commonservice.postrequest('http://localhost:4000/Dashboard/eachtestratings', { organisation_id: sessionStorage.getItem("organisation_id"), topic: this.topic1, type: this.type1 }).subscribe(
      (res: any) => {
        this.stdseachtest = res.data
        // console.log("this.stdseachtest", this.stdseachtest)
        this.obj2 = {}
        this.deptdata = []
        this.stdseachtest.map((a: any, index: any) => {
          if (!this.deptdata.includes(a.dept)) {
            this.deptdata.push(a.dept)
            this.obj2[a.dept] = [a]
          }
          else {
            this.obj2[a.dept].push(a)
          }
        })
        // console.log("this.obj", this.obj2)
      })
  }
  obj1: any
  allcodeorquiztests(type: any) {
    this.commonservice.postrequest('http://localhost:4000/Dashboard/alltestratings', { organisation_id: sessionStorage.getItem("organisation_id"), type: type }).subscribe(
      (res: any) => {
        this.stdsallcodeorquiztest = res.data
        // console.log("this.stdsallcodeorquiztest", this.stdsallcodeorquiztest)
        this.obj1 = {}
        this.deptdata = []
        this.stdsallcodeorquiztest.map((a: any, index: any) => {
          if (!this.deptdata.includes(a.dept)) {
            this.deptdata.push(a.dept)
            this.obj1[a.dept] = [a]
          }
          else {
            this.obj1[a.dept].push(a)
          }
        })
        // console.log("this.obj", this.obj1)
        return this.obj1
      })
  }

  allcodequiztestratings() {
    this.commonservice.postrequest('http://localhost:4000/Dashboard/allcodequiztestratings', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        this.stdsallcodequiztest = res.data
        // console.log("this.stdsallcodequiztest", this.stdsallcodequiztest)
        this.obj = {}
        this.stdsallcodequiztest.map((a: any, index: any) => {
          if (!this.obj.hasOwnProperty(a.dept)) {
            this.obj[a.dept] = [a]
          }
          else {
            this.obj[a.dept].push(a)
          }
        })
        // console.log("this.obj>>>>>>>>>>>>>>", this.obj)
        return this.obj
      })
  }

  totallen: any;
  view(e: any, f: any) {
    (e == 'quiz') ? (this.viewdata = this.data.data[f], this.type = 'QUIZ', this.dept = f) :
      (e == 'code') ? (this.viewdata = this.codedata.data[f], this.type = 'CODE', this.dept = f) :
        (e == 'overall') ? (this.viewdata = this.totaldata.data[f], this.type = 'OVERALL', this.dept = f, this.totallen = this.viewdata) : null
  }
  //download data
  exportexcel(): void {
    const fileName = `${this.type} ${this.dept} Applicants List.xlsx`;
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element, { raw: true });
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, fileName);
  }

  // dataForExcel: any = []
  // exportToExcel(e: any) {

  //   this.dataForExcel = []
  //   this.studentstatus[e].forEach((row: any) => {
  //     this.dataForExcel.push([row.rollnumber, row.mail, row.course, row.currentyear, (row.dob) ? 'registered' : 'notregistered'])
  //   })

  //   let reportData = {
  //     title: (e == 'total') ? 'ENREOLLED LIST IN ARIKYA' : (e == 'registered') ? 'REGISTERED LIST IN ARIKYA' : 'NOT REGISTERED LIST IN ARIKYA',
  //     data: this.dataForExcel,
  //     headers: ['ROLL NUMBER', "MAIL", "COURSE", "YEAR", "STATUS"],
  //     backAlpha: 'E3'
  //   }

  //   this.ete.exportExcel(reportData);
  // }

  optionsdata: any = []




  setOptions() {
    // console.log(this.codedata, 'jgfufufufuyfvj')
    let opt = [this.totaldata.message, this.codedata.message, this.data.message]
    let optkey = ['OVERALL', 'CODING ', 'QUIZ']
    // console.log(opt)
    opt.forEach((e: any, i: any) => {
      // console.log(e)
      let optvalue: any = [], optdept: any = [], optseries: any = []
      e.forEach((d: any) => {
        optvalue.push(d.rating)
        optdept.push(d.type)
      });
      // optdept.forEach((d: any, i: any) => {
      //   optseries.push(
      //     {
      //       placementcyclename: d,
      //       type: 'bar',
      //       data:[optvalue[i]]
      //     }
      //   )
      // })

      this.optionsdata.push({

        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: true },
            magicType: { show: true, type: ['line', 'bar', 'stack'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {},
        tooltip: {
        },
        dataset: {
          source: [
            ['PLACEMENTS', ...optdept],
            ['', ...optvalue],
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }]

        ,
        title: {
          text: optkey[i]
        },
        // legend: {

        // },
        // tooltip: {
        // },
        // xAxis: {
        //   data: optdept
        // },
        // yAxis: {
        //   type: 'value'
        // },
        // series: [
        //   {

        //     type: 'bar',
        //     data: optvalue
        //   },
        // ]
      })
      // console.log(this.optionsdata)
    })

    // this.countryCasesChartOptions = {
    //   title: {
    //     text: 'PLACEMENTS',
    //   },
    //   legend: {
    //     data: ['Placed', 'Registered', 'Eligible']
    //   },
    //   tooltip: {
    //   },
    //   xAxis: {

    //     data: ['df', 'x']
    //   },
    //   yAxis: {
    //     type: 'value'
    //   },
    //   series: [{
    //     placementcyclename: 'Placed',
    //     type: 'bar',
    //     data: [10, 20]
    //   },
    //   {
    //     placementcyclename: 'Registered',
    //     type: 'bar',
    //     data: [30, 10]
    //   },
    //   {
    //     placementcyclename: 'Eligible',
    //     type: 'bar',
    //     data: [60, 20],
    //   },
    //   ],
    // }

  }
}