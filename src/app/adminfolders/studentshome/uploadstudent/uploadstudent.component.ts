import { HttpClient } from '@angular/common/http';
import { CommonService } from '../../../services/common.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { ViewChild } from '@angular/core';
import { ExportExcelService } from 'src/app/services/export-excel.service';


@Component({
  selector: 'app-uploadstudent',
  templateUrl: './uploadstudent.component.html',
  styleUrls: ['./uploadstudent.component.css']
})
export class UploadstudentComponent implements OnInit {

  constructor(private http: HttpClient, public ete: ExportExcelService, private commonservice: CommonService) {
  }

  ngOnInit(): void {
  }

  @ViewChild('excel')
  myInputVariable: ElementRef;

  reset() { this.myInputVariable.nativeElement.value = ""; }
  // console.log(this.myInputVariable.nativeElement.files);

  saveMode = false
  data = [];
  mapping: any = [];
  keys: any;
  objkey: any = [];
  savingMode = 'Save'
  year = ''
  errorMsg = ''
  validata: any = false

  onfilesubmit(evt: any) {
    //if (evt.target.accept !== ".xlsx" ) throw Error("file must be excel sheet");
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(evt.target.files[0]);
    reader.onload = (x: any) => {
      const bstr: string = x.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.keys = this.data.shift();
      if (this.keys.length !== 2) { alert("invalid format"); window.location.reload() }
      // console.log(this.data)
      let data1: any = [];
      this.data.forEach((a: any) => {
        // console.log("a", a)
        if (a.length != 0) {
          data1.push(a)
        }
      })
      this.data = data1
      // console.log("this.data", this.data)
      this.mapping = this.data.map((e: any) => {
        if (e.length != 0) {
          let obj: any = {};
          this.keys[0] = 'rollnumber'
          this.keys[1] = 'mail';
          this.keys.forEach((key: any, i: any) => {
            let a = (e[i] + '').trim()
            if (a.length != 0 && e[i]) {
              // console.log("obj", e[i])
              obj[key] = e[i];
            }
          });
          return obj;
        }
      });
      // console.log("this.mapping", this.mapping)
      this.keys.forEach((value: any, key: any) => {
        this.objkey[key] = value.replace(/ /g, ' ')
      });
      this.saveMode = true;
      // console.log("this.mapping", this.mapping)
      for (let c of this.mapping) {

        c.createdby = sessionStorage.getItem("mail")

        c.password = ''

        c.role = 'student'

        c.status = "yes"
        c.code = ""
        c.organisation_id = sessionStorage.getItem("organisation_id")
        c.rollnumber = (c.rollnumber + "").toLowerCase()
        // c.mail = c.rollnumber.toLowerCase() + '@mits.ac.in';
        c.firstname = '';
        c.course = '';
        c.department = '';
        c.currentyear = '';
        c.dob = '';
        c.yearofjoining = '';
        c.gender = '';
        c.permanentaddress = '';
        c.currentaddress = '';
        c.aadharno = '';
        c.aadhar = ''
        c.panno = '';
        c.caste = '';
        c.rank = '';
        c.altmail = '';
        c.fathername = '';
        c.religion = '';
        c.admissionquota = '';
        c.havinglaptop = '';
        c.mothername = '';
        c.tenthschoolname = ''
        c.tenthcgpa = ''
        c.interclgname = ''
        c.intercgpa = ''
        c.cgpa = '',
          c.sgpa = []
        c.totalbacklogs = ''
        c.ongoingbacklogs = ''
        c.educationgap = ''
        c.resume = ''
        c.pan = ''
        c.tenthmarksheet = ''
        c.intermarksheet = ''
        c.graduationmarksheet = ''
        c.companyexperience = ''
        c.verified = ''
        c.freeze = 'no';
        c.mobile = '',
          c.tenyear = ''
        c.interyear = '',
          c.intermpc = ''
      }

    }
    evt.target.value = ''
  }

  display = false;
  save() {
    if (this.year !== '') {
      this.validata = true
    }
    else {
      this.errorMsg = 'Please select Course'
      this.validata = false
    }
  }
  savefinal() {
    let course = this.year.split(' ');
    for (let c of this.mapping) { c.course = course[0]; c.currentyear = course[1] }
    this.savingMode = 'Saving';
    // console.log("this.mapping", this.mapping)
    this.commonservice.postrequest('http://localhost:4000/Studentdata/createStudentdata',
      this.mapping).subscribe(
        (res: any) => {
          // console.log("res", res)
          this.mapping = []
          console.log("resssssssssss", res);
          this.mapping = []; this.saveMode = false; this.keys = [];
          this.display = true;
          setTimeout(() => { this.display = false }, 5000)
          this.year = '';
          this.data = [];
          this.objkey = [];
          this.validata = false
          this.savingMode = 'Save';
          this.reset();
        },
        (err: any) => console.log(err)
      );
  }

  exportexcel(t: any): void {
    const fileName = `sample template to upload students list.xlsx`;
    /* table id is passed over here */
    let element = document.getElementById('excel');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element, { raw: true });

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, fileName);

  }

  // dataForExcel: any = []
  // exportexcel(e: any) {

  //   this.dataForExcel = []
  //   // this.studentstatus[e].forEach((row: any) => {
  //   //   this.dataForExcel.push([row.rollnumber, row.mail, row.course, row.currentyear, (row.dob) ? 'registered' : 'notregistered'])
  //   // })

  //   let reportData = {
  //     title: "Excel Format",
  //     data: this.dataForExcel,
  //     headers: ['ROLL NUMBER'],
  //     backAlpha: 'E3'
  //   }

  //   this.ete.exportExcel(reportData);
  // }



}
