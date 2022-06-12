import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service'
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-studentoffers',
  templateUrl: './studentoffers.component.html',
  styleUrls: ['./studentoffers.component.css']
})
export class StudentoffersComponent implements OnInit {

  overdata: any = []
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {

    this.constructorcall();
  }

  constructorcall() {
    this.commonservice.postrequest('http://localhost:4000/placementstatus/checkmailnumber', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {
        res = res.reverse()
        this.overdata = res;
        // console.log(this.overdata, "offeresssssssssss data");
        this.overdata.forEach((e: { placed: string; offerletter: string }) => {
          if (e.placed == "onhold") {
            e.offerletter = '';
          }
        });
        // console.log(this.overdata)
      },
      (err: any) => console.log(err)
    );

  }

  ngOnInit(): void {

  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  offerletters: any;
  base64Output: string = ''; choose: boolean = false; offerstatus: any = 'accepted'; companyname: any; offerindex: any
  onFileSelected(event: any, index: any) {
    this.convertFile(event.target.files[0]).subscribe((base64: any) => {
      this.base64Output = base64;
      this.offerindex = index;
      event.target.value = ''
    });
    // console.log(this.base64Output);
    this.choose = true
  }

  save(c: any) {
    c.offerletter = this.base64Output;
    c.placed = '-'
    if (this.offerstatus == 'accepted') { c.placed = "yes" }
    if (this.offerstatus == 'rejected') { c.placed = "no" }

    this.commonservice.postrequest('http://localhost:4000/placementstatus/updateofferletter', { organisation_id: sessionStorage.getItem("organisation_id"), companyname: c.companyname, offerletter: this.base64Output, offerstatus: this.offerstatus, mail: sessionStorage.getItem('mail'), verifiedoffer: 'no', placed: c.placed }).subscribe(
      (res: any) => {
        // console.log("it works2");
        // console.log(res)
        this.base64Output = ''
        this.choose = false
        if (res.message == 'success') {
          this.constructorcall()
        }
      },
      (err: any) => console.log(err)
    );
  }

  downloadPdf(a: any) {
    const source = `data:application/pdf;base64,${a}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${sessionStorage.getItem('mail')}offerletter.pdf`
    link.click();
  }

}
