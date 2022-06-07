import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  overdata: any = []
  placementsinterest: any = []; display = false; popup = ""
  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    if (sessionStorage.getItem("stdchangepassword")) {
      this.display = true
      this.popup = "SUCCESSFULLY SAVED"
      setTimeout(() => {
        this.display = false;
        sessionStorage.removeItem("successpopup")
      }, 5000)
    }
    // this.commonservice.postrequest('http://localhost:4000/placementstatus/checkmailnumber', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
    //   (res: any) => {
    // console.log(res);
    this.commonservice.postrequest('http://localhost:4000/Studentdata/studentplacementinterest', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail'), query2: "placementstatusmails" }).subscribe(
      (response: any) => {

        this.placementsinterest = response.data1.reverse()
        this.overdata = response.data2.reverse()//data2 is placementstatus student check mail number
        // })
      },
      (err: any) => console.log(err)
    );

  }
  company(c: any) {
    sessionStorage.setItem("placementcyclename", c.placementcyclename);
    sessionStorage.setItem('companyname', c.companyname);
    this.router.navigate(['/student/studenthome/studentcompany']);
  }

  ngOnInit(): void {
  }

  downloadPdf(a: any, b: any) {
    const source = `data:application/pdf;base64,${a}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${sessionStorage.getItem('mail')}${b}.pdf`
    link.click();
  }

  updateplacementinterest(i: any, status: any, cplace: any) {
    this.placementsinterest[i][cplace] = status
    // console.log(this.placementsinterest, ";;;;;;;;;;;;;;;;;;;;llllllllllllll")
    this.commonservice.postrequest('http://localhost:4000/Studentdata/studentupdateinterest', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail'), eligibleplacementcycles: this.placementsinterest }).subscribe(
      (response: any) => {
        // console.log(response)
      })
  }

}
