import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  navMode = true;
  firstname: any = ''; show = false; all: any = []; notyet: any = []; shownot = false

  content: any =
    [
      { label: "Home", rlink: "/student/studenthome", icon: 'bx bxs-home' },
      { label: "Quiz", rlink: "/student/quiz", icon: 'bx bxs-graduation' },
      { label: "Coding", rlink: "/student/code", icon: 'bx bx-laptop' },
      { label: "Documents", rlink: "/student/documents", icon: 'bx bx-folder' },
      { label: "Aptitude", rlink: "/student/aptitude", icon: 'bx bx-joystick-button' },
      { label: "C Programming", rlink: "/student/cprogramming", icon: 'bx bx-copyright' },
      { label: "Java", rlink: "/student/java", icon: 'bx bxl-spring-boot' },
      { label: 'Python', rlink: "/student/python", icon: 'bx bxl-python' },
      { label: "DBMS", rlink: '/student/dbms', icon: "bx bxs-data" },
    ]

  mail = sessionStorage.getItem('mail')
  pId: any;
  placenotify: any;
  studentplacementinterest: any = -1

  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {

    this.commonservice.postrequest('http://localhost:4000/Studentdata/findstudentdetails', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
      (res: any) => {

        // console.log("res.data.firstname", res.data.firstname)
        if (res.data) {
          sessionStorage.setItem('firstname', res.data.firstname)
          this.commonservice.postrequest('http://localhost:4000/Studentdata/studentplacementinterest', { organisation_id: sessionStorage.getItem("organisation_id"), mail: sessionStorage.getItem('mail') }).subscribe(
            (response: any) => {

              // console.log(response, "HEeloooooooooooooooooo ia mmmm response")
              if (res.data.firstname == null) { this.router.navigate(['/login']) }
              this.firstname = sessionStorage.getItem('firstname')
              this.pId = this.firstname.charAt(0)
              // console.log(response,"llllllllllllllllll")
              response = response.data1.filter((r: any) => r[r.placementcyclename] != '')
              if (response.length != 0) {
                this.content.splice(1, 0, { label: "Offers", rlink: "/student/offers", icon: 'bx bx-buildings' })
              }
              else {
                // console.log("not interested tabssssssssssssss")
              }
              // console.log("this.pId", this.pId)



            })
        }
        else {
          this.router.navigate(['/login'])
        }
      },
      (err: any) => console.log(err)
    );



    this.commonservice.postrequest('http://localhost:4000/verify', 'verify').subscribe(
      (res: any) => {
        // console.log(res);
        (res.status !== 'success') ? this.router.navigate(['/login']) : null
      },
      (err: any) => this.router.navigate(['/login'])
    );

    // let mail = sessionStorage.getItem('mail')
    // this.commonservice.postrequest('http://localhost:4000/facultydetails/findoneAdmin', { organisation_id: sessionStorage.getItem("organisation_id"), 'mail': mail }).subscribe(
    //   (res: any) => {
    //     if (res.admindata == null) { this.router.navigate(['/login']) }
    //     if (res.admindata.role != 'admin') { this.router.navigate(['/login']) }
    //     this.firstname = res.admindata.firstname; sessionStorage.setItem('firstname', this.firstname)
    //   },
    //   (err: any) => this.router.navigate(['/login'])
    // );



    // this.commonservice.postrequest('http://localhost:4000/verify', 'verify').subscribe(
    //   (res: any) => {
    //     (res.status !== 'success') ? this.router.navigate(['/login']) : null
    //   },
    //   (err: any) => this.router.navigate(['/login'])
    // );
  }


  combinedata: any = []
  collegeName: any = ''
  ngOnInit(): void {
    this.commonservice.postrequest('http://localhost:4000/data/findcollegename', { organisation_id: sessionStorage.getItem('organisation_id') }).subscribe(
      (res: any) => {
        // console.log(res, ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
        this.collegeName = res.organisation
      },
      (err: any) => this.router.navigate(['/login'])
    );
    this.notification()
  }

  notification() {
    this.commonservice.postrequest('http://localhost:4000/placementstatus/notifyacceptreject', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        // console.log("notifyacceptreject", res)
        this.comnotify = res.data1

        this.placenotify = res.data2

        // console.log("this.placenotify", this.placenotify)
      },
      (err: any) => console.log(err)
    );
    this.commonservice.postrequest('http://localhost:4000/notification/findadminoti', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        res.forEach((e: any) => {
          (e.doneby == sessionStorage.getItem('mail')) ? e.firstname = 'You' : null
        });
        this.adminotifications = res
        // console.log("this.adminotifications", this.adminotifications)
      },
      (err: any) => console.log(err)
    );
    this.commonservice.postrequest('http://localhost:4000/notification/findnotifications', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        // console.log("findnotifications--------------------11111",res)
        this.all = res.filter((e: any) => e.mail == sessionStorage.getItem('mail'))
        // console.log("this.all", this.all)
        this.combinedata = [...this.placenotify, ...this.adminotifications, ...this.all]
        this.combinedata.sort((a: any, b: any) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))
        this.combinedata = this.combinedata.reverse()
        // console.log(this.combinedata, "commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmbineeeeeeeeeeeeeeeeeeeeeeeeee")

      },
      (err: any) => console.log(err)
    );
  }


  logout() {
    sessionStorage.removeItem('mail');
    sessionStorage.clear();
    this.router.navigate(['/arikya'])
  }



  det() {
    this.shownot = !this.shownot;
    this.show = false;
    this.showadminoti = false
    this.showcomnot = false



  }
  adminotifications: any = [];
  showadminoti = false

  admindet() {
    this.showadminoti = !this.showadminoti;
    this.show = false
    this.shownot = false;
    this.showcomnot = false



  }

  comnotify: any = [];
  showcomnot = false;
  comdet() {
    this.showcomnot = !this.showcomnot;
    this.show = false;
    this.showadminoti = false



  }
  changeNav() {
    this.navMode = !this.navMode
  }

  accept(c: any, d: any) {
    c.verified = d
    c.verifiedby = sessionStorage.getItem('firstname')
    c.verifiedbymail = sessionStorage.getItem('mail')
    this.commonservice.postrequest('http://localhost:4000/notification/updatenotifications', c).subscribe(
      (res: any) => {

      },
      (err: any) => console.log(err)
    );
  }

  download(c: any) {
    const source = `data:application/pdf;base64,${c.offerletter}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${c.rollnumber} ${c.companyname} offerleter.pdf`
    link.click();
  }

  acceptnot(c: any, d: any) {

    c.verifiedoffer = d
    this.commonservice.postrequest('http://localhost:4000/placementstatus/adminplaced', c).subscribe(
      (res: any) => {
        // console.log(res)
      },
      (err: any) => console.log(err)
    );
  }


}
