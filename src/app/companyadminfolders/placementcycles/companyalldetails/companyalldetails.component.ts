
import { HttpClient } from '@angular/common/http'; import { CommonService } from '../../../services/common.service';
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ExportExcelService } from 'src/app/services/export-excel.service';
@Component({
  selector: 'app-companyalldetails',
  templateUrl: './companyalldetails.component.html',
  styleUrls: ['./companyalldetails.component.css']
})
export class CompanyalldetailsComponent implements OnInit {

  companydetails: any = {}; data = []; nowshorted: any = []; rejectedlist: any = []; nodata: any = false
  mapping: any = [];
  singlestudent: any = ''
  keys: any; uploadindex: any = -5
  objkey: any = [];
  applicantslist: any = []; setedit = false
  ch = 0; deadline = ''; errdate = ''; mailstatus = 'SEND MAIL'; eligible = 0; registered = 0; comselected = ''; addstatus = 'ADD STUDENTS'; currentIndex = -1
  eligibility: any[] = []; hiringflow: any[]
  allcom = [{ companyname: '' }]; listofstu = []; relen = 0; placed = 0; nextIndex = 0
  constructor(private http: HttpClient, private commonservice: CommonService, private route: Router, public ete: ExportExcelService) {
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
                  this.hiringflow = this.companydetails.hiringworkflow.flat()
                  // this.companydetails.companylogo=(res.companydetails.companylogo);
                  console.log("this.companydetails.companylogo111", this.companydetails.companylogo);
                  (this.companydetails.companylogo == null || this.companydetails.companylogo == '') ? this.companydetails.companylogo = "../../../.././assets/user.png" : null;
                  this.image = this.companydetails.companylogo;
                  this.getWorkflow()

                },
                (err: any) => console.log(err)
              )
            }
            else {
              this.companydetails = res.companydetails;
              console.log("this.companydetails.companylogo", this.companydetails.companylogo);
              // this.companydetails.companylogo=(res.companydetails.companylogo);
              (this.companydetails.companylogo == null || this.companydetails.companylogo == '') ? this.companydetails.companylogo = "../../../.././assets/user.png" : null;
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

  image = "../../../../assets/user.png";
  tempimg = "../../../../assets/user.png";
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

  saveimg: any = "save"; popup: any = ""; imagemodal = "none"; display = false
  remove() {
    this.tempimg = "../../../../assets/user.png"
  }

  save() {
    this.image = this.tempimg
    this.saveimg = "saving..."
    this.companydetails.companylogo = (this.image);
    this.companydetails.organisation_id = sessionStorage.getItem("organisation_id")
    this.commonservice.postrequest('http://localhost:4000/company/updatecompany', this.companydetails).subscribe(
      (res: any) => {
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


  check(l: any) {
    for (let e of this.hiringflow) {
      if (e.level.includes(l) == true) {
        //  console.log(e.level.includes(l)); 
        return true; break;
      }
    }
  }

  toView(l: string) {
    let element = document.getElementById(l);
    if (element != null) { element.scrollIntoView() }
  }

  close() {
    this.deadline = new Date().toString();
    this.saveline()
  }

  saveline() {
    if (this.deadline == '') { this.errdate = "Please select date" }
    else {
      this.companydetails.deadline = this.deadline;
      if (new Date(this.deadline) < new Date()) { this.companydetails.status = 'closed' }
      else { this.companydetails.status = 'opened' }
      this.commonservice.postrequest('http://localhost:4000/company/updatestatus', this.companydetails).subscribe(
        (res: any) => {
          this.companydetails = res.data; this.ch = 0; this.getWorkflow()
        },
        (err: any) => console.log(err)
      )
    }
  }



  sendmail() {
    this.mailstatus = 'SENDING MAIL';
    this.commonservice.postrequest('http://localhost:4000/placementstatus/sendmail', this.companydetails).subscribe(
      (res: any) => {
        // console.log(res)

        this.mailstatus = 'MAIL SENT'
      },
      (err: any) => console.log(err)
    )
  }

  re() {
    window.location.reload()
  }

  saveButton: any = "SAVE"
  onfilesubmit(evt: any, i: any) {

    this.uploadindex = i

    //  console.log(this.uploadindex, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
    //if (evt.target.accept !== ".xlsx" ) throw Error("file must be excel sheet");
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(evt.target.files[0]);

    reader.onload = (x: any) => {

      const bstr: string = x.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsplacementcyclename: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsplacementcyclename];
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      // console.log((XLSX.utils.sheet_to_json(ws, { header: 1 })))
      this.keys = this.data.shift();

      if (this.keys.length !== 1 || !this.keys[0].includes('roll')) { alert("invalid format"); window.location.reload() }
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
      // console.log(this.applicantslist)







      this.mapping = this.mapping.filter((m: any) => (this.applicantslist.some((a: any) => (a.rollnumber == m.rollnumber))))
      // console.log(this.mapping, this.nowshorted, "helooooooshorteddddddddddddddddd")
      this.mapping.filter((v: any, i: any, a: any) => a.findIndex((v2: any) => (v2.id === v.id)) === i)
      this.nowshorted.map((e: any) => {
        let a: any = true;
        this.mapping.map((n: any) => {
          n.rollnumber == e.rollnumber ? a = false : null;
        });
        a != false ? this.rejectedlist.push(e) : null;
      });
      // this.rejectedlist = this.nowshorted.filter((s: any) => console.log(s))

      this.mapping = this.mapping.filter((s: any) => (this.nowshorted.map((n: any) => n.rollnumber == s.rollnumber)))

      // console.log(this.currentIndex, this.relen, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
      if (this.currentIndex == 0 && this.relen == 0) {

        this.rejectedlist = this.applicantslist.filter((m: any) => (this.mapping.some((a: any) => (a.rollnumber !== m.rollnumber))))
        // console.log(this.rejectedlist, "rejecteddddddddddddddddddddddddddddddddddlistttttttttttt")
      }
      for (let c of this.mapping) {
        c.rollnumber = c.rollnumber.toLowerCase()
        c.placementcyclename = sessionStorage.getItem("placementcyclename")
        c.companyname = sessionStorage.getItem('companyname')
        c.hiringflowname = this.hiringflow[i].level,
          c.organisation_id = sessionStorage.getItem('organisation_id')
      }

    };



  }

  addstu() {
    this.companydetails.presentcompany = this.comselected;
    this.addstatus = 'ADDING'
    this.commonservice.postrequest('http://localhost:4000/placementstatus/addstu', this.companydetails).subscribe(
      (res: any) => {
        this.addstatus = 'ADDED STUDENTS'
      },
      (err: any) => console.log(err)
    );
  }


  saveButtonStatus: any = 'SAVE'

  savethelist() {
    // console.log(this.currentIndex, "llllllllllllllllllllllllllllll", this.relen)
    this.saveButton = "SAVING"
    let data = { organisation_id: sessionStorage.getItem("organisation_id"), accepted: this.mapping, rejected: this.rejectedlist, lastItem: this.lastItem }
    // console.log("data---->", data)
    this.commonservice.postrequest('http://localhost:4000/hiringstudent/posthiringstudent', data).subscribe(
      (res: any) => { this.getWorkflow(); this.saveButton = "SAVE"; this.mapping = []; this.keys = []; },
      (err: any) => console.log(err)
    )
  }


  updatethelist() {
    this.commonservice.postrequest('http://localhost:4000/hiringstudent/hiringupdate', { organisation_id: sessionStorage.getItem("organisation_id"), accepted: this.mapping, rejected: this.rejectedlist, lastItem: this.lastItem }).subscribe(
      (res: any) => { this.saveButton = "SAVE"; this.mapping = []; this.keys = []; this.setedit = false; this.getWorkflow() },
      (err: any) => console.log(err)
    )
  }

  convert(a: any) {
    return parseInt(a) + 4;
  }

  // exportexcel(): void {
  //   const fileplacementcyclename = `${this.companydetails.companyname} ${this.companydetails.placementcyclename} Applicants List.xlsx`;
  //   /* table id is passed over here */
  //   let element = document.getElementById('excel-table');
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element, { raw: true });

  //   /* generate workbook and add the worksheet */
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   /* save to file */
  //   XLSX.writeFile(wb, fileplacementcyclename);
  // }

  dataForExcel: any = []
  exportexcel() {
    this.dataForExcel = []
    this.applicantslist.forEach((row: any) => {
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

  single: any = 'ADD'



  singlestudentmail() {
    this.single = 'ADDING'
    this.commonservice.postrequest('http://localhost:4000/placementstatus/singlestudent', { organisation_id: sessionStorage.getItem("organisation_id"), ...this.companydetails, rollnumber: this.singlestudent }).subscribe(
      (res: any) => { if (res.message == "success") { this.single = 'ADDED' } else if (res.message == "exist") { this.single = 'ALREADY EXIST' } },
      (err: any) => console.log(err)
    )
  }


  editorConfig: AngularEditorConfig = {
    editable: false,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: false,
    showToolbar: false,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    // upload: (file: File) => {  },
    uploadWithCredentials: false,
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      [
        'undo',
        'redo',
        'bold',
        'italic',
        'underline',
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'insertUnorderedList',
        'insertOrderedList',
        'heading',
        'fontName'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'customClasses',
        'link',
        'unlink',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode'
      ]
    ]
  };






}
