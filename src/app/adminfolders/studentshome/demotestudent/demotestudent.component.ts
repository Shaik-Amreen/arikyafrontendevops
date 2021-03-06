import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { Router } from '@angular/router';
import { ExportExcelService } from 'src/app/services/export-excel.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-demotestudent',
  templateUrl: './demotestudent.component.html',
  styleUrls: ['./demotestudent.component.css']
})
export class DemotestudentComponent implements OnInit {

  constructor(private http: HttpClient, public ete: ExportExcelService, private commonservice: CommonService, private router: Router) {
    this.demote = 0



  }
  course = ''; currentyear = 0; present = 0; demote = 0
  ngOnInit(): void {
  }
  errorMsg: any = ''
  saveMode = false
  data = [];
  mapping: any = [];
  keys: any;
  objkey: any = [];
  savingMode = 'Demote'
  validata = false
  display = false


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
      // console.log((XLSX.utils.sheet_to_json(ws, { header: 1 })))
      this.keys = this.data.shift();
      if (this.keys.length !== 1) { alert("invalid format"); window.location.reload() }
      let data1: any = [];
      this.data.forEach((a: any) => {
        // console.log("a", a)
        if (a.length != 0) {
          data1.push(a)
        }
      })
      this.data = data1
      this.mapping = this.data.map((e) => {
        let obj: any = {};
        this.keys.forEach((key: any, i: any) => {
          key = 'rollnumber'
          obj[key.replace(/ /g, ' ')] = e[i];
        });
        return obj;
      });
      this.keys.forEach((value: any, key: any) => {
        this.objkey[key] = value.replace(/ /g, ' ')
      });
      this.saveMode = true
      // for (let c of this.mapping) {
      //   c.mail = c.rollnumber + '@mits.ac.in';
      // }
      // console.log(this.mapping)
    };
  }

  demotestudents() {
    this.commonservice.postrequest('/Studentdata/updatedemoteyear', { organisation_id: sessionStorage.getItem("organisation_id"), course: this.course, currentyear: this.currentyear, present: this.present }).subscribe(
      (res: any) => { this.demote = 2; this.display = true; setTimeout(() => { this.display = false }, 5000) },
      (err: any) => console.log(err)
    );
  }
  save() {
    this.validata = true
  }
  savefinal() {
    this.savingMode = "Demoting"
    this.mapping.forEach((element: any) => {
      element.rollnumber = element.rollnumber.toLowerCase()
    });
    this.commonservice.postrequest('/Studentdata/updatedemoteyearstudent', { organisation_id: sessionStorage.getItem('organisation_id'), data: this.mapping }).subscribe(
      (res: any) => { this.demote = 2; this.savingMode = "Demoted"; this.mapping = []; this.saveMode = false; this.keys = []; this.validata = false; this.display = true; setTimeout(() => { this.display = false }, 5000) },
      (err: any) => console.log(err)
    );
  }

  // exportexcel(t: any): void {
  //   const fileName = `sample template to upload students list.xlsx`;
  //   /* table id is passed over here */
  //   let element = document.getElementById('excel');
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element, { raw: true });

  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   /* save to file */
  //   XLSX.writeFile(wb, fileName);

  // }

  dataForExcel: any = []
  exportexcel() {
    this.dataForExcel = [["College ID of the student"]]
    let reportData = {
      title: 'Excel format',
      data: this.dataForExcel,
      headers: ['ROLL NUMBER'],
      backAlpha: 'E3'
    }
    this.ete.exportExcel(reportData);
  }

}




