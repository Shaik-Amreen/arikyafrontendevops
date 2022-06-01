import { Component, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ExportExcelService } from 'src/app/services/export-excel.service';

@Component({
  selector: 'app-placementsdetails',
  templateUrl: './placementsdetails.component.html',
  styleUrls: ['./placementsdetails.component.css']
})

export class PlacementsdetailsComponent implements OnInit {
  // @Directive({
  //   selector: '[ngVar]'
  // })

  content: any = ''; category: any = ''

  context: any = {}; nodata = false
  // @Input()
  // set ngVar(context: any) {
  //   this.context.$implicit = this.context.ngVar = context;
  //   this.updateView();
  // }
  display = false
  exists = false; data: any = []; placementdetails: any = {}; status = 'all'; app = "all"; type = ''; addcom = 'yes'; count: any = 0;
  place: any = sessionStorage.getItem('placementcyclename')
  addplacestatus = 'Click here to add in ' + this.place
  studenteligibleplacementstatus: any = {}

  constructor(private router: Router, private http: HttpClient, private activatedroute: ActivatedRoute, private commonservice: CommonService, public ete: ExportExcelService) {
    if (sessionStorage.getItem("successpopup")) {
      this.display = true
      setTimeout(() => {
        this.display = false;
        sessionStorage.removeItem("successpopup")
      }, 5000)
    }
    this.count = 0
    sessionStorage.removeItem('editcompany')
    sessionStorage.removeItem('editplacements')
    this.exists = false;
    this.commonservice.postrequest('http://localhost:4000/company/findacompany', { organisation_id: sessionStorage.getItem("organisation_id"), placementcyclename: sessionStorage.getItem("placementcyclename") }).subscribe(
      (res: any) => {
        this.commonservice.postrequest('http://localhost:4000/Placement/findonePlacement', { organisation_id: sessionStorage.getItem("organisation_id"), placementcyclename: sessionStorage.getItem("placementcyclename") }).subscribe(
          (resp: any) => {
            // console.log("res:", resp)

            this.commonservice.postrequest('http://localhost:4000/Placement/findonePlacement', { organisation_id: sessionStorage.getItem('organisation_id'), placementcyclename: sessionStorage.getItem('placementcyclename') }).subscribe(
              (resc: any) => {

                this.commonservice.postrequest('http://localhost:4000/Studentdata/studentsplacementaddedstatus', { organisation_id: sessionStorage.getItem('organisation_id'), placementcyclename: sessionStorage.getItem('placementcyclename') }).subscribe(
                  (ress: any) => {
                    this.studenteligibleplacementstatus = ress
                    // console.log(ress, "helllllllllllllllll")
                    this.placementdetails = resc.docs
                    // console.log(this.placementdetails)
                    if (res.length != 0) {
                      this.data = res; this.data.reverse(); this.exists = true
                    };

                    // console.log("resp.docs.todate", resp.docs.todate, "resp.docs.fromdate", resp.docs.fromdate)
                    if (new Date(resp.docs.todate) <= new Date()) {
                      this.addcom = 'no'
                    }
                    this.nodata = true
                    if (new Date(resp.docs.fromdate) >= new Date()) { this.addcom = 'no' }


                  })




              },
              (errc: any) => { })

          },
          (err: any) => console.log(err)
        );
      },
      (err: any) => console.log(err)
    );

  }

  dataForExcel: any = []
  exportexcel(data: any) {
    this.dataForExcel = []
    data.forEach((row: any) => {
      this.dataForExcel.push([row.firstname, row.rollnumber, row.course, row.department, row.mobile, row.mail, row.dob, row.currentaddress, row.permanentaddress, row.semcgpa, row.tenthcgpa, row.tenthschoolname, row.tenyear, row.intermpc, row.interclgname, row.intercgpa, row.ongoingbacklogs > 0 ? 'yes' : 'no'])
    })
    let reportData = {
      title: 'Applicants',
      data: this.dataForExcel,
      headers: ['Name', "Roll Number", "COURSE", "Department", "Mobile", 'Email ID', 'DOB', 'Current Address', 'Permanent Address', 'Current Term Score', 'Xth percentage', 'Xth Board', 'Year of passing 10th', 'Inter / Diploma', 'XIIth Board', 'Year of passing 12th', 'Backlogs'],
      backAlpha: 'E3'
    }
    this.ete.exportExcel(reportData);
  }

  // updateView() {
  //   this.vcRef.clear();
  //   this.vcRef.createEmbeddedView(this.templateRef, this.context);
  // }

  change() {
    if (this.type == '') { (this.app == 'all') ? this.status = 'all' : (this.app == "open") ? this.status = 'opened' : this.status = 'closed' }
    // console.log(this.status)
  }

  ngOnInit(): void {
  }



  tempdatafunc() {
    let te: any
    if (this.app != 'all') {
      te = this.data.filter((e: any) => (e.status == this.app));
    }
    else { te = this.data }
    if (this.type != '') { te = te.filter((d: any) => (d.companyname.includes(this.type))) }
    return te
  }

  comdetails(c: any) {
    sessionStorage.setItem('companyname', c.companyname);
    this.router.navigate(["/admin/placements/companydetails"])
  }




  setstatus() {
    sessionStorage.setItem('editplacements', 'yes')
    this.router.navigate(["/admin/placements/addeditplacements"])
  }

  verifyButtonStatus: any = 'Verify all students'
  verifyallstudents() {
    this.commonservice.postrequest('http://localhost:4000/Studentdata/verifyStudent', { organisation_id: sessionStorage.getItem('organisation_id'), placementcyclename: sessionStorage.getItem('placementcyclename') }).subscribe(
      (res: any) => {
        this.verifyButtonStatus = 'Verified'
      })

  }

  addstudentstoplacementcycle() {
    this.addplacestatus = 'Adding students .. please wait !'
    this.commonservice.postrequest('http://localhost:4000/Studentdata/addstudentstoplacementcycle', { organisation_id: sessionStorage.getItem('organisation_id'), placementcyclename: sessionStorage.getItem('placementcyclename'), notaddestudents: this.studenteligibleplacementstatus.notaddedstudents }).subscribe(
      (res: any) => {

        this.commonservice.postrequest('http://localhost:4000/Studentdata/studentsplacementaddedstatus', { organisation_id: sessionStorage.getItem('organisation_id'), placementcyclename: sessionStorage.getItem('placementcyclename') }).subscribe(
          (ress: any) => {
            // console.log(ress, "llllllllllllllllllllllllllll")
            this.addplacestatus = 'Click here to add in ' + this.place
            this.studenteligibleplacementstatus = ress
          })
      }
    )
  }

  buttonStatus: any = 'SEND'

  sendmail() {

    this.buttonStatus = 'SENDING'
    let mails: any = []
    this.studenteligibleplacementstatus[this.category].forEach((e: any) => {
      mails.push(e.mail)
    });
    // console.log(mails)
    this.commonservice.postrequest('http://localhost:4000/placementstatus/homequery', { organisation_id: sessionStorage.getItem("organisation_id"), mails: mails, content: this.content }).subscribe(
      (resc: any) => {
        this.buttonStatus = "SEND"
        this.content = ''
        this.category = ''
      },
      (errc: any) => console.log(errc)
    );

  }

}


