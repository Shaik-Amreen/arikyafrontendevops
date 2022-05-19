import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//
import { ViewChild } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-studentdocuments',
  templateUrl: './studentdocuments.component.html',
  styleUrls: ['./studentdocuments.component.css']
})
export class StudentdocumentsComponent implements OnInit {

  data: any = []; overdata: any = []; a = 0; b = 0; c = 0; d = 0; e = 0; f = 0
  status = 0;
  resumesaved = false; uploadresume = false; resumelink = '';
  pansaved = false; uploadpan = false;
  aadharsaved = false; uploadaadhar = false;
  tenthmarksheetsaved = false; uploadtenthmarksheet = false;
  intermarksheetsaved = false; uploadintermarksheet = false;
  graduationmarksheetsaved = false; uploadgraduationmarksheet = false;
  closestatus: any = false

  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    this.constructorcall()
  }


  constructorcall() {
    this.a = 0; this.b = 0; this.c = 0; this.d = 0; this.e = 0; this.f = 0;
    this.resumesaved = false; this.uploadresume = false;
    this.pansaved = false; this.uploadpan = false;
    this.aadharsaved = false; this.uploadaadhar = false;
    this.tenthmarksheetsaved = false; this.uploadtenthmarksheet = false;
    this.intermarksheetsaved = false; this.uploadintermarksheet = false;
    this.graduationmarksheetsaved = false; this.uploadgraduationmarksheet = false;


    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {
        this.data = res.data;
        if (this.data.resume == '') {
          this.uploadresume = true;
        }
        if (this.data.pan == '') {
          this.uploadpan = true;
        }
        if (this.data.aadhar == '') {
          this.uploadaadhar = true;
        }
        if (this.data.tenthmarksheet == '') {
          this.uploadtenthmarksheet = true;
        }
        if (this.data.intermarksheet == '') {
          this.uploadintermarksheet = true;
        }
        if (this.data.graduationmarksheet == '') {
          this.uploadgraduationmarksheet = true;
        }
        this.a = 1; this.b = 1; this.c = 1; this.d = 1; this.e = 1; this.f = 1;
        // console.log("response:", res.data)
      },
      (err: any) => console.log(err)
    );
  }
  ngOnInit(): void {

  }



  company(c: any) {
    sessionStorage.setItem("placementcyclename", c.placementcyclename);
    sessionStorage.setItem('companyname', c.companyname);
    this.router.navigate(['/mitstudent/studentcompany'])
  }



  base64Output: string = '';

  onFileSelected(event: any) {
    this.convertFile(event.target.files[0]).subscribe((base64: any) => {
      this.base64Output = base64;
      // console.log("this.base64Output", this.base64Output)
    });

  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  save(s: any) {
    this.data[s] = this.base64Output
    // console.log("this.data", this.data)
    this.commonservice.postrequest('http://localhost:4000/Studentdata/storefiles', { organisation_id: sessionStorage.getItem("organisation_id"), filename: s, filedata: this.base64Output, mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {
        this.closestatus = false
        this.constructorcall()
        // this.a == 2 ? this.resumesaved = true : null
        // this.b == 2 ? this.pansaved = true : null
        // this.c == 2 ? this.aadharsaved = true : null
        // this.d == 2 ? this.tenthmarksheetsaved = true : null
        // this.e == 2 ? this.intermarksheetsaved = true : null
        // this.f == 2 ? this.graduationmarksheetsaved = true : null
        // this.data[s] = this.base64Output
        // this.base64Output = ''
        // this.a = 1; this.b = 1; this.c = 1; this.d = 1; this.e = 1; this.f = 1;
      },
      (err: any) => console.log(err)
    );
  }

  downloadPdf(a: any, b: any) {
    // console.log("download->a", a)
    const source = `data:application/pdf;base64,${a}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${sessionStorage.getItem('mail')}${b}.pdf`
    link.click();
  }

}