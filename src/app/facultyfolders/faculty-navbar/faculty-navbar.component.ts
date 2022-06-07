
import { Component, OnInit } from '@angular/core'; import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-faculty-navbar',
  templateUrl: './faculty-navbar.component.html',
  styleUrls: ['./faculty-navbar.component.css']
})
export class FacultyNavbarComponent implements OnInit {
  navMode = true;
  firstname = ''; show = false; all: any = []; notyet: any = []; shownot = false

  content: any =
    [
      { label: "Home", rlink: "/faculty/home", icon: 'bx bx-home-heart' },
      {
        label: "Dashboard", rlink: "/faculty/dashboard", icon: 'bx bx-bar-chart',
        submenu: [
          { label: "Placements", rlink: "/faculty/dashboard/facultyplacements" },
          { label: "Training", rlink: "/faculty/dashboard/facultytraining" },]
      },
      {
        label: "Students", rlink: "/faculty/student", icon: 'bx bxs-group',
        // submenu: [
        //   { label: "Search", rlink: "/faculty/student/search" },
        //   // {label:"Studentprofile",rlink:'/faculty/studentprofile'}
        // ]
      },
      { label: "Placements", rlink: "/faculty/placements", icon: 'bx bxs-graduation' },
      { label: "Companies", rlink: "/faculty/companies", icon: 'bx bx-buildings' },
      {
        label: "Coding", rlink: "/faculty/code", icon: 'bx bx-laptop',
        submenu: [
          { label: "Topics", rlink: "/faculty/code/topics" },
          { label: "Add", rlink: "/faculty/code/add" },]
      },
      {
        label: "Quiz", rlink: "/faculty/quiz", icon: 'bx bx-notepad',
        submenu: [
          { label: "Topics", rlink: "/faculty/quiz/topics" },
          { label: "Add", rlink: "/faculty/quiz/add" },]
      },
      {
        label: "Reports", rlink: "/faculty/reports", icon: 'bx bx-code-alt',
        submenu: [
          { label: "Placements", rlink: "/faculty/reports/placements" },
          { label: "Training", rlink: "/faculty/reports/training/overallreport" },]
      },
      // { label: "Users", rlink: "/faculty/users", icon: 'bx bx-user' },
      { label: "Calendar", rlink: "/faculty/calendar", icon: 'bx bx-calendar' },

    ]

  fullname: any = ''
  mail = sessionStorage.getItem('mail')

  constructor(private router: Router, private http: HttpClient, private commonservice: CommonService) {
    this.commonservice.postrequest('http://localhost:4000/facultydetails/findoneAdmin', { organisation_id: sessionStorage.getItem("organisation_id"), 'mail': this.mail }).subscribe(
      (res: any) => {
        if (res.admindata == null) { this.router.navigate(['/login']) }
        if (res.admindata.role != 'faculty') { this.router.navigate(['/login']) }
        this.firstname = res.admindata.firstname; sessionStorage.setItem('firstname', this.firstname)
        this.fullname = res.admindata.firstname + res.admindata.middlename + res.admindata.lastname
      },
      (err: any) => this.router.navigate(['/login'])
    );



    this.commonservice.postrequest('http://localhost:4000/verify', 'verify').subscribe(
      (res: any) => {
        (res.status !== 'success') ? this.router.navigate(['/login']) : null
      },
      (err: any) => this.router.navigate(['/login'])
    );
  }

  placenotify: any = []

  ngOnInit(): void {
    this.commonservice.postrequest('http://localhost:4000/placementstatus/notifyacceptreject', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        // console.log("notify", res)
        this.comnotify = res.data1
        this.placenotify = res.data2
        // console.log("this.placenotify", this.placenotify)
      },
      (err: any) => console.log(err)
    );

    this.commonservice.postrequest('http://localhost:4000/notification/findnotifications', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res1: any) => {
        let res = res1.docs
        this.notyet = res.filter((e: any) => e.verified == 'notyet')
        res.forEach((e: any) => {
          (e.verifiedbymail == sessionStorage.getItem('mail')) ? e.verifiedby = 'You' : null
        });
        this.all = res
        // console.log("this.all", this.all)
        // res.forEach((e: any) => {
        //   (e.doneby == sessionStorage.getItem('mail')) ? e.firstname = 'You' : null
        // });
        // this.adminotifications = res
      },
      (err: any) => console.log(err)
    );

    this.commonservice.postrequest('http://localhost:4000/notification/findadminoti', { organisation_id: sessionStorage.getItem("organisation_id") }).subscribe(
      (res: any) => {
        // console.log("res", res.reverse())
        // console.log("res.reverse", res)
        res.forEach((e: any) => {
          (e.doneby == sessionStorage.getItem('mail')) ? e.firstname = 'You' : null
        });
        this.adminotifications = res
        // console.log("resadmin", res)
      },
      (err: any) => console.log(err)
    );



  }


  expandArrow(e: any) {
    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
    let lowParent = e.target.parentElement;
    lowParent.classList.toggle("lowParentClass")
  }



  setedit() {
    sessionStorage.setItem("adminedit", "true")
  }
  setprofile() {
    sessionStorage.removeItem("adminedit")
  }

  logout() {
    sessionStorage.removeItem('mail');
    sessionStorage.clear();
    this.router.navigate(['/login'])
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

