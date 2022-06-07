import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-studentcompany',
  templateUrl: './studentcompany.component.html',
  styleUrls: ['./studentcompany.component.css']
})
export class StudentcompanyComponent implements OnInit {
  display = false;
  companydetails: any = {}; data = []; nowshorted: any = []; rejectedlist: any = []; nodata: any = false
  mapping: any = [];
  singlestudent: any = ''
  keys: any; uploadindex: any = -5
  objkey: any = [];
  applicantslist: any = []; setedit = false
  ch = 0; deadline = ''; errdate = ''; mailstatus = 'SEND MAIL'; eligible = 0; registered = 0; comselected = ''; addstatus = 'ADD STUDENTS'; currentIndex = -1
  eligibility: any[] = []; hiringflow: any[]
  allcom = [{ companyname: '' }]; listofstu = []; relen = 0; placed = 0; nextIndex = 0
  constructor(private http: HttpClient, private commonservice: CommonService, private route: Router) {
    sessionStorage.removeItem('editcompany')

    sessionStorage.removeItem('editcompany')
    this.mailstatus = 'SEND MAIL'; this.addstatus = 'ADD STUDENTS'
    this.commonservice.postrequest('http://localhost:4000/company/findcompany', { organisation_id: sessionStorage.getItem("organisation_id"), placementcyclename: sessionStorage.getItem("placementcyclename"), companyname: sessionStorage.getItem('companyname') }).subscribe(
      (res: any) => {
        // console.log(res);
        this.commonservice.postrequest('http://localhost:4000/placementstatus/eligible', res.companydetails).subscribe(
          (rese: any) => {
            // console.log(rese, "companydetails"); 
            this.nodata = true
            this.registered = rese.rdata.length; this.eligible = rese.data.length;
            this.placed = rese.edata.length
            if (new Date(res.companydetails.deadline) < new Date() && res.companydetails.deadline != 'not updated') {
              res.companydetails.status = 'closed';
              this.commonservice.postrequest('http://localhost:4000/company/updatestatus', res.companydetails).subscribe(
                (response: any) => {
                  // console.log(response)
                  this.companydetails = res.companydetails;
                  this.hiringflow = this.companydetails.hiringworkflow.flat();
                  // this.companydetails.companylogo=(res.companydetails.companylogo);
                  // console.log("this.companydetails.companylogo111", this.companydetails.companylogo);
                  (this.companydetails.companylogo == null || this.companydetails.companylogo == '') ? this.companydetails.companylogo = "../../../.././assets/companylogo.jpg" : null;
                  this.image = this.companydetails.companylogo;
                  this.getWorkflow()

                },
                (err: any) => console.log(err)
              )
            }
            else {
              this.companydetails = res.companydetails;
              // console.log("this.companydetails.companylogo", this.companydetails.companylogo);
              // this.companydetails.companylogo=(res.companydetails.companylogo);
              (this.companydetails.companylogo == null || this.companydetails.companylogo == '') ? this.companydetails.companylogo = "../../../.././assets/companylogo.jpg" : null;
              this.image = this.companydetails.companylogo
            }
          },
          (erer: any) => console.log(erer)
        )

      },
      (err: any) => console.log(err)
    );
  }

  lastItem: any
  getWorkflow() {
    this.lastItem = false
    this.commonservice.postrequest('http://localhost:4000/hiringstudent/findcompanywise', { organisation_id: sessionStorage.getItem("organisation_id"), placementcyclename: sessionStorage.getItem("placementcyclename"), companyname: sessionStorage.getItem('companyname') }).subscribe(
      (reset: any) => {
        // console.log("reset", reset)
        reset = reset.reverse()
        if (reset.length == 0) {
          this.currentIndex = 0
          this.nextIndex = 0
        }
        else {
          this.relen = 1; this.nextIndex = 1
          if (reset.length >= this.hiringflow.length - 1) {
            this.lastItem = true
          }
          // console.log(reset, this.hiringflow, ">>>>>>>>>>>>>>>>>>")
          // console.log(this.hiringflow, reset[0].hiringflowname)
          this.currentIndex = this.hiringflow.findIndex(e => e.level === reset[0].hiringflowname);
          this.nowshorted = reset.filter((e: any) => e.hiringflowname == reset[0].hiringflowname)
          // console.log("this.nowshorted ", this.nowshorted)
        }
        if (this.currentIndex == -1) {
          this.currentIndex = this.hiringflow.length - 1
        }
      }
    )
  }


  image = "../../../../assets/companylogo.jpg";
  tempimg = "../../../../assets/companylogo.jpg";
  handleFileSelect(evt: any) {
    var reader = new FileReader;
    reader.readAsDataURL(evt.target.files[0]);
    reader.onload = (event: any) => {
      this.tempimg = event.target.result;
      // this.tempimg = this.image
      // console.log(this.data.profilepic)
    }
    evt.target.value = "";
  }

  saveimg: any = "save"; popup: any = ""; imagemodal = "none"

  remove() {
    this.tempimg = "../../../../assets/companylogo.jpg"
  }

  save() {
    this.image = this.tempimg
    this.saveimg = "saving..."
    this.companydetails.companylogo = (this.image);
    this.companydetails.organisation_id = sessionStorage.getItem("organisation_id")
    this.commonservice.postrequest('http://localhost:4000/company/updatecompany', this.companydetails).subscribe(
      (res: any) => {
        // console.log("res image", res)
        this.imagemodal = "none"
        this.saveimg = "save"
        this.display = true
        this.popup = "SUCCESSFULLY SAVED"
        setTimeout(() => {
          this.display = false;
          sessionStorage.removeItem("successpopup")
        }, 5000)
      })
  }



  switchedit() {
    sessionStorage.setItem('editcompany', 'yes')
    this.route.navigate(["/admin/placements/addeditcompany"])
  }

  addlevel(l: any) { this.hiringflow.push({ placementcyclename: this.companydetails.placementcyclename, companyname: this.companydetails.companyname, level: l }) }

  removelevel(l: any) {
    let index = this.hiringflow.findIndex((s: any) => s.level == l.level);
    this.hiringflow.splice(index, 1)
  }

  ngOnInit(): void {
    this.commonservice.postrequest('http://localhost:4000/company/findacompany', { organisation_id: sessionStorage.getItem("organisation_id"), placementcyclename: sessionStorage.getItem("placementcyclename") }).subscribe(
      (res: any) => {
        this.commonservice.postrequest('http://localhost:4000/placementstatus/applicants', { organisation_id: sessionStorage.getItem("organisation_id"), placementcyclename: sessionStorage.getItem("placementcyclename"), companyname: sessionStorage.getItem('companyname') }).subscribe(
          (rese: any) => {
            this.applicantslist = rese; this.allcom = res;
          },
          (err: any) => console.log(err)
        )
      },
      (err: any) => console.log(err)
    );
  }

}











